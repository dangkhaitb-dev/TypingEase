/* content/games/ms.mjs — halaman permainan menaip Bahasa Melayu (tooling/pages/games.mjs). Perkataan
 * diambil daripada data/words/ms.js, bank perkataan yang sama dengan kursus /ms/. Bố cục 116 = QWERTY
 * Mỹ, không phím chết: gõ thẳng. Xưng "anda" như khoá học. */
export default {
  worlds: {"rain": "Taman kelip-kelip", "race": "Litar senja", "keys": "Stesen angkasa"},
  slug: 'permainan-menaip',
  title: 'Permainan menaip percuma di papan kekunci anda | TypingEase',
  description: 'Tiga permainan menaip percuma: Hujan Kata, Lumba Bayang dan Buru Kekunci. Berlatih menaip sentuh pada papan kekunci anda dalam pelayar, tanpa daftar.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Halaman utama',
  crumb: 'Permainan menaip',
  eyebrow: 'Latihan yang terasa seperti bermain',
  h1: 'Permainan menaip',
  intro: 'Tiga permainan pendek untuk dimainkan antara pelajaran: hapuskan perkataan yang jatuh, berlumba dengan kelajuan anda sendiri, dan buru kekunci pada papan kekunci skrin. Skor terbaik anda hanya disimpan pada peranti ini.',
  tabsAria: 'Pilih permainan',
  locale: 'ms-MY',
  howAria: 'Cara bermain',
  how: {
    rain: ['Perkataan jatuh dari atas.', 'Taip perkataan itu dengan tepat.', 'Tekan bar ruang untuk menghapuskannya. Terlepas tiga, permainan tamat.'],
    race: ['Pilih kelajuan kereta perentak.', 'Taip petikan dari huruf pertama.', 'Sampai ke bendera sebelum kereta perentak.'],
    keys: ['Satu kekunci menyala pada papan kekunci.', 'Pandang skrin dan tekan kekunci itu.', 'Tekan sebanyak mungkin dalam 60 saat.']
  },
  modes: {
    rain: ['Hujan Kata', 'Taip perkataan yang jatuh dan tekan bar ruang untuk menghapuskannya.'],
    race: ['Lumba Bayang', 'Habiskan petikan sebelum kereta perentak.'],
    keys: ['Buru Kekunci', 'Tekan kekunci yang menyala, sebanyak mungkin dalam 60 saat.']
  },
  rain: {
    difficulty: 'Tahap', easy: 'Mudah', normal: 'Sederhana', hard: 'Sukar',
    score: 'Skor', level: 'Peringkat', lives: 'Nyawa', best: 'Terbaik',
    start: 'Mula', placeholder: 'Taip perkataan yang jatuh, kemudian bar ruang',
    hint: 'Jika tiga perkataan sampai ke bawah, permainan tamat. Tiada huruf beraksen: semua perkataan ditaip terus.'
  },
  race: {
    pace: 'Kereta perentak', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} PSM`,
    start: 'Mula berlumba', you: 'Anda', ghost: 'Perentak', placeholder: 'Taip petikan di atas, dari huruf pertama'
  },
  keys: {
    start: 'Mula memburu', time: 'Saat', hits: 'Kena', streak: 'Berturut', best: 'Terbaik',
    hint: 'Mata pada skrin, bukan pada tangan. Kekunci dikenali mengikut kedudukannya, jadi apa-apa susun atur sistem boleh digunakan.'
  },
  runtime: {
    over: 'Permainan tamat', again: 'Main lagi', newBest: 'Rekod baharu pada peranti ini!',
    rainResult: '{score} mata · {words} perkataan dihapuskan · {wpm} PSM · {accuracy}% tepat sasaran',
    raceReady: 'Kereta perentak bergerak pada {wpm} PSM. Tekan "Mula berlumba", kemudian taip huruf pertama untuk bermula.',
    raceGo: 'Mula!', raceWin: 'Anda sampai dahulu!', raceLose: 'Kali ini kereta perentak menang.',
    racePaused: 'Berhenti. Tekan "Mula berlumba" untuk bermula semula.',
    raceResult: '{seconds} saat · {wpm} PSM · ketepatan {accuracy}% · kereta perentak {ghost} PSM',
    paceBest: 'Rekod anda ({wpm} PSM)',
    keysResult: '{hits} kena · berturut terpanjang {streak} · ketepatan {accuracy}%'
  },
  sections: [
    { h2: 'Pilih permainan mengikut perkara yang paling menyukarkan anda', html: `<p>Tiga permainan di atas menguji tiga perkara yang berlainan. Buru Kekunci bertanya sama ada anda tahu di mana sesuatu huruf berada. Hujan Kata bertanya sama ada anda boleh menyiapkan satu perkataan Melayu sebelum ia jatuh. Lumba Bayang bertanya sama ada anda boleh mengekalkan rentak sepanjang satu baris perkataan.</p>
<p>Pilih yang paling hampir dengan masalah anda sekarang. Jika mata masih turun ke papan kekunci, mulakan dengan Buru Kekunci. Jika huruf sudah dikenali tetapi anda tersekat apabila menggabungkannya, cuba Hujan Kata. Jika perkataan sudah lancar tetapi rentak hilang di tengah baris, gunakan Lumba Bayang. Tiada akaun diperlukan, dan anda tidak perlu menamatkan kursus untuk bermain.</p>
<p>Pada pendapat saya, permainan bukan jalan pintas untuk menaip dengan cepat. Skor yang naik selepas sepuluh pusingan selalunya bermakna anda sudah biasa dengan permainan itu, bukan bahawa jari anda sudah berubah. Nilai sebenar sesuatu pusingan ialah ia menunjukkan dengan cepat di mana anda tersangkut; apa yang anda lakukan dengan maklumat itu selepasnya lebih penting daripada rekod baharu.</p>` },
    { h2: 'Hujan Kata: perkataan Melayu yang jatuh, tanpa huruf besar atau sempang', html: `<p>Pilih Mudah, Sederhana atau Sukar, kemudian mula. Taip perkataan yang sedang jatuh dan tekan bar ruang; Enter juga boleh digunakan. Setiap perkataan yang sampai ke bawah mengambil satu nyawa, dan tiga nyawa yang hilang menamatkan pusingan. Setiap kali lapan perkataan dihapuskan, peringkat naik dan perkataan jatuh lebih laju, jadi pusingan yang bermula dengan selesa akan menjadi sukar dengan sendirinya.</p>
<p>Tahap mengubah panjang perkataan. Mudah hanya menggunakan perkataan sehingga lima huruf, Sederhana sehingga lapan, dan Sukar menggunakan seluruh bank perkataan. Semua perkataan ditulis dalam huruf kecil a hingga z, tanpa sempang dan tanpa huruf besar, jadi kata ganda seperti <em>kanak-kanak</em> tidak akan muncul di sini. Itu latihan untuk unit kursus.</p>
<h3>Baca imbuhan dahulu</h3>
<p>Pada tahap Sukar, perkataan berimbuhan seperti <em>kebanyakan</em> dan <em>ketinggian</em> mula muncul. Daripada mengeja huruf demi huruf, kenal pasti awalan dan akhirannya dahulu, kemudian kata dasarnya. Jika anda menukar perkataan sasaran di tengah jalan, input anda tidak akan sepadan dengan mana-mana perkataan. Penyerahan yang salah memadamkan input, jadi semak apa yang anda taip sebelum menekan bar ruang.</p>
<p>Mata diberi mengikut panjang perkataan didarab dengan peringkat. Bandingkan skor hanya dengan pusingan pada tahap yang sama.</p>` },
    { h2: 'Lumba Bayang: berlumba dengan kelajuan yang anda pilih sendiri', html: `<p>Lumba Bayang ialah perlumbaan seorang pemain. Kereta perentak di sebelah anda bukan orang lain dalam talian dan bukan rakaman ketukan anda dahulu. Ia bergerak pada kelajuan tetap yang anda pilih, daripada 20 hingga 80 PSM, atau pada rekod lumba anda sendiri. Jika rekod belum ada, pilihan itu bermula pada 30 PSM, dan rekod di bawah 15 PSM dikira sebagai 15.</p>
<p>Tekan Mula berlumba. Kereta hanya bergerak apabila anda menaip huruf pertama, jadi anda ada masa untuk meletakkan jari pada baris asas. Petikan disusun secara rawak daripada perkataan Melayu dua hingga sembilan huruf, dipisahkan dengan ruang, tanpa huruf besar atau tanda baca. Ia bukan ayat yang boleh diteka; anda perlu membacanya.</p>
<h3>Betulkan kesilapan pertama</h3>
<p>Kereta anda hanya maju sejauh bahagian awal input yang betul. Jika satu huruf salah di awal, menaip lebih banyak huruf yang betul selepasnya tidak akan menggerakkan kereta. Cari kesilapan pertama, padamkan dengan Backspace dan teruskan. Jika anda selalu kalah dengan teruk, turunkan kelajuan; jika anda menang dengan mudah tiga kali berturut-turut, naikkan satu langkah. Gunakan kelajuan tetap apabila anda mahu membandingkan beberapa pusingan secara adil.</p>` },
    { h2: 'Buru Kekunci: kedudukan 26 huruf pada papan kekunci kursus', html: `<p>Satu kekunci menyala pada papan kekunci skrin. Tekan kekunci fizikal yang sama, kemudian cari sasaran seterusnya. Satu pusingan berlangsung 60 saat. Setiap tekanan betul menambah kiraan kena, dan kekunci yang salah memutuskan rentetan berturut. Lihat kedua-dua angka: banyak kena dengan rentetan pendek biasanya bermakna anda meneka.</p>
<p>Buru Kekunci membaca kedudukan fizikal kekunci, bukan aksara yang dihasilkan sistem, jadi tetapan input komputer anda tidak menjejaskannya. Sasarannya hanya huruf pada lapisan utama susun atur kursus, iaitu a hingga z. Koma bertitik, angka dan tanda baca tidak muncul. Permainan ini memerlukan papan kekunci fizikal; ia tidak berfungsi dengan papan kekunci skrin telefon.</p>
<h3>Perhatikan telunjuk kanan</h3>
<p>Dalam menaip sentuh, telunjuk kanan menjaga enam huruf: y, u, h, j, n dan m. Dalam teks Melayu jari itu antara yang paling sibuk, kerana <em>ny</em>, <em>ng</em> dan <em>m</em> muncul di mana-mana. Jika sasaran di kawasan itu lambat, pandang skrin, gerakkan telunjuk, dan kembalikan ke j sebelum sasaran seterusnya. Permainan hanya tahu kekunci yang ditekan; ia tidak tahu jari mana yang anda gunakan atau sama ada anda memandang ke bawah. Yang itu, anda perlu perhatikan sendiri.</p>` },
    { h2: 'Daripada keputusan permainan kepada pelajaran seterusnya', html: `<p>Sebelum bermain, pilih satu soalan. Adakah saya hilang kedudukan selepas baris bawah? Adakah saya terlupa bar ruang? Adakah saya meneruskan menaip selepas huruf yang salah? Selepas pusingan, jawab soalan itu sebelum menekan Main lagi. Catatan seperti "lambat pada b dan n" boleh dilatih. "Skor perlu lebih tinggi" tidak memberitahu apa-apa.</p>
<p>Kemudian padankan catatan itu dengan unit dalam <a class="inline-link" href="{course}">kursus {lessons} pelajaran</a>. Jika Buru Kekunci menunjukkan baris bawah bermasalah, ulang pelajaran z, x, c dan v, b, n dalam unit pertama. Jika Hujan Kata pada tahap Sukar gagal pada perkataan berimbuhan, unit Kelancaran dalam konteks berlatih pola imbuhan dalam ayat. Jika Lumba Bayang selalu tersekat pada kesilapan awal, masalahnya ketepatan, bukan kelajuan.</p>
<p>Untuk ukuran kelajuan yang boleh dibandingkan, gunakan <a class="inline-link" href="{test}">ujian menaip</a> dengan tempoh yang sama setiap kali. PSM dalam Hujan Kata, Lumba Bayang dan ujian mengukur tugas yang berlainan, jadi jangan bandingkan satu dengan yang lain. Rekod permainan disimpan dalam pelayar ini sahaja, berasingan bagi setiap bahasa, dan boleh hilang jika data laman dipadam.</p>` }
  ],
  faqTitle: 'Soalan lazim',
  faq: [
    ['Bolehkah saya bermain menentang orang lain?', 'Tidak. Lumba Bayang menentang kereta perentak yang mengekalkan kelajuan pilihan anda, atau rekod anda sendiri. Tiada pemain lain dan tiada papan pendahulu.'],
    ['Di manakah skor terbaik saya disimpan?', 'Hanya dalam pelayar ini, pada peranti ini. Tiada akaun, dan tiada apa-apa dihantar ke mana-mana.'],
    ['Bolehkah saya bermain di telefon?', 'Hujan Kata dan Lumba Bayang boleh dimainkan dengan papan kekunci telefon. Buru Kekunci memerlukan papan kekunci sebenar, kerana ia mengajar kedudukan kekunci.'],
    ['Kenapa perkataan yang betul tidak dihapuskan?', 'Perkataan mesti sama sepenuhnya sebelum anda menekan bar ruang. Periksa huruf besar yang tertaip atau huruf yang tertinggal.'],
    ['Apakah beza Mudah, Sederhana dan Sukar dalam Hujan Kata?', 'Mudah menggunakan perkataan sehingga lima huruf dengan kelajuan jatuh paling perlahan, Sederhana sehingga lapan huruf, dan Sukar menggunakan semua perkataan dengan kelajuan paling tinggi. Dalam semua tahap, peringkat naik setiap kali lapan perkataan dihapuskan.'],
    ['Kenapa tiada kata ganda atau huruf besar dalam permainan?', 'Bank perkataan permainan hanya mengandungi perkataan tunggal dalam huruf kecil a hingga z. Kata ganda bersempang, huruf besar dan tanda baca dilatih dalam unit kursus dan dalam ujian menaip, bukan di sini.']
  ],
  cta: { eyebrow: 'Mahu bermain lebih baik?', title: 'Belajar menaip sentuh', text: '{lessons} pelajaran pada susun atur papan kekunci anda sendiri, bermula dengan baris asas.', button: 'Lihat kursus' }
};
