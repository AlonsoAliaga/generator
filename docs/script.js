// elements for obtaining vals
const nickName = document.getElementById('nickname');
const coloredNick = document.getElementById('coloredNick');
const savedColors = ['084CFB', 'ADF3FD', getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor()];
const presets = {
  0: {
    name: "None"
  },
  1: {
    name: "Rainbow",
    colors: ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "9400D3"],
  },
  2: {
    name: "Fire",
    colors: ["A10100", "DA3604", "FE650D", "FFC11F", "FFF75D"],
  },
  3: {
    name: "Sweet Morning",
    colors: ["FF5F6D", "FFC371"],
  },
  4: {
    name: "Deep Space",
    colors: ["000000", "434343"],
  },
  5: {
    name: "Superman",
    colors: ["0099F7", "F11712"],
  },
  6: {
    name: "Netflix",
    colors: ["8E0E00", "1F1C18"],
  },
  7: {
    name: "Timber",
    colors: ["fc00ff", "00dbde"],
  },
  8: {
    name: "Piglet",
    colors: ["ee9ca7", "ffdde1"],
  },
  9: {
    name: "Instagram",
    colors: ["833ab4", "fd1d1d", "fcb045"],
  },
  10: {
    name: "Twitch",
    colors: ["6441A5", "2a0845"],
  },
  11: {
    name: "SoundCloud",
    colors: ["fe8c00", "f83600"],
  },
  12: {
    name: "Facebook",
    colors: ["00c6ff", "0072ff"],
  },
  13: {
    name: "Amethyst",
    colors: ["9D50BB", "6E48AA"],
  },
  14: {
    name: "Starfall",
    colors: ["F0C27B", "4B1248"],
  },
  15: {
    name: "Sunset",
    colors: ["FF512F", "DD2476"],
  },
  16: {
    name: "JShine",
    colors: ["12c2e9", "c471ed", "f64f59"],
  },
  17: {
    name: "Candy",
    colors: ["009FFF", "ec2F4B"],
  },
  18: {
    name: "Argon",
    colors: ["03001e", "7303c0", "ec38bc", "fdeff9"],
  },
  19: {
    name: "Cosmic Fusion",
    colors: ["#ff00cc", "#333399"],
  },
  20: {
    name: "Deep Blue",
    colors: ["6a11cb", "2575fc"],
  },
  21: {
    name: "Phoenix",
    colors: ["f83600", "f9d423"],
  },
  22: {
    name: "Sublime Light",
    colors: ["fc5c7d", "6a82fb"],
  },
  23: {
    name: "Sunrise",
    colors: ["ff512f", "f09819"],
  },
  24: {
    name: "Sky Glider",
    colors: ["88d3ce", "6e45e2"],
  },
  25: {
    name: "Love Kiss",
    colors: ["ff0844", "ffb199"],
  },
  26: {
    name: "TikTok",
    colors: ["FF0050", "4B0018", "00F2EA"],
  }
}
const formats = {
  separator1: {
    name: 'Popular formats',
    separator: true
  },
  a0: {
    name: 'Default &#rrggbb',
    outputPrefix: '',
    template: '&#$1$2$3$4$5$6$f$c',
    formatChar: '&',
    maxLength: 256,
    hover:[
      "This is the most well-known format for hex!",
      "",
      "🔔 <span style='margin: auto;'><strong>Plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red;text-align:center;'>Know a plugin using this format? Let us know!</span>"
    ],
    plugins: {
      "deluxemenus": "DeluxeMenus",
      "executableblocks":"ExecutableBlocks",
      "executableitems":"ExecutableItems",
    }
  },
  a1: {
    name: 'Chat <#rrggbb>',
    outputPrefix: '',
    template: '<#$1$2$3$4$5$6>$f$c',
    formatChar: '&',
    maxLength: 256
  },
  a2: {
    name: 'Legacy &x&r&r&g&g&b&b',
    outputPrefix: '',
    template: '&x&$1&$2&$3&$4&$5&$6$f$c',
    formatChar: '&',
    maxLength: 256
  },
  a3: {
    name: 'Nick &#rrggbb',
    outputPrefix: '/nick ',
    template: '&#$1$2$3$4$5$6$f$c',
    formatChar: '&',
    maxLength: 256
  },
  a4: {
    name: 'Nick Special <&#rrggbb>',
    outputPrefix: '/nick ',
    template: '<#$1$2$3$4$5$6>$f$c',
    formatChar: '&',
    maxLength: 256
  },
  a5: {
    name: '',
    outputPrefix: '/nick ',
    template: '&x&$1&$2&$3&$4&$5&$6$f$c',
    formatChar: '&',
    maxLength: 256
  },
  a6: {
    name: 'Console §x§r§r§g§g§b§b',
    outputPrefix: '',
    template: '§x§$1§$2§$3§$4§$5§$6$f$c',
    formatChar: '§',
    maxLength: null,
    hover:[
      "Use this format to send messages in console.",
      "",
      "🔔 <span style='margin: auto;'><strong>Plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red;text-align:center;'>Know a plugin using this format? Let us know!</span>"
    ],
    plugins: {
      "animatedscoreboards": "AnimatedScoreboards",
      "sternalboard": "SternalBoard",
      "tab": "TAB",
    }
  },
  a7: {
    name: 'BBCode [COLOR=#rrggbb]',
    outputPrefix: '',
    template: '[COLOR=#$1$2$3$4$5$6]$c[/COLOR]',
    formatChar: null,
    maxLength: null
  },
  a8: {
    name: 'MOTD (\u00A7x)',
    outputPrefix: '',
    template: '\\u00A7x\\u00A7$1\\u00A7$2\\u00A7$3\\u00A7$4\\u00A7$5\\u00A7$6$f$c',
    formatChar: "\\u00A7",
    maxLength: null,
    hover:[
      "Use this format to edit motd in server.properties!",
    ]
  },
  separator2: {
    name: 'AlonsoAliaga\'s plugins',
    separator: true
  },
  a9: {
    name: 'Alonso Series ✔️',
    outputPrefix: '',
    template: '#$1$2$3$4$5$6$f$c',
    formatChar: '&',
    maxLength: null,
    hover: [
      "🔔 <span style='margin: auto;'><strong>Our plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red'>These plugins are made by our team!</span>"
    ],
    plugins: {
      "alonsochat": {
        displayName: "AlonsoChat 💠 (Not released)",
        hover: [
          "Customizable chat for your server!",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "alonsolevels": {
        displayName: "AlonsoLevels 💠",
        link: "https://alonsoaliaga.com/AlonsoLevelsPro",
        hover: [
          "A highly customizable level system for your network that actually works.",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "alonsoplus": {
        displayName: "AlonsoPlus 💠",
        link: "https://alonsoaliaga.com/AlonsoPlus",
        hover: [
          "Customizable colors for your donors' rank. Change PLUS sign in ranks!",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "alonsotags": {
        displayName: "AlonsoTags 💠",
        link: "https://alonsoaliaga.com/AlonsoTagsPro",
        hover: [
          "A highly customizable tag plugin for your network.",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
    }
  },
  a10: {
    name: 'Better Series ✔️',
    outputPrefix: '',
    template: '#$1$2$3$4$5$6$f$c',
    formatChar: '&',
    maxLength: null,
    hover: [
      "🔔 <span style='margin: auto;'><strong>Our plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red'>These plugins are made by our team!</span>"
    ],
    plugins: {
      "betterbackpacks": {
        displayName: "BetterBackpacks 💠",
        link: "https://alonsoaliaga.com/BetterBackpacksPro",
        hover: [
          "Backpacks with custom textures and unique features, skins and upgrades!",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "betterrevive": {
        displayName: "BetterRevive 💠",
        link: "https://alonsoaliaga.com/BetterRevive",
        hover: [
          "Give your players a second chance to live.",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
    }
  },
  separator3: {
    name: 'Popular APIs',
    separator: true
  },
  a11: {
    name: 'Adventure Gradient',
    outputPrefix: '',
    template: '&#$1$2$3$4$5$6$f$c',
    formatChar: null,
    maxLength: null,
    adventureGradient: true,
    hover: [
      "<span style='color: red'>To use this format your plugin MUST support Adventure format!</span>"
    ]
  },
  a12: {
    name: 'Iridium Gradient',
    outputPrefix: '',
    template: '&#$1$2$3$4$5$6$f$c',
    formatChar: null,
    maxLength: null,
    iridiumGradient: true,
    hover: [
      "<span style='color: red'>To use this format your plugin MUST support IridiumColor format!</span>"
    ]
  },
  separator4: {
    name: 'Common formats',
    separator: true
  },
  a13: {
    name: 'Brackets {#rrggbb}',
    outputPrefix: '',
    template: '{#$1$2$3$4$5$6}$f$c',
    formatChar: "&",
    maxLength: null,
    hover: [
      "🔔 <span style='margin: auto;'><strong>Plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red'>Know a plugin using this format? Let us know!</span>"
    ],
    plugins: {
      "auctionmaster":"AUCTIONMASTER",
      "darkauctionsx":"DarkAuctionsX",
      "royaleeconomy":"RoyaleEconomy",
    }
  },
  a14: {
    name: 'Simple #rrggbb',
    outputPrefix: '',
    template: '#$1$2$3$4$5$6$f$c',
    formatChar: "&",
    maxLength: null,
    plugins: {
      "advancedcrates":"AdvancedCrates",
      "decentholograms":"DecentHolograms",
      "deluxebazaar":"DELUXEBAZAAR",
      "elementalgems":"ElementalGems",
      "pyrofishingpro":"PyroFishingPro",
      "pyrominig":"PyroMining",
      "pyrospawners":"PyroSpawners",
      "pyroweatherpro":"PyroWeatherPro",
    },
    hover: [
      "🔔 <span style='margin: auto;'><strong>Plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red'>Know a plugin using this format? Let us know!</span>"
    ],
  },
  separator5: {
    name: 'Uncommon formats',
    separator: true
  },
  a15: {
    name: 'Percentage %#rrggbb%',
    outputPrefix: '',
    template: '%#$1$2$3$4$5$6%$f$c',
    formatChar: "&",
    maxLength: null,
    plugins: {
      "advancednmotd":"AdvancedNMotd"
    },
    hover: [
      "🔔 <span style='margin: auto;'><strong>Plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red'>Know a plugin using this format? Let us know!</span>"
    ],
  },
};
let emoji_array = [
  'Σ','☠','☮','☯','♠','Ω','♤','♣','♧','♥','♡','♦','♢','♔','♕','♚','♛','★','☆','✮','✯','☄','☾','☽','☼',
  '☀','☁','☂','☃','☻','☺','۞','۩','♬','✄','✂','✆','✉','✦','✧','∞','♂','♀','☿','❤','❥','❦','❧','®','©',
  '✗','✘','▢','▲','△','▼','▽','◆','◇','○','◎','●','◯','Δ','◕','◔','ʊ','ღ','₪','✓','✔','✕','✖','☢','☣',
  '☤','✙','✞','✠','✰','❇','❈','❅','❄','❆','╰','╮','❃','❀','✿','❁','✾','❂','⋆','✢','✣','✤','✥','✩','✪',
  '✫','✬','✭','✵','✴','✳','✲','✱','✶','✷','✸','✹','✺','✻','✼','✽','✡','❋','❊','❉','✌','♼','♽','➣','➢',
  '⬇','⬆','⬅','➡','✈','➤','➥','➦','➧','➨','➚','➘','➙','➛','➶','➵','➴','➳','➲','➸','➞','➝','➜','⚜',
  '⛏','⚒','⚔','UwU',
  '¦','©','®','°','҂','؎','؏','۞','۩','۽','۾','߶','৺','୰','௳','௴','௵','௶','௷','௸','௺','౿','൹','༁','༂',
  '༃','༓','༕','༖','༗','༚','༛','༜','༝','༞','༟','༴','༶','༸','྾','྿','࿀','࿁','࿂','࿃','࿄','࿅','࿇','࿈','࿉','࿊','࿋','࿌',
  '࿎','࿏','႞','႟','᎐','᎑','᎒','᎓','᎔','᎕','᎖','᎗','᎘','᎙','᙭','᧞','᧟','᧠','᧡','᧢','᧣','᧤','᧥','᧦','᧧','᧨',
  '᧩','᧪','᧫','᧬','᧭','᧮','᧯','᧰','᧱','᧲','᧳','᧴','᧵','᧶','᧷','᧸','᧹','᧺','᧻','᧼','᧽','᧾','℀','℁','℃',
  '℄','℅','℆','℈','℉','℔','№','℗','℞','℟','℠','℡','™','℣','℥','℧','℩','℮','℺','℻','⅊','⅌','⅍','⅏','↕','↖',
  '↗','↘','↙','↜','↝','↞','↟','↡','↢','↤','↥','↧','↨','↩','↪','↫','↬','᧿','⌚','⌛','⌜','⌝','⌞','⌟','⌢','⌣',
  '⌤','⌥','⌦','⌧','⌨','⌫','⌬','⌭','⌮','⌯','⌰','⌱','⌲','⌳','⌴','⌵','⌶','⌷','⌸','⌹','⌺','⌻','⌼','⌽','⌾',
  '⌿','⍀','⍁','⍂','⍃','⍄','⍅','⍆','⍇','⍈','⍉','⍊','⍋','⍌','⍍','⍎','⍏','⍐','⍑','⍒','⍓','⍔','⍕','⍖',
  '⍗','⍘','⍙','⍚','⍛','⍜','⍝','⍞','⍟','⍠','⍡','⍢','⍣','⍤','⍥','⍦','⍧','⍨','⍩','⍪','⍫','⍬','⍭','⍮','⍯',
  '⍱','⍲','⍳','⍴','⍵','⍶','⍷','⍸','⍹','⍺','⍻','⍽','⍾','⍿','⎀','⎁','⎂','⎃','⎄','⎅','⎆','⎇','⎈','⎉','⎊','⎋','⎌',
  '⎍','⎎','⎏','⎐','⎑','⎒','⎓','⎔','⎖','⎗','⎘','⎙','⎚','⎴','⎵','⎶','⎷','⎹','⎺','⎻','⎼','⎽','⎾','⎿','⏀','⏁','⏂',
  '⏃','⏄','⏅','⏆','⏇','⏈','⏉','⏊','⏋','⏌','⏍','⏎','⏏','⏐','⏑','⏒','⏓','⏔','⏕','⏖','⏗','⏘','⏙','⏚','⏛','⏢',
  '⏣','⏤','⏥','⏦','⏧','⏩','⏪','⏭','⏮','⏯','⏳','⏴','⏵','⏶','⏷','⏸','⏹','⏺','⏻','⏼','⏽','␀','␁','␂','␃','␄',
  '␅','␆','␇','␈','␉','␊','␋','␌','␍','␎','␏','␐','␑','␒','␓','␔','␕','␖','␗','␘','␙','␚','␛','␜','␝',
  '␞','␟','␠','␡','␢','␣','␤','␥','␦','⑀','⑁','⑂','⑃','⑄','⑅','⑆','⑇','⑈','⑉','⑊','⒜','⒝','⒞','⒟','⒠','⒡','⒢','⒣',
  '⒤','⒥','⒦','⒧','⒨','⒩','⒪','⒫','⒬','⒭','⒮','⒯','⒰','⒱','⒲','⒳','⒴','⒵','Ⓐ','Ⓑ','Ⓒ','Ⓓ','Ⓔ','Ⓕ','Ⓖ',
  'Ⓗ','Ⓘ','Ⓙ','Ⓚ','Ⓛ','Ⓜ','Ⓝ','Ⓞ','Ⓟ','Ⓠ','Ⓡ','Ⓢ','Ⓣ','Ⓤ','Ⓥ','Ⓦ','Ⓧ','Ⓨ','Ⓩ','ⓐ','ⓑ','ⓒ','ⓓ','ⓔ','ⓕ',
  'ⓖ','ⓗ','ⓘ','ⓙ','ⓚ','ⓛ','ⓜ','ⓝ','ⓞ','ⓟ','ⓠ','ⓡ','ⓢ','ⓣ','ⓤ','ⓥ','ⓦ','ⓧ','ⓨ','ⓩ','─','━','│','┃','┄','┅',
  '┆','┇','┈','┉','┊','┋','┌','┍','┎','┏','┐','┑','┒','┓','└','┕','┖','┗','┘','┙','┚','┛','├','┝','┞','┟','┠','┡','┢','┣',
  '┤','┥','┦','┧','┨','┩','┪','┫','┬','┭','┮','┯','┰','┱','┲','┳','┴','┵','┶','┷','┸','┹','┺','┻','┼','┽','┾','┿','╀','╁',
  '╂','╃','╄','╅','╆','╇','╈','╉','╊','╋','╌','╍','╎','╏','═','║','╒','╓','╔','╕','╖','╗','╘','╙','╚','╛','╜','╝','╞','╟',
  '╠','╡','╢','╣','╤','╥','╦','╧','╨','╩','╪','╫','╬','╭','╮','╯','╰','╱','╲','╳','╴','╵','╶','╷','╸','╹','╺','╻','╼','╽',
  '╾','╿','▀','▁','▂','▃','▄','▅','▆','▇','█','▉','▊','▋','▌','▍','▎','▏','▐','░','▒','▓','▔','▕','▖','▗','▘','▙','▚',
  '▛','▜','▝','▞','▟','■','□','▢','▣','▤','▥','▦','▧','▨','▩','▪','▫','▬','▭','▮','▯','▰','▱','▲','△','▴','▵',
  '▶','▸','▹','►','▻','▼','▽','▾','▿','◀','◂','◃','◄','◅','◆','◇','◈','◉','◊','○','◌','◍','◎','●','◐','◑','◒','◓',
  '◔','◕','◖','◗','◘','◙','◚','◛','◜','◝','◞','◟','◠','◡','◢','◣','◤','◥','◦','◧','◨','◩','◪','◫','◬','◭','◮',
  '◯','◰','◱','◲','◳','◴','◵','◶','◷','☀','☁','☂','☃','☄','★','☆','☇','☈','☉','☊','☋','☌','☍','☎','☏','☐','☑',
  '☒','☓','☔','☕','☖','☗','☘','☙','☚','☛','☜','☝','☞','☟','☠','☡','☢','☣','☤','☥','☦','☧','☨','☩','☪','☫','☬',
  '☭','☮','☯','☰','☱','☲','☳','☴','☵','☶','☷','☸','☹','☺','☻','☼','☽','☾','☿','♀','♁','♂','♃','♄','♅','♆','♇','♈',
  '♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','♔','♕','♖','♗','♘','♙','♚','♛','♜','♝','♞','♟','♠',
  '♡','♢','♣','♤','♥','♦','♧','♨','♩','♪','♫','♬','♭','♮','♰','♱','♲','♳','♴','♵','♶','♷','♸','♹','♺','♻','♼','♽',
  '♾','♿','⚀','⚁','⚂','⚃','⚄','⚅','⚆','⚇','⚈','⚉','⚊','⚋','⚌','⚍','⚎','⚏','⚐','⚑','⚒','⚓','⚔','⚕','⚖','⚗','⚘',
  '⚙','⚚','⚛','⚜','⚝','⚠','⚡','⚢','⚣','⚤','⚥','⚦','⚧','⚨','⚩','⚪','⚫','⚬','⚭','⚮','⚯','⚰','⚱','⚲','⚳','⚴','⚵',
  '⚶','⚷','⚸','⚹','⚺','⚻','⚼','⛀','⛁','⛂','⛃','⛄','⛈','⛏','⛨','✁','✂','✃','✄','✆','✇','✈','✉','✌','✍','✎',
  '✏','✐','✑','✒','✓','✔','✕','✖','✗','✘','✙','✚','✛','✜','✝','✞','✟','✠','✡','✢','✣','✤','✥','✦','✧','✩','✪',
  '✫','✬','✭','✮','✯','✰','✱','✲','✳','✴','✵','✶','✷','✸','✹','✺','✻','✼','✽','✾','✿','❀','❁','❂','❃','❄','❅',
  '❆','❇','❈','❉','❊','❋','❌','❍','❏','❐','❑','❒','❖','❘','❙','❚','❛','❜','❝','❞','❡','❢','❣','❤','❥','❦','❧','➔',
  '➘','➙','➚','➛','➜','➝','➞','➟','➠','➡','➢','➣','➤','➥','➦','➧','➨','➩','➪','➫','➬','➭','➮','➯','➱','➲',
  '➳','➴','➵','➶','➷','➸','➹','➺','➻','➼','➽','➾','⠀','⠁','⠂','⠃','⠄','⠅','⠆','⠇','⠈','⠉','⠊','⠋','⠌','⠍','⠎',
  '⠏','⠐','⠑','⠒','⠓','⠔','⠕','⠖','⠗','⠘','⠙','⠚','⠛','⠜','⠝','⠞','⠟','⠠','⠡','⠢','⠣','⠤','⠥','⠦','⠧','⠨','⠩','⠪',
  '⠫','⠬','⠭','⠮','⠯','⠰','⠱','⠲','⠳','⠴','⠵','⠶','⠷','⠸','⠹','⠺','⠻','⠼','⠽','⠾','⠿','⡀','⡁','⡂','⡃','⡄','⡅','⡆',
  '⡇','⡈','⡉','⡊','⡋','⡌','⡍','⡎','⡏','⡐','⡑','⡒','⡓','⡔','⡕','⡖','⡗','⡘','⡙','⡚','⡛','⡜','⡝','⡞','⡟','⡠','⡡','⡢',
  '⡣','⡤','⡥','⡦','⡧','⡨','⡩','⡪','⡫','⡬','⡭','⡮','⡯','⡰','⡱','⡲','⡳','⡴','⡵','⡶','⡷','⡸','⡹','⡺','⡻','⡼','⡽','⡾',
  '⡿','⢀','⢁','⢂','⢃','⢄','⢅','⢆','⢇','⢈','⢉','⢊','⢋','⢌','⢍','⢎','⢏','⢐','⢑','⢒','⢓','⢔','⢕','⢖','⢗','⢘','⢙','⢚',
  '⢛','⢜','⢝','⢞','⢟','⢠','⢡','⢢','⢣','⢤','⢥','⢦','⢧','⢨','⢩','⢪','⢫','⢬','⢭','⢮','⢯','⢰','⢱','⢲','⢳','⢴','⢵','⢶',
  '⢷','⢸','⢹','⢺','⢻','⢼','⢽','⢾','⢿','⣀','⣁','⣂','⣃','⣄','⣅','⣆','⣇','⣈','⣉','⣊','⣋','⣌','⣍','⣎','⣏','⣐','⣑','⣒',
  '⣓','⣔','⣕','⣖','⣗','⣘','⣙','⣚','⣛','⣜','⣝','⣞','⣟','⣠','⣡','⣢','⣣','⣤','⣥','⣦','⣧','⣨','⣩','⣪','⣫','⣬','⣭','⣮',
  '⣯','⣰','⣱','⣲','⣳','⣴','⣵','⣶','⣷','⣸','⣹','⣺','⣻','⣼','⣽','⣾','⣿','⬀','⬁','⬂','⬃','⬄','⬅','⬆','⬇','⬈','⬉','⬊',
  '⬋','⬌','⬍','⬎','⬏','⬐','⬑','⬒','⬓','⬔','⬕','⬖','⬗','⬘','⬙','⬚','⬛','⬜','⬝','⬞','⬟','⬠','⬡','⬢','⬣','⬤','⬥',
  '⬦','⬧','⬨','⬩','⬪','⬫','⬬','⬭','⬮','⬯','⭅','⭆','⭐','⭑','⭒','⭓','⭔','⭘','⯪','⯫','⳥','⳦','⳧','⳨','⳩','⳪','⺀','⺁',
  '⺂','⺃','⺄','⺅','⺆','⺇','⺈','⺉','⺊','⺋','⺌','⺍','⺎','⺏','⺐','⺑','⺒','⺓','⺔','⺕','⺖','⺗','⺘','⺙','⺛','⺜',
  '⺝','⺞','⺟','⺠','⺡','⺢','⺣','⺤','⺥','⺦','⺧','⺨','⺩','⺪','⺫','⺬','⺭','⺮','⺯','⺰','⺱','⺲','⺳','⺴','⺵','⺶',
  '⺷','⺸','⺹','⺺','⺻','⺼','⺽','⺾','⺿','⻀','⻁','⻂','⻃','⻄','⻅','⻆','⻇','⻈','⻉','⻊','⻋','⻌','⻍','⻎','⻏','⻐',
  '⻑','⻒','⻓','⻔','⻕','⻖','⻗','⻘','⻙','⻚','⻛','⻜','⻝','⻞','⻟','⻠','⻡','⻢','⻣','⻤','⻥','⻦','⻧','⻨','⻩','⻪',
  '⻫','⻬','⻭','⻮','⻯','⻰','⻱','⻲','⻳','⼀','⼁','⼂','⼃','⼄','⼅','⼆','⼇','⼈','⼉','⼊','⼋','⼌','⼍','⼎','⼏','⼐',
  '⼑','⼒','⼓','⼔','⼕','⼖','⼗','⼘','⼙','⼚','⼛','⼜','⼝','⼞','⼟','⼠','⼡','⼢','⼣','⼤','⼥','⼦','⼧','⼨','⼩','⼪',
  '⼫','⼬','⼭','⼮','⼯','⼰','⼱','⼲','⼳','⼴','⼵','⼶','⼷','⼸','⼹','⼺','⼻','⼼','⼽','⼾','⼿','⽀','⽁','⽂','⽃','⽄',
  '⽅','⽆','⽇','⽈','⽉','⽊','⽋','⽌','⽍','⽎','⽏','⽐','⽑','⽒','⽓','⽔','⽕','⽖','⽗','⽘','⽙','⽚','⽛','⽜','⽝','⽞',
  '⽟','⽠','⽡','⽢','⽣','⽤','⽥','⽦','⽧','⽨','⽩','⽪','⽫','⽬','⽭','⽮','⽯','⽰','⽱','⽲','⽳','⽴','⽵','⽶','⽷','⽸',
  '⽹','⽺','⽻','⽼','⽽','⽾','⽿','⾀','⾁','⾂','⾃','⾄','⾅','⾆','⾇','⾈','⾉','⾊','⾋','⾌','⾍','⾎','⾏','⾐','⾑','⾒',
  '⾓','⾔','⾕','⾖','⾗','⾘','⾙','⾚','⾛','⾜','⾝','⾞','⾟','⾠','⾡','⾢','⾣','⾤','⾥','⾦','⾧','⾨','⾩','⾪','⾫','⾬',
  '⾭','⾮','⾯','⾰','⾱','⾲','⾳','⾴','⾵','⾶','⾷','⾸','⾹','⾺','⾻','⾼','⾽','⾾','⾿','⿀','⿁','⿂','⿃','⿄','⿅','⿆',
  '⿇','⿈','⿉','⿊','⿋','⿌','⿍','⿎','⿏','⿐','⿑','⿒','⿓','⿔','⿕','⿰','⿱','⿲','⿳','⿴','⿵','⿶','⿷','⿸','⿹','⿺',
  '⿻','〄','〒','〓','〠','〶','〷','〾','〿','㆐','㆑','㆖','㆗','㆘','㆙','㆚','㆛','㆜','㆝','㆞','㆟','㇀','㇁','㇂','㇃','㇄',
  '㇅','㇆','㇇','㇈','㇉','㇊','㇋','㇌','㇍','㇎','㇏','㇐','㇑','㇒','㇓','㇔','㇕','㇖','㇗','㇘','㇙','㇚','㇛','㇜','㇝','㇞',
  '㇟','㇠','㇡','㇢','㇣','㈀','㈁','㈂','㈃','㈄','㈅','㈆','㈇','㈈','㈉','㈊','㈋','㈌','㈍','㈎','㈏','㈐','㈑','㈒','㈓','㈔',
  '㈕','㈖','㈗','㈘','㈙','㈚','㈛','㈜','㈝','㈞','㈪','㈫','㈬','㈭','㈮','㈯','㈰','㈱','㈲','㈳','㈴','㈵','㈶','㈷','㈸','㈹',
  '㈺','㈻','㈼','㈽','㈾','㈿','㉀','㉁','㉂','㉃','㉐','㉠','㉡','㉢','㉣','㉤','㉥','㉦','㉧','㉨','㉩','㉪','㉫','㉬','㉭','㉮',
  '㉯','㉰','㉱','㉲','㉳','㉴','㉵','㉶','㉷','㉸','㉹','㉺','㉻','㉼','㉽','㉾','㉿','㊊','㊋','㊌','㊍','㊎','㊏','㊐','㊑','㊒',
  '㊓','㊔','㊕','㊖','㊗','㊘','㊙','㊚','㊛','㊜','㊝','㊞','㊟','㊠','㊡','㊢','㊣','㊤','㊥','㊦','㊧','㊨','㊩','㊪','㊫','㊬',
  '㊭','㊮','㊯','㊰','㋀','㋁','㋂','㋃','㋄','㋅','㋆','㋇','㋈','㋉','㋊','㋋','㋌','㋍','㋎','㋏','㋐','㋑','㋒','㋓','㋔','㋕',
  '㋖','㋗','㋘','㋙','㋚','㋛','㋜','㋝','㋞','㋟','㋠','㋡','㋢','㋣','㋤','㋥','㋦','㋧','㋨','㋩','㋪','㋫','㋬','㋭','㋮','㋯',
  '㋰','㋱','㋲','㋳','㋴','㋵','㋶','㋷','㋸','㋹','㋺','㋻','㋼','㋽','㋾','㌀','㌁','㌂','㌃','㌄','㌅','㌆','㌇','㌈','㌉','㌊',
  '㌋','㌌','㌍','㌎','㌏','㌐','㌑','㌒','㌓','㌔','㌕','㌖','㌗','㌘','㌙','㌚','㌛','㌜','㌝','㌞','㌟','㌠','㌡','㌢','㌣','㌤',
  '㌥','㌦','㌧','㌨','㌩','㌪','㌫','㌬','㌭','㌮','㌯','㌰','㌱','㌲','㌳','㌴','㌵','㌶','㌷','㌸','㌹','㌺','㌻','㌼','㌽','㌾',
  '㌿','㍀','㍁','㍂','㍃','㍄','㍅','㍆','㍇','㍈','㍉','㍊','㍋','㍌','㍍','㍎','㍏','㍐','㍑','㍒','㍓','㍔','㍕','㍖','㍗','㍘',
  '㍙','㍚','㍛','㍜','㍝','㍞','㍟','㍠','㍡','㍢','㍣','㍤','㍥','㍦','㍧','㍨','㍩','㍪','㍫','㍬','㍭','㍮','㍯','㍰','㍱','㍲',
  '㍳','㍴','㍵','㍶','㍷','㍸','㍹','㍺','㍻','㍼','㍽','㍾','㍿','㎀','㎁','㎂','㎃','㎄','㎅','㎆','㎇','㎈','㎉','㎊','㎋','㎌',
  '㎍','㎎','㎏','㎐','㎑','㎒','㎓','㎔','㎕','㎖','㎗','㎘','㎙','㎚','㎛','㎜','㎝','㎞','㎟','㎠','㎡','㎢','㎣','㎤','㎥','㎦',
  '㎧','㎨','㎩','㎪','㎫','㎬','㎭','㎮','㎯','㎰','㎱','㎲','㎳','㎴','㎵','㎶','㎷','㎸','㎹','㎺','㎻','㎼','㎽','㎾','㎿','㏀',
  '㏁','㏂','㏃','㏄','㏅','㏆','㏇','㏈','㏉','㏊','㏋','㏌','㏍','㏎','㏏','㏐','㏑','㏒','㏓','㏔','㏕','㏖','㏗','㏘','㏙','㏚',
  '㏛','㏜','㏝','㏞','㏟','㏠','㏡','㏢','㏣','㏤','㏥','㏦','㏧','㏨','㏩','㏪','㏫','㏬','㏭','㏮','㏯','㏰','㏱','㏲','㏳','㏴',
  '㏵','㏶','㏷','㏸','㏹','㏺','㏻','㏼','㏽','㏾','㏿','䷀','䷁','䷂','䷃','䷄','䷅','䷆','䷇','䷈','䷉','䷊','䷋','䷌','䷍','䷎','䷏',
  '䷐','䷑','䷒','䷓','䷔','䷕','䷖','䷗','䷘','䷙','䷚','䷛','䷜','䷝','䷞','䷟','䷠','䷡','䷢','䷣','䷤','䷥','䷦','䷧','䷨','䷩','䷪',
  '䷫','䷬','䷭','䷮','䷯','䷰','䷱','䷲','䷳','䷴','䷵','䷶','䷷','䷸','䷹','䷺','䷻','䷼','䷽','䷾','䷿','꒐','꒑','꒒','꒓','꒔','꒕','꒖',
  '꒗','꒘','꒙','꒚','꒛','꒜','꒝','꒞','꒟','꒠','꒡','꒢','꒣','꒤','꒥','꒦','꒧','꒨','꒩','꒪','꒫','꒬','꒭','꒮','꒯','꒰','꒱','꒲','꒳','꒴',
  '꒵','꒶','꒷','꒸','꒹','꒺','꒻','꒼','꒽','꒾','꒿','꓀','꓁','꓂','꓃','꓄','꓅','꓆','꠨','꠩','꠪','꠫','￤','￨','￭','￮'
]
// Removed: ﷽
setTimeout(async ()=>{
  removeDuplicatedEmojis();
  createTable(emoji_array);
},1000);
function removeDuplicatedEmojis() {
  // console.log(`Pre length: ${emoji_array.length}`);
  emoji_array = Array.from(new Set(emoji_array));
  // console.log(`Post length: ${emoji_array.length}`);
}
function addText(emoji) {
  let input = document.getElementById('nickname');
  input.value = input.value + emoji.value;
  updateOutputText(undefined);
}
function createTable(data){
  let table = document.getElementById('emoji-table');
  let columns = 35;
  let currentRow = [];
  let rows = [];
  for (var i = 0; i < data.length; i++){
    let emoji = data[i];
    //let rowIndex = Math.floor(i / columns);
    if(currentRow.length >= columns) {
      currentRow = [emoji];
    }else{
      currentRow.push(emoji);
    }
    if(currentRow.length >= columns || i +1 == data.length) {
      //console.log(`${i} ${emoji} Row: ${rows.length}`)
      rows.push(currentRow);
    }
  }
  let loading_text = document.getElementById('loading_text');
  if(loading_text) loading_text.remove();
  for(let i = 0; i < rows.length; i++){
    let row = `<tr>${rows[i].map(emoji=>`<td><button style="padding: 0px 2px 0px 2px" type="button" class="form-control emojibutton" id="boton" onclick="addText(this);" value="${emoji}">${emoji}</button></td>`).join("")}</tr>`
    table.innerHTML += row;
  }
}
function darkMode() {
  if (document.getElementById('darkmode').checked == true) {
    document.body.classList.add('dark');
    document.getElementById('output-format').classList.add("dark");
    document.getElementById('plugins-list').classList.add("dark");
    document.getElementById('color-preset').classList.add("dark");
    document.getElementById('numOfColors').classList.add("dark");
    document.getElementById('emojis').classList.add("darktextboxes");
    document.getElementById('graylabel1').classList.replace("gray", "darkgray");
    document.getElementById('graylabel2').classList.replace("gray", "darkgray");
    document.getElementById('outputText').classList.replace("gray", "darkgray");
    document.getElementById('output-format-tooltip').classList.replace("gray", "darkgray");
    document.getElementById('plugin-tooltip').classList.replace("gray", "darkgray");
    document.getElementById('error').classList.replace("errortext", "darkerrortext");
    document.getElementById('warning-iridium').classList.replace("errortext", "darkerrortext");
    document.getElementById('warning-iridium-decoration').classList.replace("errortext", "darkerrortext");
    document.getElementById('numOfColors').classList.add("darktextboxes");
    document.getElementById('nickname').classList.add("darktextboxes");
    document.getElementById('plugin-link-button').classList.add("darktextboxes");
    document.getElementById('outputText').classList.add("darktextboxes");
    document.getElementById('output-format-tooltip').classList.add("darktextboxes");
    document.getElementById('plugin-tooltip').classList.add("darktextboxes");
    Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
      document.getElementById(e.id).classList.add("darktextboxes");
    })
  } else {
    document.body.classList.remove('dark');
    document.getElementById('output-format').classList.remove("dark");
    document.getElementById('plugins-list').classList.remove("dark");
    document.getElementById('color-preset').classList.remove("dark");
    document.getElementById('numOfColors').classList.remove("dark");
    document.getElementById('emojis').classList.remove("darktextboxes");
    document.getElementById('graylabel1').classList.replace("darkgray", "gray");
    document.getElementById('graylabel2').classList.replace("darkgray", "gray");
    document.getElementById('outputText').classList.replace("darkgray", "gray");
    document.getElementById('output-format-tooltip').classList.replace("darkgray", "gray");
    document.getElementById('plugin-tooltip').classList.replace("darkgray", "gray");
    document.getElementById('error').classList.replace("darkerrortext", "errortext");
    document.getElementById('warning-iridium').classList.replace("darkerrortext", "errortext");
    document.getElementById('warning-iridium-decoration').classList.replace("darkerrortext", "errortext");
    document.getElementById('numOfColors').classList.remove("darktextboxes");
    document.getElementById('nickname').classList.remove("darktextboxes");
    document.getElementById('plugin-link-button').classList.remove("darktextboxes");
    document.getElementById('outputText').classList.remove("darktextboxes");
    document.getElementById('output-format-tooltip').classList.remove("darktextboxes");
    document.getElementById('plugin-tooltip').classList.remove("darktextboxes");
    Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
      document.getElementById(e.id).classList.remove("darktextboxes");
    })
  }
}

/* Get a random HEX color */
function getRandomHexColor() {
     return Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

function copyTextToClipboard(text) {
  let textArea = document.createElement('textarea');
  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  alert('You text was copied! Ready to paste!\n\nThanks for using our tool!\n- AlonsoAliaga');
  document.body.removeChild(textArea);
}

function showError(show) {
  if (show) {
    document.getElementById('error').style.display = 'block';
    document.getElementById('outputText').style.height = '70px';
    document.getElementById('outputText').style.marginBottom = '5px';
  } else {
    document.getElementById('error').style.display = 'none';
    document.getElementById('outputText').style.height = '95px';
    document.getElementById('outputText').style.marginBottom = '10px';
  }
}

function showIridiumWarning(format, colors) {
  if(format.iridiumGradient && colors.length > 2) {
    document.getElementById('warning-iridium').style.display = 'block';
    document.getElementById('outputText').style.height = '70px';
    document.getElementById('outputText').style.marginBottom = '5px';
  }else{
    document.getElementById('warning-iridium').style.display = 'none';
    document.getElementById('outputText').style.height = '95px';
    document.getElementById('outputText').style.marginBottom = '10px';
  }
  if(format.iridiumGradient && (document.getElementById('strike').checked || document.getElementById('underline').checked ||
    document.getElementById('italics').checked || document.getElementById('bold').checked)){
      document.getElementById('warning-iridium-decoration').style.display = 'block';
      document.getElementById('outputText').style.height = '70px';
      document.getElementById('outputText').style.marginBottom = '5px';
  }else{
    document.getElementById('warning-iridium-decoration').style.display = 'none';
    document.getElementById('outputText').style.height = '95px';
    document.getElementById('outputText').style.marginBottom = '10px';
  }
}
function addDefaultsFormats() {
  let select = document.getElementById('output-format');
  if(select) {
    for(let value of Object.keys(formats)) {
      // console.log(`Checking format value: ${value}`);
      let format = formats[value];
      if(format && format.name && format.name.length > 0) {
        // console.log(`Adding ${format.name} with value ${value}`);
        let option = document.createElement('option');
        option.innerHTML = format.name;
        option.setAttribute("value",`${value}`);
        if(format.separator) {
          option.setAttribute("disabled","disabled");
          option.setAttribute("style",`color: rgb(235, 235, 235); background: rgba(78, 78, 78, 0.698);text-align: center;padding-left: 0px;`);
        }else{
          option.setAttribute("value",`${value}`);
        }
        select.appendChild(option);
      }
    }
  }
}
function addDefaultsPresets() {
  let select = document.getElementById('color-preset');
  if(select) {
    for(let value of Object.keys(presets)) {
      let preset = presets[value];
      if(preset.name && preset.name.length > 0) {
        // console.log(`Adding ${format.name} with value ${value}`);
        let option = document.createElement('option');
        option.innerHTML = preset.name;
        option.setAttribute("value",`${value}`);
        select.appendChild(option);
      }
    }
  }
}
let pluginsList = {

}
function addPluginsList() {
  let select = document.getElementById('plugins-list');
  if(select) {
    let unordered = {}
    for(let value of Object.keys(formats)) {
      // console.log(`Checking format ${value}`);
      let format = formats[value];
      format.pluginsArray = [];
      if(format.name && format.name.length > 0 && typeof format.plugins != "undefined" && Object.keys(format.plugins).length > 0) {
        for(let pluginIdentifier of Object.keys(format.plugins)) {
          let displayName;
          let pluginData;
          if(typeof format.plugins[pluginIdentifier] == "string") {
            displayName = format.plugins[pluginIdentifier];
          }else if(typeof format.plugins[pluginIdentifier] == "object") {
            pluginData = format.plugins[pluginIdentifier];
            displayName = pluginData.displayName;
          }else continue;
          if(displayName) {
            if(!unordered[pluginIdentifier]) {
              unordered[pluginIdentifier] = {
                "pluginDisplayname": displayName,
                "formatIdentifier": value,
              }
              if(pluginData && pluginData.link) unordered[pluginIdentifier].link = pluginData.link;
              if(pluginData && pluginData.hover) {
                let link = pluginData.link || "Not available";
                unordered[pluginIdentifier].hover = pluginData.hover.map(line=>line.replace("{link}",link));
              }
            }
          }
        }
      }
    }
    pluginsList = Object.keys(unordered).sort().reduce(
    (obj, key) => { 
      obj[key] = unordered[key]; 
      return obj;
    },{});
    let added = [];
    for(let pluginIdentifier of Object.keys(pluginsList)) {
      let pluginData = pluginsList[pluginIdentifier];
      let format = formats[pluginData.formatIdentifier];
      if(format) format.pluginsArray.push(pluginData.pluginDisplayname);
      // console.log(`Adding ${pluginIdentifier} (${pluginData.pluginDisplayname})`);
      let firstLetter = pluginIdentifier.substring(0,1).toUpperCase();
      if(!added.includes(firstLetter)) {
        added.push(firstLetter);
        if(!isNaN(firstLetter)) {
          let option = document.createElement('option');
          option.innerHTML = `<strong>Number ${firstLetter}</strong>`;
          option.setAttribute("disabled",`disabled`);
          select.appendChild(option);
        }else if(firstLetter.match(/[a-z]/gi)) {
          let option = document.createElement('option');
          option.innerHTML = `<strong>Letter ${firstLetter}</strong>`;
          option.setAttribute("disabled",`disabled`);
          select.appendChild(option);
        }else{
          let option = document.createElement('option');
          option.innerHTML = `<strong>Other characters</strong>`;
          option.setAttribute("disabled",`disabled`);
          select.appendChild(option);
        }
      }
      let option = document.createElement('option');
      option.innerHTML = pluginData.pluginDisplayname;
      option.setAttribute("value",`${pluginIdentifier}`);
      option.setAttribute("format-identifier",`${pluginData.formatIdentifier}`);
      select.appendChild(option);
    }
    for(let value of Object.keys(formats)) {
      let format = formats[value];
      if(format && format.hover) {
        let plugins = []
        let length = 0;
        let pluginStrings = [];
        for(let index in format.pluginsArray) {
          let string = format.pluginsArray[index];
          pluginStrings.push(string);
          length += string.length;
          //console.log("Format ("+format.name+") Index: ("+index+"/"+format.pluginsArray.length+") String: ("+string+") Total ("+length+"): '"+pluginStrings.join(", ")+"'");
          if(length > 60) {
            //console.log("New line!");
            plugins.push(pluginStrings.join(", "));
            pluginStrings = [];
            length = 0;
          }else if(index >= format.pluginsArray.length - 1){
            //console.log("Last item: "+index+"/"+format.pluginsArray.length);
            plugins.push(pluginStrings.join(", "));
            pluginStrings = [];
            length = 0;
          }else {
            //console.log("Adding!");
          }
        }
        format.hover = format.hover.map(line=>line.replace("{plugins}",plugins.join("<br>")));
      }
    }
  }
}
function showPluginTooltip() {
  let tooltip = document.getElementById("plugin-tooltip");
  if(tooltip) {
    let pluginData = pluginsList[document.getElementById('plugins-list').value];
    // console.log("Checking: "+outputFormat.value)
    if(pluginData) {
      //if(pluginData.link) 
      if(pluginData.hover && pluginData.hover.length > 0) {
        //
        tooltip.style.display = "inline";
        tooltip.innerHTML = pluginData.hover.join("<br>");
      }else{
        tooltip.style.display = "none";
        tooltip.innerHTML = "Loading..";
      }
    }else{
      tooltip.style.display = "none";
      tooltip.innerHTML = "Loading..";
    }
  }
}
function hidePluginTooltip() {
  let tooltip = document.getElementById("plugin-tooltip");
  if(tooltip) {
    tooltip.style.display = "none";
    tooltip.innerHTML = "Loading..";
  }
}
function showOutPutFormatTooltip() {
  let tooltip = document.getElementById("output-format-tooltip");
  if(tooltip) {
    let outputFormat = document.getElementById("output-format");
    // console.log("Checking: "+outputFormat.value)
    let format = formats[outputFormat.value];
    if(format && format.hover && format.hover.length > 0) {
      tooltip.style.display = "inline";
      tooltip.innerHTML = format.hover.join("<br>");
    }else{
      tooltip.style.display = "none";
      tooltip.innerHTML = "Loading..";
    }
  }
}
function hideOutPutFormatTooltip() {
  let tooltip = document.getElementById("output-format-tooltip");
  if(tooltip) {
    tooltip.style.display = "none";
    tooltip.innerHTML = "Loading..";
  }
}
function hex(c) {
  let s = '0123456789abcdef';
  let i = parseInt(c);
  if (i == 0 || isNaN(c))
    return '00';
  i = Math.round(Math.min(Math.max(0, i), 255));
  return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex(rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* Remove '#' in color hex string */
function trim(s) {
  return (s.charAt(0) == '#') ? s.substring(1, 7) : s
}

/* Convert a hex string to an RGB triplet */
function convertToRGB(hex) {
  let color = [];
  color[0] = parseInt((trim(hex)).substring(0, 2), 16);
  color[1] = parseInt((trim(hex)).substring(2, 4), 16);
  color[2] = parseInt((trim(hex)).substring(4, 6), 16);
  return color;
}

/**
 * JavaScript implementation of HexUtils Gradients from RoseGarden.
 * https://github.com/Rosewood-Development/RoseGarden/blob/master/src/main/java/dev/rosewood/rosegarden/utils/HexUtils.java#L358
 */
class Gradient {
  constructor(colors, numSteps) {
    this.colors = colors;
    this.gradients = [];
    this.steps = numSteps - 1;
    this.step = 0;

    const increment = this.steps / (colors.length - 1);
    for (let i = 0; i < colors.length - 1; i++)
      this.gradients.push(new TwoStopGradient(colors[i], colors[i + 1], increment * i, increment * (i + 1)));
  }

  /* Gets the next color in the gradient sequence as an array of 3 numbers: [r, g, b] */
  next() {
    if (this.steps <= 1)
      return this.colors[0];

    const adjustedStep = Math.round(Math.abs(((2 * Math.asin(Math.sin(this.step * (Math.PI / (2 * this.steps))))) / Math.PI) * this.steps));
    let color;
    if (this.gradients.length < 2) {
      color = this.gradients[0].colorAt(adjustedStep);
    } else {
      const segment = this.steps / this.gradients.length;
      const index = Math.min(Math.floor(adjustedStep / segment), this.gradients.length - 1);
      color = this.gradients[index].colorAt(adjustedStep);
    }

    this.step++;
    return color;
  }
}

class TwoStopGradient {
  constructor(startColor, endColor, lowerRange, upperRange) {
    this.startColor = startColor;
    this.endColor = endColor;
    this.lowerRange = lowerRange;
    this.upperRange = upperRange;
  }

  colorAt(step) {
    return [
      this.calculateHexPiece(step, this.startColor[0], this.endColor[0]),
      this.calculateHexPiece(step, this.startColor[1], this.endColor[1]),
      this.calculateHexPiece(step, this.startColor[2], this.endColor[2])
    ];
  }

  calculateHexPiece(step, channelStart, channelEnd) {
    const range = this.upperRange - this.lowerRange;
    const interval = (channelEnd - channelStart) / range;
    return Math.round(interval * (step - this.lowerRange) + channelStart);
  }
}

/* Toggles the number of gradient colors between 2 and 10 based on user input */
function toggleColors(colors) {
  let clamped = Math.min(20, Math.max(2, colors));
  if (colors == 1 || colors == '') {
    colors = getColors().length;
  } else if (colors != clamped) {
    $('#numOfColors').val(clamped);
    colors = clamped;
  }
  const container = $('#hexColors');
  const hexColors = container.find('.hexColor');
  const number = hexColors.size();
  if (number > colors) {
    // Need to remove some colors
    hexColors.each((index, element) => {
      if (index + 1 > colors) {
        savedColors[index] = $(element).val();
        $(element).parent().remove();
      }
    });
  } else if (number < colors) {
    // Need to add some colors
    let template = $('#hexColorTemplate').html();
    for (let i = number + 1; i <= colors; i++) {
      let html = template.replace(/\$NUM/g, i).replace(/\$VAL/g, savedColors[i - 1]);
      container.append(html);
    }
    jscolor.install(); // Refresh all jscolor elements
  }
}

/* Gets all colored entered by the user */
function getColors() {
  const hexColors = $('#hexColors').find('.hexColor');
  const colors = [];
  hexColors.each((index, element) => {
    const value = $(element).val();
    savedColors[index] = value;
    colors[index] = convertToRGB(value);
  });
  return colors;
}
function updateOutputTextFromPlugin(event) {
  updateOutputText(event, true);
}
function updateOutputText(event) {
  updateOutputText(event, false);
}
function updateOutputText(event, setFormat) {
  //console.log(event)
  let format;
  if(setFormat) {
    let pluginData = pluginsList[document.getElementById('plugins-list').value];
    if(!pluginData) {
      console.log(`Plugins is not a format! Using default..`);
      format = formats[document.getElementById('output-format').value] || formats["a0"];
      document.getElementById("plugin-link-button").style.display = "none";
    }else{
      document.getElementById('output-format').value = pluginData.formatIdentifier;
      format = formats[pluginData.formatIdentifier] || formats["a0"];
      // console.log(pluginData.link)
      if(pluginData.link) {
        document.getElementById("plugin-link-button").style.display = "initial";
        document.getElementById("plugin-link-button").href = pluginData.link;
        // document.getElementById("plugin-link-button").addEventListener("click", function () {
        //   `window.open('${pluginData.link}', '_blank'); return false;`
        // });
      }else{
        document.getElementById("plugin-link-button").style.display = "none";
      }
    }
  }else {
    format = formats[document.getElementById('output-format').value] || formats["a0"];
  }
  /*
  if (format.outputPrefix) {
    nickName.value = nickName.value.replace(/ /g, '');
    if (nickName.value) {
      let letters = /^[0-9a-zA-Z_]+$/;
      if (!nickName.value.match(letters) && event) nickName.value = nickName.value.replace(event.data, '');
      if (!nickName.value.match(letters)) nickName.value = 'alonsoaliaga.com';
    }
  }
  */

  let newNick = nickName.value
  if (!newNick) {
    newNick = 'Type something!'
  }

  const bold = document.getElementById('bold').checked;
  const italic = document.getElementById('italics').checked;
  const underline = document.getElementById('underline').checked;
  const strike = document.getElementById('strike').checked;

  let outputText = document.getElementById('outputText');
  let colorsList = getColors();
  //console.log(colorsList);
  let gradient;
  
  if (format.iridiumGradient) {
    let newColorList = [colorsList[0],colorsList[colorsList.length - 1]]
    gradient = new Gradient(newColorList, newNick.replace(/ /g, '').length);
  }else{
    gradient = new Gradient(colorsList, newNick.replace(/ /g, '').length);
  }
  let charColors = [];
  let output = format.outputPrefix;
  
  let startIridium;
  let endIridium;
  for (let i = 0; i < newNick.length; i++) {
    let char = newNick.charAt(i);
    if (char == ' ') {
      output += char;
      charColors.push(null);
      continue;
    }

    let hex = convertToHex(gradient.next());
    charColors.push(hex);
    let hexOutput = format.template;
    for (let n = 1; n <= 6; n++)
      hexOutput = hexOutput.replace(`$${n}`, hex.charAt(n - 1));
    let formatCodes = '';
    if (format.formatChar != null) {
      if (bold) formatCodes += format.formatChar + 'l';
      if (italic) formatCodes += format.formatChar + 'o';
      if (underline) formatCodes += format.formatChar + 'n';
      if (strike) formatCodes += format.formatChar + 'm';
    }
    hexOutput = hexOutput.replace('$f', formatCodes);
    hexOutput = hexOutput.replace('$c', char);
    if(i == 0) {
      startIridium = hexOutput.slice(2,8);
    }else if((i + 1) == newNick.length) {
      endIridium = hexOutput.slice(2,8);
    }
    output += hexOutput;
  }
  if (format.iridiumGradient) {
    outputText.innerText = `<GRADIENT:${startIridium}>${newNick}</GRADIENT:${endIridium}>`;
  }else if (format.adventureGradient) {
    let effects = "";
    if (bold) effects += '<b>';
    if (italic) effects += '<o>';
    if (underline) effects += '<u>';
    if (strike) effects += 'st';
    if(colorsList.length == 1) {
      outputText.innerText = `<${convertToHex(colorsList[0])}>${effects}${newNick}`
    }else{
      outputText.innerText = `<gradient:${colorsList.map(c=>`#${convertToHex(c)}`).join(":")}>${effects}${newNick}</gradient>`
    }
  }else{
    outputText.innerText = output;
  }
  showIridiumWarning(format, colorsList);
  showError(format.maxLength != null && format.maxLength < output.length);
  displayColoredName(newNick, charColors, format);
}

/**
 * padding function:
 * cba to roll my own, thanks Pointy!
 * ==================================
 * source: http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
 */
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function displayColoredName(nickName, colors, format) {
  coloredNick.classList.remove('minecraftbold', 'minecraftibold', 'minecraftitalic');
  if(!format.iridiumGradient) {
    if (document.getElementById('bold').checked) {
      if (document.getElementById('italics').checked) {
        coloredNick.classList.add('minecraftibold');
      } else {
        coloredNick.classList.add('minecraftbold');
      }
    } else if (document.getElementById('italics').checked) {
      coloredNick.classList.add('minecraftitalic');
    }
  }
  coloredNick.innerHTML = '';
  for (let i = 0; i < nickName.length; i++) {
    const coloredNickSpan = document.createElement('span');
    if(!format.iridiumGradient) {
      if (document.getElementById('underline').checked) {
        if (document.getElementById('strike').checked) {
          coloredNickSpan.classList.add('minecraftustrike');
        } else coloredNickSpan.classList.add('minecraftunderline');
      } else if (document.getElementById('strike').checked) {
        coloredNickSpan.classList.add('minecraftstrike');
      }
    }
    coloredNickSpan.style.color = "#"+colors[i];
    coloredNickSpan.textContent = nickName[i];
    coloredNick.append(coloredNickSpan);
  }
  //alert(colors);
}

function preset(n) {
  const colors = presets[n].colors
  if(!colors || colors.length < 2) return;
  const container = $('#hexColors');
  container.empty();
    // Need to add some colors
    let template = $('#hexColorTemplate').html();
    for (let i = 0 + 1; i <= colors.length; i++) {
      let html = template.replace(/\$NUM/g, i).replace(/\$VAL/g, colors[i - 1]);
      container.append(html);
    }
    jscolor.install(); // Refresh all jscolor elements
}
function checkSite(window) {
  //return;
  setTimeout(()=>{
    let href = window.location.href;
    console.log(href)
    if(!href.endsWith(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
      try{
        document.title = "Page stolen from https://alonsoaliaga.github.io";
      }catch(e){}
      window.location = "https://alonsoaliaga.github.io/generator/"
    }
  });
}
function loadCounter() {
  let link = atob("aHR0cHM6Ly9hbG9uc29hbGlhZ2EtcGFnZS1jb3VudC5nbGl0Y2gubWUvY291bnRlcj9zaXRlPTxzaXRlPiZrZXk9PGtleT4=").replace(/<site>/g,"generator").replace(/<key>/g,"KEY-A");
  let counter = document.getElementById("visitor-counter");
  if(counter) {
    $.ajax({
      url: link,
      type: "GET", /* or type:"GET" or type:"PUT" */
      dataType: "json",
      data: {
      },
      success: function (result) {
        if(isNaN(result))
          document.getElementById("counter-amount").innerHTML = "Click to return!";
        else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
      },
      error: function (e) {
        document.getElementById("counter-amount").innerHTML = "Click to return!";
        setTimeout(()=>{
          loadCounter();
        },1000*10);
      }
    });
    /*
    setTimeout(()=>{
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.src='https://www.freevisitorcounters.com/auth.php?id=47e33aac24b63bf2e5c44436afa983346bcccaf2';
      counter.appendChild(script1);
      try{
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src='https://www.freevisitorcounters.com/en/home/counter/951390/t/13';
        counter.appendChild(script2);
      }catch(e){}
      const a = document.createElement('a');
      a.setAttribute("href","https://alonsoaliaga.github.io");
      a.setAttribute("target","_blank");
      a.innerHTML = '<br><img src="https://www.freevisitorcounters.com/en/counter/render/951390/t/13" border="0" class="counterimg">'
      counter.appendChild(a);
    },0)
    */
  }
}
toggleColors(2);
updateOutputText(undefined);
document.getElementById('darkmode').checked = true
darkMode();
//Script stolen from https://alonsoaliaga.com/hex