/* data/words/en.js — the English word bank the /en/ curriculum is built from.
 *
 * Loaded two ways, which is why it is a browser global rather than a module:
 *   - Node, via `new Function('window', src)` — scripts/build-lessons-en.js and
 *     scripts/validate-lessons.js, exactly how curriculum.*.js is already loaded.
 *   - The browser, via <script src> — weak-keys.js, for the English drill pool.
 * One file, one source of truth, no build step, no fetch.
 *
 * PROVENANCE. Ordinary English words are not anyone's property, but a curated *list*
 * can carry thin compilation rights, so this one is derived independently: vocabulary
 * from public-domain sources (12dicts, Moby/Grady Ward), ordered by frequency counted
 * over Project Gutenberg texts, then hand-vetted. Nothing here is taken from any typing
 * site's lesson content — see the "no copying typing.com" rule in DECISIONS.md.
 *
 * HOUSE RULES for anything added here:
 *   - /^[a-z']+$/ only. No capitals (Shift is taught late), no hyphens, no accents.
 *   - US spelling throughout. Mixed US/UK spelling is spotted within one screen.
 *   - No proper nouns outside `names`; no archaic words; nothing violent, medical,
 *     political or otherwise unpleasant to be made to type thirty times.
 *   - Words are grouped by the lesson that first makes them typeable, because that is
 *     the only ordering the generator cares about. A word may of course be reused later.
 *
 * The groups below are commentary, not structure: the generator filters the flat `words`
 * array by the key set it is allowed to use, so a word in the wrong group is harmless.
 * They exist so a human can see at a glance where the course gets thin.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.en = {
  lang: 'en',
  spelling: 'us',

  words: [
    // --- a s d f j k l  (u1-l04) -------------------------------------------------------
    // The first point in the course where English words exist at all. It is a short list,
    // and that is the honest shape of the constraint, not a gap to be padded with
    // invented words.
    'a', 'ad', 'ads', 'add', 'adds', 'alas', 'all', 'as', 'ask', 'asks', 'dad', 'dads',
    'fad', 'fads', 'fall', 'falls', 'flask', 'flasks', 'lad', 'lads', 'lass', 'sad',
    'salad', 'salads', 'alfalfa', 'flak',

    // --- + g h  (u1-l06) ---------------------------------------------------------------
    'gas', 'gash', 'glad', 'glass', 'gala', 'saga', 'shag', 'half', 'hall', 'halls',
    'shall', 'flash', 'slash', 'hash', 'ash', 'has', 'had', 'lash', 'sash', 'flag',
    'flags', 'aghast', 'haggle', 'gaff', 'ha', 'ah', 'aha', 'gals', 'gal',

    // --- + e i  (u1-l07) ---------------------------------------------------------------
    // The course opens up here: two vowels turn a letter set into a language.
    'he', 'she', 'is', 'if', 'his', 'hi', 'die', 'lie', 'lies', 'like', 'likes', 'life',
    'file', 'files', 'field', 'fields', 'flies', 'seal', 'seals', 'deal', 'deals', 'heal',
    'head', 'heads', 'idea', 'ideas', 'ill', 'kid', 'kids', 'silk', 'dish', 'dishes',
    'fish', 'desk', 'desks', 'less', 'sail', 'sails', 'fail', 'fails', 'jail', 'glide',
    'shield', 'shelf', 'isle', 'aisle', 'shed', 'sled', 'held', 'shake', 'shakes',
    'lake', 'lakes', 'jade', 'fake', 'fade', 'side', 'sides', 'slide', 'slides', 'hide',
    'aside', 'flake', 'flakes', 'safe', 'sake', 'sale', 'sales', 'sages', 'ages', 'age',
    'edge', 'edges', 'high', 'highs', 'sigh', 'kale', 'leaf', 'leak', 'leaks', 'leash',
    'heel', 'heels', 'feel', 'feels', 'feed', 'feeds', 'deed', 'deeds', 'seed', 'seeds',
    'flee', 'glee', 'eel', 'ideal', 'ledge', 'alike', 'halide', 'shale', 'shade', 'shades',

    // --- + r u  (u1-l08) ---------------------------------------------------------------
    // With r and u the unit can finally write sentences that sound like speech.
    'are', 'her', 'hers', 'here', 'hear', 'hears', 'heard', 'sure', 'girl', 'girls',
    'first', 'fire', 'fires', 'hire', 'rule', 'rules', 'rush', 'rushed', 'rise', 'rises',
    'risk', 'risks', 'ride', 'rides', 'read', 'reads', 'real', 'really', 'red', 'rid',
    'rail', 'rails', 'raid', 'rare', 'rear', 'reef', 'refill', 'relief',
    'air', 'ear', 'ears', 'early', 'earl', 'egg', 'eggs', 'hurdle', 'hurl',
    'usual', 'user', 'users', 'use', 'used', 'uses', 'guard', 'guards', 'guide', 'guides',
    'guess', 'guessed', 'jug', 'jugs', 'judge', 'judges', 'large', 'lure', 'lures',
    'laugh', 'laughs', 'daughter', 'sugar', 'shrug', 'flare', 'flares', 'glare', 'glares',
    'share', 'shares', 'shark', 'sharks', 'harsh', 'hard', 'harder', 'furl', 'fuel',
    'ruler', 'rulers', 'rural', 'silage', 'shrill', 'grief', 'grill', 'grid', 'girder',
    'drag', 'drags', 'drill', 'drills', 'dried', 'drier', 'dread', 'dear', 'dears',
    'elder', 'freed', 'fresh', 'fridge', 'friar', 'gear', 'gears', 'grade',
    'grades', 'grease', 'greed', 'guild', 'hail', 'hails', 'hair', 'hairs', 'heir',
    'jailer', 'lager', 'liar', 'liars', 'refuse', 'regard', 'regards', 'reside', 'residue',
    'salud', 'series', 'serial', 'shred', 'silver', 'slurred', 'surf',
    'surge', 'urge', 'urges', 'usher',

    // --- + t y  (u2-l01) ---------------------------------------------------------------
    'the', 'that', 'this', 'they', 'there', 'their', 'these', 'thus', 'it', 'its',
    'at', 'to', 'take', 'takes', 'talk', 'talks', 'tall', 'tail', 'tails', 'teach',
    'tea', 'team', 'tear', 'tears', 'test', 'tests', 'text', 'thick', 'third',
    'tide', 'tidy', 'tie', 'ties', 'tiger', 'tight', 'tile', 'tiles', 'till', 'time',
    'times', 'tired', 'title', 'titles', 'trade', 'trades', 'trail', 'trails', 'train',
    'trains', 'treat', 'treats', 'tree', 'trees', 'tried', 'tries', 'true', 'truly',
    'trust', 'try', 'yard', 'yards', 'year', 'years', 'yeast', 'yes', 'yet', 'yield',
    'daily', 'easily', 'fairly', 'gladly', 'hardly', 'lately', 'likely',
    'sadly', 'safely', 'city', 'duty', 'fifty', 'lady', 'lily', 'party', 'salty', 'study',
    'style', 'ugly', 'stay', 'stays', 'steal', 'steady', 'steel', 'still', 'straight',
    'street', 'strike', 'suit', 'suits', 'later', 'latest', 'letter', 'letters',
    'light', 'lights', 'little', 'list', 'lists', 'least', 'last', 'lasted', 'left',
    'gather', 'father', 'rather', 'either', 'height', 'eight', 'right', 'rights', 'sight',
    'slight', 'delight', 'faith', 'health', 'girth', 'lathe',

    // --- + o w  (u2-l02) ---------------------------------------------------------------
    'do', 'of', 'or', 'so', 'go', 'goes', 'old', 'older', 'only', 'other', 'others',
    'our', 'out', 'over', 'often', 'off', 'offer', 'offers', 'office', 'oil', 'okay',
    'order', 'orders', 'ought', 'goal', 'goals', 'gold', 'good', 'goods', 'got', 'hold',
    'holds', 'hole', 'holes', 'home', 'homes', 'hope', 'hopes', 'hot', 'hour', 'hours',
    'house', 'houses', 'how', 'however', 'lose', 'lost', 'lot', 'loud', 'love', 'loves',
    'low', 'road', 'roads', 'roll', 'rolls', 'roof', 'room', 'rooms', 'root', 'roots',
    'rose', 'roses', 'route', 'routes', 'sold', 'sole', 'solid', 'some', 'soft', 'sort',
    'sought', 'sour', 'south', 'store', 'stores', 'story', 'stories', 'stood', 'stool',
    'thought', 'those', 'though', 'through', 'today', 'together', 'told', 'took', 'tool',
    'tools', 'tooth', 'tour', 'tours', 'toward', 'towel', 'tower', 'water', 'waters',
    'way', 'ways', 'we', 'wear', 'week', 'weeks', 'weigh', 'weight', 'well', 'were',
    'what', 'wheat', 'wheel', 'wheels', 'where', 'whether', 'which', 'while', 'whole',
    'whose', 'why', 'wide', 'wife', 'wild', 'will', 'wish', 'wishes', 'with', 'without',
    'word', 'words', 'work', 'works', 'world', 'worth', 'would', 'wrote', 'wood', 'wool',
    'walk', 'walks', 'wall', 'walls', 'wash', 'watch', 'wait', 'waits', 'white', 'whistle',
    'follow', 'follows', 'allow', 'allows', 'flow', 'flows', 'glow', 'grow', 'grows',
    'show', 'shows', 'slow', 'slowly', 'throw', 'threw', 'yellow', 'shadow', 'widow',

    // --- + c n  (u2-l03) ---------------------------------------------------------------
    'and', 'an', 'in', 'on', 'no', 'not', 'nor', 'now', 'can', 'could', 'car', 'cars',
    'care', 'careful', 'carry', 'case', 'cases', 'cash', 'cat', 'cats', 'catch', 'cause',
    'cell', 'cells', 'center', 'chair', 'chairs', 'chance', 'change', 'changes', 'cheap',
    'check', 'checks', 'child', 'children', 'choice', 'choose', 'circle', 'class',
    'classes', 'clean', 'clear', 'clearly', 'clock', 'close', 'closed', 'cloth', 'cloud',
    'coach', 'coast', 'coat', 'coats', 'cold', 'collect', 'college', 'color', 'colors',
    'cool', 'corner', 'cost', 'costs', 'cotton', 'count', 'country', 'course', 'court',
    'cover', 'covers', 'cross', 'crowd', 'cut', 'cycle', 'near', 'nearly', 'neat', 'need',
    'needs', 'never', 'new', 'news', 'next', 'nice', 'night', 'nights', 'nine', 'north',
    'nose', 'note', 'notes', 'nothing', 'notice', 'natural', 'nature', 'national',
    'one', 'once', 'onto', 'open', 'opens', 'end', 'ends', 'enough', 'enter',
    'entire', 'each', 'eat', 'even', 'evening', 'ever', 'every', 'inside', 'instead',
    'into', 'iron', 'island', 'answer', 'another', 'action', 'across', 'act',
    'again', 'against', 'agree', 'ahead', 'also', 'along', 'although', 'always', 'around',
    'arrive', 'article', 'attention', 'become', 'behind', 'being', 'best', 'better',
    'between', 'both', 'bring', 'build', 'business', 'french', 'garden', 'general',
    'grand', 'green', 'ground', 'group', 'hand', 'hands', 'hang', 'happen',
    'thank', 'thanks', 'than', 'then', 'thin', 'thing', 'things', 'think', 'thinks',
    'land', 'lands', 'language', 'learn', 'learns', 'leave', 'length', 'line',
    'lines', 'listen', 'local', 'long', 'longer', 'look', 'looks', 'lunch', 'machine',
    'main', 'find', 'finds', 'fine', 'finish', 'front', 'fun', 'function',

    // --- + m v  (u2-l04) ---------------------------------------------------------------
    'me', 'my', 'am', 'man', 'men', 'many', 'may', 'mail', 'make', 'makes', 'made',
    'march', 'mark', 'market', 'match', 'matter', 'meal', 'mean', 'means', 'meant',
    'measure', 'meat', 'meet', 'meets', 'member', 'memory', 'message', 'metal', 'method',
    'middle', 'might', 'mile', 'miles', 'milk', 'mind', 'mine', 'minute', 'minutes',
    'mirror', 'miss', 'mistake', 'model', 'modern', 'moment', 'money', 'month', 'months',
    'moon', 'more', 'morning', 'most', 'mother', 'motion', 'mountain', 'mouth', 'move',
    'moves', 'movie', 'much', 'music', 'must', 'value', 'values', 'various', 'very',
    'view', 'views', 'village', 'visit', 'visits', 'voice', 'voices', 'volume', 'vote',
    'have', 'having', 'give', 'gives', 'given', 'live', 'lives', 'loved',
    'moved', 'seven', 'eleven', 'above', 'divide', 'drive', 'drives', 'driver',
    'heavy', 'involve', 'level', 'movement', 'observe', 'remove',
    'river', 'rivers', 'serve', 'several', 'travel', 'universe', 'valley',
    'name', 'names', 'number', 'numbers', 'common', 'company', 'complete', 'computer',
    'summer', 'system', 'simple', 'small', 'smile', 'smiles', 'something',
    'sometimes', 'game', 'games', 'came', 'come', 'comes', 'coming',
    'same', 'seem', 'seems', 'teams', 'them', 'theme',

    // --- + q p  (u2-l06) ---------------------------------------------------------------
    'page', 'pages', 'paper', 'papers', 'part', 'parts', 'pass', 'past', 'path',
    'pay', 'peace', 'people', 'per', 'perhaps', 'period', 'person', 'phone', 'phones',
    'photo', 'picture', 'piece', 'place', 'places', 'plain', 'plan', 'plans', 'plant',
    'plants', 'play', 'plays', 'please', 'plenty', 'point', 'points', 'poor', 'popular',
    'position', 'possible', 'power', 'practice', 'prepare', 'present', 'press', 'pretty',
    'price', 'print', 'problem', 'produce', 'program', 'project', 'proper', 'protect',
    'prove', 'provide', 'public', 'pull', 'purpose', 'push', 'put', 'quality', 'quarter',
    'question', 'questions', 'quick', 'quickly', 'quiet', 'quietly', 'quite', 'quote',
    'apart', 'appear', 'apple', 'apply', 'happy', 'help', 'helps',
    'keep', 'keeps', 'kept', 'report', 'reply',
    'sleep', 'speak', 'special', 'spend', 'spent', 'spring', 'square', 'stop', 'stops',
    'support', 'surprise', 'temperature', 'top', 'type', 'types', 'up', 'upon', 'upper',

    // --- + b x  (u2-l07) ---------------------------------------------------------------
    'be', 'by', 'but', 'back', 'bad', 'bag', 'bags', 'balance', 'ball', 'bank', 'base',
    'basic', 'beach', 'bear', 'beat', 'beautiful', 'because', 'bed', 'been', 'before',
    'began', 'begin', 'believe', 'below', 'beside', 'big', 'bill', 'bird', 'birds',
    'birth', 'bit', 'black', 'block', 'blood', 'blue', 'board', 'boat', 'body', 'boil',
    'book', 'books', 'born', 'borrow', 'bottle', 'bottom', 'bought', 'box', 'boxes',
    'boy', 'boys', 'branch', 'bread', 'break', 'breakfast', 'breath', 'bridge', 'bright',
    'broad', 'broke', 'broken', 'brother', 'brown', 'brush', 'burn', 'bus', 'busy',
    'butter', 'button', 'buy', 'about', 'able', 'remember', 'subject',
    'exact', 'exactly', 'examine', 'example', 'excellent', 'except', 'exchange', 'excited',
    'exercise', 'exist', 'expect', 'experience', 'explain', 'express', 'extra', 'extreme',
    'fix', 'mix', 'six', 'sixty', 'index', 'relax', 'taxi', 'maximum',

    // --- + z . ,  '  (u2-l08) ----------------------------------------------------------
    'zero', 'zone', 'zones', 'size', 'sizes', 'lazy', 'amaze', 'amazing', 'dozen',
    'freeze', 'frozen', 'prize', 'puzzle', 'quiz', 'realize', 'recognize', 'organize',
    'citizen', 'horizon', 'magazine', 'buzz', 'jazz',
    // Contractions. The whole reason the apostrophe is taught at all: without these,
    // every sentence in the rest of the course reads like an instruction manual.
    "don't", "doesn't", "didn't", "isn't", "aren't", "wasn't", "weren't", "can't",
    "couldn't", "won't", "wouldn't", "shouldn't", "haven't", "hasn't", "hadn't",
    "i'm", "i've", "i'll", "i'd", "you're", "you've", "you'll", "you'd", "he's",
    "she's", "it's", "we're", "we've", "we'll", "they're", "they've", "they'll",
    "that's", "there's", "here's", "what's", "let's", "who's",

    // --- từ chỉ dùng cho kho luyện phím yếu ---------------------------------------
    // Chúng vào đây để không có từ nào chỉ tồn tại ở bài phím yếu: mọi thứ người học gặp
    // trong drill đều là từ giáo trình đã công nhận ở chỗ khác.
    'after', 'aid', 'ale', 'any', 'call', 'dark', 'dash', 'date', 'day', 'deep',
    'door', 'down', 'draw', 'drink', 'drop', 'dry', 'east', 'easy', 'face', 'fact',
    'fair', 'farm', 'fast', 'few', 'five', 'floor', 'food', 'foot', 'for', 'form',
    'four', 'free', 'from', 'full', 'gate', 'grass', 'great', 'hat', 'heat', 'horse',
    'human', 'hunt', 'ice', 'job', 'join', 'jump', 'just', 'key', 'kind', 'know',
    'late', 'lead', 'leg', 'let', 'map', 'own', 'pair', 'park', 'pick', 'race',
    'rain', 'ran', 'rate', 'reach', 'ready', 'rest', 'rich', 'ring', 'rock', 'rope',
    'round', 'run', 'said', 'salt', 'sand', 'save', 'saw', 'say', 'school', 'sea',
    'seat', 'see', 'sell', 'send', 'sense', 'set', 'shape', 'sharp', 'sheep', 'ship',
    'shoe', 'shop', 'short', 'shot', 'shut', 'sick', 'sign', 'since', 'sing', 'single',
    'sister', 'sit', 'skin', 'sky', 'snow', 'soil', 'son', 'song', 'soon', 'sound',
    'soup', 'space', 'speed', 'sport', 'spot', 'stand', 'star', 'start', 'step', 'stick',
    'stone', 'storm', 'strong', 'such', 'sun', 'table', 'taste', 'tax', 'tell', 'ten',
    'three', 'tiny', 'tire', 'tone', 'too', 'total', 'touch', 'town', 'track', 'trip',
    'turn', 'two', 'under', 'until', 'us', 'want', 'warm', 'wave', 'went', 'west',
    'when', 'who', 'win', 'wind', 'window', 'wine', 'wing', 'winter', 'wire', 'wise',
    'write', 'wrong', 'you', 'young'
  ],

  /* Names for the Shift lesson and for sentences that need a subject. Short, plain,
     drawn from several language backgrounds, nothing that reads as a real public figure. */
  names: [
    'Ada', 'Alex', 'Ali', 'Amara', 'Ana', 'Anna', 'Ben', 'Carl', 'Chen', 'Clara',
    'Dana', 'Dev', 'Ella', 'Emil', 'Eva', 'Farid', 'Gita', 'Grace', 'Hana', 'Hugo',
    'Ida', 'Ines', 'Ivan', 'Jack', 'Jana', 'Jonas', 'Julia', 'Kai', 'Kira', 'Lara',
    'Leo', 'Lila', 'Luis', 'Maja', 'Marco', 'Maria', 'Mei', 'Nadia', 'Nina', 'Noah',
    'Omar', 'Oscar', 'Paul', 'Petra', 'Rosa', 'Ruth', 'Sam', 'Sara', 'Tara', 'Theo',
    'Tomas', 'Vera', 'Yara', 'Zoe'
  ],

  /* Sentences are WRITTEN, never assembled. A generator that glues words together
     produces grammatical noise, and readers notice within two screens. The generator's
     only job here is to pick the ones whose every character is already taught.
     Lowercase and unpunctuated on purpose: the course does not teach `.` until u2-l08
     or Shift until u2-l09, so the generator adds the capital and the full stop only
     once the lesson is allowed to use them. */
  sentences: [
    // typeable early (home row + g h e i r u)
    'she asked her dad',
    'his idea is a real deal',
    'the girls are here',
    // typeable from u2-l01 (t y)
    'she said that it is easy',
    'they are still here',
    'the little girl read the list',
    'it is easier than it looks',
    // typeable from u2-l02 (o w)
    'we go to the old house',
    'the story is worth it',
    'he told us how it works',
    'the water is cold today',
    'do you know where it goes',
    'they wrote two short letters',
    'our house is at the top of the hill',
    'the road was too rough to walk',
    // typeable from u2-l03 (c n)
    'you can learn this in one hour',
    'the class starts in ten minutes',
    'no one can teach you to care',
    'she can hear the clock in the hall',
    'a good night can change the whole day',
    'the answer is not on this one line',
    // typeable from u2-l04 (m v)
    'my mother made a small meal',
    'we have more time than we think',
    'every minute moves the same way',
    'the movie was over at ten',
    'i am not in a hurry',
    'some things never move at all',
    'the mountain is over there',
    // typeable from u2-l06 (q p)
    'people do not type to look busy',
    'a quiet place helps you think',
    'please put the paper on the top shelf',
    'the question is simple enough',
    'keep your eyes up and your hands still',
    'speed is what happens after accuracy',
    // typeable from u2-l07 (b x)
    'the box is bigger than the book',
    'be quick but do not be careless',
    'break the habit before it breaks you',
    'six words are better than sixty',
    'you will be back here tomorrow',
    // typeable from u2-l08 (z . , ')
    "i don't look at the keys any more",
    "it isn't speed that matters first",
    "she can't type fast yet and that's fine",
    "we're going to read the whole page",
    "that's the size of it",
    "you'll get there one line at a time"
  ],

  /* The runtime pool weak-keys.js draws from. Unit-1-typeable words come first, on
     purpose: the very first weak-key drill runs with only the Unit 1 keys allowed, and
     a pool that starts with `people` and `question` would leave it with nothing to say.
     Short words only — a drill is about hitting one key correctly, not about reading. */
  drill: [
    // Unit 1 keys only: a s d f g h e i j k l r u ;
    'aid', 'air', 'ale', 'all', 'are', 'ash', 'ask', 'dad', 'dash', 'deal', 'dear',
    'desk', 'die', 'dish', 'drag', 'dried', 'ear', 'edge', 'fail', 'fair', 'fall',
    'feed', 'feel', 'field', 'file', 'fire', 'first', 'fish', 'flag', 'flash', 'flee',
    'fresh', 'gas', 'gear', 'girl', 'glad', 'glass', 'glide', 'grade', 'grief', 'grill',
    'guard', 'guess', 'guide', 'had', 'hail', 'hair', 'half', 'hall', 'hard', 'has',
    'head', 'heal', 'hear', 'heard', 'heel', 'her', 'here', 'hide', 'high', 'his',
    'idea', 'ideal', 'if', 'ill', 'is', 'jail', 'judge', 'jug', 'kid', 'lad', 'lake',
    'large', 'lash', 'laugh', 'leaf', 'leak', 'less', 'lie', 'life', 'like', 'raid',
    'rail', 'read', 'real', 'red', 'ride', 'rise', 'risk', 'rule', 'rush', 'sad',
    'safe', 'sail', 'salad', 'sale', 'seal', 'seed', 'shade', 'shake', 'shall', 'share',
    'shed', 'shelf', 'side', 'sigh', 'silk', 'slide', 'sugar', 'sure', 'surf', 'urge',
    'use', 'used', 'user',
    // Unit 2 keys
    'able', 'about', 'add', 'after', 'again', 'also', 'and', 'any', 'back', 'bad',
    'bag', 'ball', 'bank', 'base', 'bear', 'beat', 'bed', 'best', 'big', 'bird',
    'bit', 'black', 'block', 'blue', 'boat', 'body', 'book', 'born', 'box', 'boy',
    'bread', 'bright', 'bring', 'brown', 'burn', 'bus', 'busy', 'buy', 'call', 'came',
    'can', 'car', 'care', 'case', 'cash', 'cat', 'cell', 'chair', 'check', 'city',
    'class', 'clean', 'clear', 'clock', 'close', 'cloud', 'coat', 'cold', 'color',
    'come', 'cool', 'cost', 'count', 'cover', 'cross', 'cut', 'daily', 'dark', 'date',
    'day', 'deep', 'do', 'door', 'down', 'draw', 'drink', 'drive', 'drop', 'dry',
    'each', 'early', 'east', 'easy', 'eat', 'eight', 'end', 'even', 'ever', 'exact',
    'face', 'fact', 'farm', 'fast', 'father', 'few', 'find', 'fine', 'five', 'fix',
    'floor', 'flow', 'food', 'foot', 'for', 'form', 'four', 'free', 'from', 'full',
    'fun', 'game', 'gate', 'give', 'go', 'gold', 'good', 'grass', 'great', 'green',
    'grow', 'hand', 'hang', 'happy', 'hat', 'have', 'heat', 'help', 'hold', 'hole',
    'home', 'hope', 'horse', 'hot', 'hour', 'house', 'how', 'human', 'hunt', 'ice',
    'in', 'into', 'iron', 'it', 'job', 'join', 'jump', 'just', 'keep', 'key', 'kind',
    'know', 'land', 'last', 'late', 'lead', 'learn', 'leave', 'left', 'leg', 'let',
    'letter', 'level', 'light', 'line', 'list', 'listen', 'little', 'live', 'local',
    'long', 'look', 'lot', 'loud', 'love', 'low', 'made', 'mail', 'main', 'make',
    'man', 'many', 'map', 'mark', 'may', 'meal', 'mean', 'meat', 'meet', 'metal',
    'mile', 'milk', 'mind', 'mix', 'model', 'money', 'month', 'moon', 'more', 'most',
    'move', 'much', 'music', 'must', 'my', 'name', 'near', 'neat', 'need', 'never',
    'new', 'next', 'nice', 'night', 'nine', 'no', 'north', 'nose', 'note', 'now',
    'number', 'of', 'off', 'often', 'oil', 'old', 'on', 'once', 'one', 'only', 'open',
    'or', 'order', 'other', 'our', 'out', 'over', 'own', 'page', 'pair', 'paper',
    'park', 'part', 'pass', 'past', 'path', 'pay', 'people', 'person', 'phone', 'pick',
    'piece', 'place', 'plan', 'plant', 'play', 'point', 'poor', 'power', 'press',
    'price', 'print', 'pull', 'push', 'put', 'quick', 'quiet', 'quite', 'race', 'rain',
    'ran', 'rate', 'reach', 'ready', 'rest', 'rich', 'right', 'ring', 'river', 'road',
    'rock', 'roll', 'roof', 'room', 'root', 'rope', 'round', 'run', 'said',
    'salt', 'same', 'sand', 'save', 'saw', 'say', 'school', 'sea', 'seat', 'see',
    'seem', 'sell', 'send', 'sense', 'set', 'seven', 'shape', 'sharp', 'sheep', 'ship',
    'shoe', 'shop', 'short', 'shot', 'show', 'shut', 'sick', 'sign', 'silver', 'simple',
    'since', 'sing', 'single', 'sister', 'sit', 'six', 'size', 'skin', 'sky', 'sleep',
    'slow', 'small', 'smile', 'snow', 'so', 'soft', 'soil', 'sold', 'some', 'son',
    'song', 'soon', 'sort', 'sound', 'soup', 'south', 'space', 'speak', 'speed',
    'spend', 'sport', 'spot', 'spring', 'stand', 'star', 'start', 'stay', 'steel',
    'step', 'stick', 'still', 'stone', 'stop', 'store', 'storm', 'story', 'street',
    'strong', 'study', 'such', 'sun', 'table', 'take', 'talk', 'tall', 'taste', 'tax',
    'tea', 'teach', 'team', 'tell', 'ten', 'test', 'than', 'thank', 'that', 'the',
    'their', 'them', 'then', 'there', 'these', 'they', 'thick', 'thin', 'thing',
    'think', 'third', 'this', 'those', 'three', 'throw', 'tie', 'time', 'tiny', 'tire',
    'title', 'to', 'today', 'told', 'tone', 'too', 'took', 'tool', 'top', 'total',
    'touch', 'tour', 'town', 'track', 'trade', 'train', 'tree', 'trip', 'true', 'trust',
    'try', 'turn', 'two', 'type', 'under', 'until', 'up', 'us', 'value', 'very',
    'view', 'visit', 'voice', 'wait', 'walk', 'wall', 'want', 'warm', 'wash', 'watch',
    'water', 'wave', 'way', 'we', 'wear', 'week', 'weight', 'well', 'went', 'were',
    'west', 'what', 'wheel', 'when', 'where', 'while', 'white', 'who', 'whole', 'why',
    'wide', 'wife', 'wild', 'will', 'win', 'wind', 'window', 'wine', 'wing', 'winter',
    'wire', 'wise', 'wish', 'with', 'wood', 'word', 'work', 'world', 'worth', 'would',
    'write', 'wrong', 'yard', 'year', 'yellow', 'yes', 'yet', 'you', 'young', 'zero'
  ]
};
