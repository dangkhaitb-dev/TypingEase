/** Physical pitches, independent of language, legends and legacy pixel widths.
 * The typing block is 15 standard key units (1u = one switch pitch).
 * Original entry indexes survive moves so highlighting and hand targets retain identity.
 */
export function physicalStandardFor(layout) {
  const declared = layout?.physicalStandard || layout?.geometry?.physicalStandard;
  if (declared) return declared;
  const keys = layout?.structure?.flat() || [];
  if (layout?.type === 'keypad') return 'keypad';
  if (keys.some(key => key.hardware === 'IntlYen')) return 'jis-109';
  if (keys.some(key => key.hardware === 'IntlBackslash')) {
    return keys.some(key => key.hardware === 'IntlRo') ? 'abnt2-107' : 'iso-105';
  }
  return 'ansi-104';
}

function keyWidth(entry, row, standard) {
  if (Number(entry.widthU) > 0) return Number(entry.widthU);
  const jis = standard.startsWith('jis-');
  const iso = standard === 'iso-105' || standard === 'abnt2-107';
  switch (entry.hardware) {
    case 'Backspace': return jis ? 1 : 2;
    case 'Tab': return 1.5;
    case 'CapsLock': return 1.75;
    case 'Backslash': return row === 1 && !iso && !jis ? 1.5 : 1;
    case 'Enter': return iso || jis ? 1.25 : 2.25;
    case 'ShiftLeft': return iso ? 1.25 : 2.25;
    case 'ShiftRight': return standard === 'abnt2-107' || jis ? 1.75 : 2.75;
    case 'Space': return jis ? 2.5 : 6.25;
    case 'ControlLeft': case 'ControlRight': case 'AltLeft': case 'AltRight':
    case 'MetaLeft': case 'MetaRight': case 'ContextMenu': return 1.25;
    case 'NonConvert': case 'Convert': case 'KanaMode': return 1.25;
    default: return 1;
  }
}

export function keyboardGeometry(layout) {
  const standard = physicalStandardFor(layout);
  let index = 0;
  const rows = (layout?.structure || []).map(row => row.map(entry => ({ entry, index: index++ })));
  if (standard === 'keypad') {
    return { standard, units: 4, rows: rows.map(row => {
      let x = 0;
      return row.map(item => {
        const widthU = Number(item.entry.widthU) || 1;
        const position = { ...item, x, widthU, heightU: Number(item.entry.heightU) || 1, spacer: item.entry.spacer || item.entry.hardware?.endsWith('Spacer') };
        x += widthU;
        return position;
      });
    }) };
  }
  const tallEnter = standard === 'iso-105' || standard === 'abnt2-107' || standard.startsWith('jis-');
  if (tallEnter && rows[1] && rows[2]) {
    const movedIndex = rows[1].findIndex(item => item.entry.hardware === 'Backslash');
    const enterIndex = rows[2].findIndex(item => item.entry.hardware === 'Enter');
    if (movedIndex >= 0 && enterIndex >= 0) {
      const [backslash] = rows[1].splice(movedIndex, 1);
      rows[2].splice(enterIndex, 0, backslash);
    }
    rows[1].push({ slot: true, widthU: 1.5 });
  }
  const positioned = rows.map((row, rowIndex) => {
    // Seven-control Mac/legacy bottom rows deliberately have no Menu key.
    // Allocate their wider spacebar without stretching all other caps.
    const bottom = rowIndex === rows.length - 1;
    const widths = row.map(item => item.slot ? item.widthU : keyWidth(item.entry, rowIndex, standard));
    const sum = widths.reduce((total, width) => total + width, 0);
    const space = bottom ? row.findIndex(item => item.entry?.hardware === 'Space') : -1;
    if (space >= 0 && !row[space].entry.widthU && Math.abs(sum - 15) > .001) widths[space] += 15 - sum;
    let x = 0;
    return row.map((item, keyIndex) => {
      const widthU = widths[keyIndex];
      const key = { ...item, x, widthU, tallEnter: tallEnter && item.entry?.hardware === 'Enter' };
      x += widthU;
      return key;
    });
  });
  // Partial/specialty data can retain its physical pitches without clipping.
  const units = Math.max(15, ...positioned.map(row => row.reduce((sum, item) => sum + item.widthU, 0)));
  return { standard, units, rows: positioned };
}
