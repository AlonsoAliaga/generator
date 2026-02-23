const modes = {
  1: {
    Label: "Text Mode 🔖",
    InputId: "nickname"
  },
  2: {
    Label: "Lore Mode 💎",
    InputId: "lore-input"
  },
  3: {
    Label: "MOTD Mode 🎀",
    InputId: "motd-input"
  }
}
let mode = 1;
//Text variables
const nickName = document.getElementById('nickname');
const coloredNick = document.getElementById('coloredNick');
//Lore variables
const loreInput = document.getElementById('lore-input');
const loreContainer = document.getElementById('lore-container');
const loreText = document.getElementById('lore-text');
//MOTD variables
const motdInput = document.getElementById('motd-input');
const motdIcon = document.getElementById('motd-icon');
const coloredMOTD = document.getElementById('coloredMOTD');

let isGeneratingPermutation = false;
let generatedPermutation = [];
//
let isDragging = false;
let offsetX, offsetY;
// const savedColors = ['084CFB', 'ADF3FD', getRandomHexColor(), getRandomHexColor(), getRandomHexColor(),
const savedColors = ['C00BD6', 'FD2177', getRandomHexColor(), getRandomHexColor(), getRandomHexColor(),
getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), 
getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), 
getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor()];
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
  },
  27: {
    name: "Peach",
    colors: ["ED4264","FFEDBC"],
  },
  28: {
    name: "Electric Violet",
    colors: ["4776E6","8E54E9"],
  },
  29: {
    name: "Party",
    colors: ["3A3AAE","7719B8","FF00CC"],
  },
  30: {
    name: "Purple Lake",
    colors: ["662D8C","ED1E79"],
  },
  31: {
    name: "Quepal",
    colors: ["11998E","38EF7D"],
  },
  32: {
    name: "Fresh",
    colors: ["9F025E","F9C929"],
  },
  33: {
    name: "Skyline",
    colors: ["1488CC","2B32B2"],
  },
  34: {
    name: "Mango",
    colors: ["FFE259","FFA751"],
  },
  35: {
    name: "Dawn",
    colors: ["F3904F","3B4371"],
  },
  36: {
    name: "Rose",
    colors: ["F4C4F3","FC67FA"],
  },
  37: {
    name: "Firewatch",
    colors: ["CB2D3E","EF473A"],
  },
  38: {
    name: "Chroma Blend",
    colors: ["FF000F","FD2170","C204AF"],
  },
  39: {
    name: "Skyline Reverse",
    colors: ["3C5ED6","51B2E8"],
  },
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
      "deluxecombat":"DeluxeCombat",
      "deluxemenus": "DeluxeMenus",
      "executableblocks":"ExecutableBlocks",
      "executableitems":"ExecutableItems",
      "loreattributesrecoded": "LoreAttributesRecoded",
      "sternalboard": "SternalBoard",
      "tab": "TAB",
    }
  },
  a1: {
    name: 'Chat <#rrggbb>',
    outputPrefix: '',
    template: '<#$1$2$3$4$5$6>$f$c',
    formatChar: '&',
    maxLength: 256,
    plugins: {
      "libertybans":"LibertyBans",
      "mythicmobs":"MythicMobs"
    }
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
    template: '<&#$1$2$3$4$5$6>$f$c',
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
      "litebans": "LiteBans"
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
    name: 'MOTD (\\u00A7x)',
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
        displayName: "AlonsoChat 💠",
        link: "https://alonsoaliaga.com/AlonsoChat",
        hover: [
          "Customizable chat for your server!",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "alonsogg": {
        displayName: "AlonsoGG 💠",
        link: "https://alonsoaliaga.com/AlonsoGG",
        hover: [
          "Reward your players for being good players!",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "alonsojoin": {
        displayName: "AlonsoJoin 💠",
        link: "https://alonsoaliaga.com/AlonsoJoin",
        hover: [
          "Customizable join message for your server!",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "alonsoleaderboards": {
        displayName: "AlonsoLeaderboards 💠",
        link: "https://alonsoaliaga.com/AlonsoLeaderboards",
        hover: [
          "Highly customizable leaderboards plugin for your server!",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "alonsoleagues": {
        displayName: "AlonsoLeagues 💠",
        link: "https://alonsoaliaga.com/AlonsoLeagues",
        hover: [
          "Create a ranking system for your players!",
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
      "alonsorftb": {
        displayName: "AlonsoRunFromTheBeast 💠",
        link: "https://alonsoaliaga.com/AlonsoRFTB",
        hover: [
          "Escape from the beast, get loot and defeat it!",
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
      "bettereggs": {
        displayName: "BetterEggs 💠",
        link: "https://alonsoaliaga.com/BetterEggs",
        hover: [
          "Make your players walk to hatch mystery eggs.",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
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
      "betterheads": {
        displayName: "BetterHeads 💠",
        link: "https://alonsoaliaga.com/BetterHeads",
        hover: [
          "Give your players/builders access to amazing heads for a price.",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "betterprofiles": {
        displayName: "BetterProfiles 💠",
        link: "https://alonsoaliaga.com/BetterProfiles",
        hover: [
          "An amazing way to display players profiles to others.",
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
      "bettersocial": {
        displayName: "BetterSocial 💠",
        link: "https://alonsoaliaga.com/BetterSocial",
        hover: [
          "Enhance your community by letting your players share their social media.",
          "<span style='color: red;'>This plugin was made by our team!</span>",
          "",
          "<span style='text-decoration: bold;color: red;'>Download on:</span> {link}"
        ]
      },
      "betterwaypoints": {
        displayName: "BetterWaypoints 💠",
        link: "https://alonsoaliaga.com/BetterWaypoints",
        hover: [
          "A whole new way to save waypoints!",
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
    ],
    plugins: {
      "playervaults":"PlayerVaults",
      "itemsadder":"ItemsAdder"
    }
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
      "combatpetreborn":"CombatPets REBORN",
      "conditionalevents":"ConditionalEvents",
      "decentholograms":"DecentHolograms",
      "deluxebazaar":"DELUXEBAZAAR",
      "elementalgems":"ElementalGems",
      "playerkits":"PlayerKits",
      "playerkits2":"PlayerKits2",
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
      "advancednmotd":"AdvancedNMotd",
      "cosmeticscore":"CosmeticsCore"
    },
    hover: [
      "🔔 <span style='margin: auto;'><strong>Plugins using this format:</strong></span>",
      "{plugins}",
      "<span style='color: red'>Know a plugin using this format? Let us know!</span>"
    ],
  },
};
let emojis_to_use_as_replacement = []
let double_emojis = []
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
  '⏣','⏤','⏥','⏦','⏧','⏩','⏪','⏭','⏮','⏯','⏳','⏴','⏵','⏶','⏷','⏸','⏹','⏺','␀','␁','␂','␃','␄',
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
  '☭','☮','☯','☰','☱','☲','☳','☴','☵','☶','☷','☸','☹','☼','☽','☾','☿','♀','♁','♂','♃','♄','♅','♆','♇','♈',
  '♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','♔','♕','♖','♗','♘','♙','♚','♛','♜','♝','♞','♟','♠',
  '♡','♢','♣','♤','♥','♦','♧','♨','♩','♪','♫','♬','♭','♮','♰','♱','♲','♳','♴','♵','♶','♷','♸','♹','♺','♻','♼','♽',
  '♾','♿','⚀','⚁','⚂','⚃','⚄','⚅','⚆','⚇','⚈','⚉','⚊','⚋','⚌','⚍','⚎','⚏','⚐','⚑','⚒','⚓','⚔','⚕','⚖','⚗','⚘',
  '⚙','⚚','⚛','⚜','⚝','⚠','⚡','⚢','⚣','⚤','⚥','⚦','⚧','⚨','⚩','⚪','⚫','⚬','⚭','⚮','⚯','⚰','⚱','⚲','⚳','⚴','⚵',
  '⚶','⚷','⚸','⚹','⚺','⚻','⚼','⛀','⛁','⛂','⛃','⛄','⛈','⛏','⛨','✁','✂','✃','✄','✆','✇','✈','✉','✌','✍','✎',
  '✏','✐','✑','✒','✓','✔','✕','✖','✗','✘','✙','✚','✛','✜','✝','✞','✟','✠','✡','✢','✣','✤','✥','✦','✧','✩','✪',
  '✫','✬','✭','✮','✯','✰','✱','✲','✳','✴','✵','✶','✷','✸','✹','✺','✻','✼','✽','✾','✿','❀','❁','❂','❃','❄','❅',
  '❆','❇','❈','❉','❊','❋','❌','❍','❏','❐','❑','❒','❖','❘','❙','❚','❛','❜','❝','❞','❡','❢','❧','➔',
  '➘','➙','➚','➛','➜','➝','➞','➟','➠','➡','➢','➣','➤','➥','➦','➧','➨','➩','➪','➫','➬','➭','➮','➯','➱','➲',
  '➳','➴','➵','➶','➷','➸','➹','➺','➻','➼','➽','➾','⠁','⠂','⠃','⠄','⠅','⠆','⠇','⠈','⠉','⠊','⠋','⠌','⠍','⠎',
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
  '⬦','⬧','⬨','⬩','⬪','⬫','⬬','⬭','⬮','⬯','⭅','⭆','⭐','⭑','⭒','⭓','⭔','⭘','⳥','⳦','⳧','⳨','⳩','⳪','⺀','⺁',
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
  '꒵','꒶','꒷','꒸','꒹','꒺','꒻','꒼','꒽','꒾','꒿','꓀','꓁','꓂','꓃','꓄','꓅','꓆','￤','￨','￭','￮','🌊','☀','🌧','☁','☂','🍖','🔥',
  '🎣','🏹','🔔','🔱','🗡','🛡','🪓','⛏','🪣','🧪','☠','✎','☄','✔','✘','♪','♩','♫','≫'
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
  double_emojis = emoji_array.filter(e=>e.length > 1);
  emojis_to_use_as_replacement = emoji_array.filter(e=>e.length == 1);
}
function addText(emoji) {
  //let isLoreEnabled = document.getElementById('lore-mode').checked;
  if(mode == 1){
    let input = document.getElementById('nickname');
    input.value = input.value + emoji.value;
  }else if(mode == 2) {
    let input = document.getElementById('lore-input');
    input.value = input.value + emoji.value;
  }else if(mode == 3){
    let input = document.getElementById('motd-input');
    input.value = input.value + emoji.value;
  }
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
let toReplace = ["left-permute","right-permute"]
function darkMode() {
  if (document.getElementById('darkmode').checked == true) {
    document.body.classList.add('dark');

    document.getElementById('output-format').classList.add("dark");
    document.getElementById('plugins-list').classList.add("dark");
    document.getElementById('fonts-list').classList.add("dark");
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
    document.getElementById('lore-input').classList.add("darktextboxes");
    document.getElementById('motd-input').classList.add("darktextboxes");
    document.getElementById('plugin-link-button').classList.add("darktextboxes");
    document.getElementById('outputText').classList.add("darktextboxes");
    document.getElementById('output-format-tooltip').classList.add("darktextboxes");
    document.getElementById('plugin-tooltip').classList.add("darktextboxes");

    document.getElementById('export-button').classList.add("darktextboxes");
    document.getElementById('import-button').classList.add("darktextboxes");
    document.getElementById('generate-permutation').classList.add("darktextboxes");
    document.getElementById('reverse-permutation-div').classList.add("darktextboxes");

    document.getElementById('input-to-decode').classList.add("darktextboxes");
    document.getElementById('decode-button').classList.add("darktextboxes");
    for(let o of document.querySelectorAll('.movecolorclass')) {
      o.classList.add("darktextboxes");
      //console.log(`Darking: ${o.id}`)
    }

    Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
      document.getElementById(e.id).classList.add("darktextboxes");
    })
    for(let index = 0; index < toReplace.length; index++) {
      const name = toReplace[index];
      let element = document.getElementById(name);
      if(element) element.classList.add("darktextboxes");
    }
  } else {
    document.body.classList.remove('dark');
    document.getElementById('output-format').classList.remove("dark");
    document.getElementById('plugins-list').classList.remove("dark");
    document.getElementById('fonts-list').classList.remove("dark");
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
    document.getElementById('lore-input').classList.remove("darktextboxes");
    document.getElementById('motd-input').classList.remove("darktextboxes");
    document.getElementById('plugin-link-button').classList.remove("darktextboxes");
    document.getElementById('outputText').classList.remove("darktextboxes");
    document.getElementById('output-format-tooltip').classList.remove("darktextboxes");
    document.getElementById('plugin-tooltip').classList.remove("darktextboxes");
    
    document.getElementById('export-button').classList.remove("darktextboxes");
    document.getElementById('import-button').classList.remove("darktextboxes");
    document.getElementById('generate-permutation').classList.remove("darktextboxes");
    document.getElementById('reverse-permutation-div').classList.remove("darktextboxes");

    document.getElementById('input-to-decode').classList.remove("darktextboxes");
    document.getElementById('decode-button').classList.remove("darktextboxes");

    for(let o of document.querySelectorAll('.movecolorclass')) {
      o.classList.remove("darktextboxes");
      //console.log(`Darking: ${o.id}`)
    }
    Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
      document.getElementById(e.id).classList.remove("darktextboxes");
    })
    for(let index = 0; index < toReplace.length; index++) {
      const name = toReplace[index];
      let element = document.getElementById(name);
      if(element) element.classList.remove("darktextboxes");
    }
  }
}

/* Get a random HEX color */
function getRandomHexColor() {
     return Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

function copyTextToClipboard(text) {
  let textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.bottom= 0;
  textArea.style.left= 0;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  //alert('You text was copied! Ready to paste!\n\nThanks for using our tool!\n- AlonsoAliaga');
  
  alertCopied();
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
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const fonts = {
  "normal": {
    "name": "Normal",
    "default": true
  },
  "accent": {
    "name": "Accent",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ĀBÇÐÊFǴĦÎĴĶĿMŇήÖPQŘŞŢŬVŴXŸƵābčďéfǥĥɨĵķłmņŇǒpqřşŧùvŵxŷž⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "big": {
    "name": "Big",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎÑOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789".split("")
    }
  },
  "bubble": {
    "name": "Bubble",
    "processed": {},
    "data": {
      tosearch: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨".split("")
    }
  },
  "currency": {
    "name": "Currency",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ÑØ₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ñØ₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789".split("")
    }
  },
  "cursed": {
    "name": "Cursed",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀ0123456789".split("")
    }
  },
  "elegant": {
    "name": "Elegant",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕ0123456789".split("")
    }
  },
  "greek": {
    "name": "Greek",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"αႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥ0123456789".split("")
    }
  },
  "knight": {
    "name": "Knight",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ḀḃḉḊḕḟḠḧḭjḲḶṁṆÑṏṖqṙṠṮṳṼẇẌẏẒḀḃḉḊḕḟḠḧḭjḲḶṁṆñṏṖqṙṠṮṳṼẇẌẏẒ0123456789".split("")
    }
  },
  "krypto": {
    "name": "Krypto",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"คც८ძ૯Բ૭ҺɿʆқՆɱՈÑ૦ƿҩՐς੮υ౮ω૪עઽคც८ძ૯Բ૭ҺɿʆқՆɱՈՈ૦ƿҩՐς੮υ౮ω૪עઽ0123456789".split("")
    }
  },
  "parenthesis": {
    "name": "Parenthesis",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒪⑴⑵⑶⑷⑸⑹⑺⑻⑼".split("")
    }
  },
  "random": {
    "name": "Random",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁÑᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁñᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ0123456789".split("")
    }
  },
  "small-caps": {
    "name": "Small caps 💎",
    "before": function(s) {
      return s.toLowerCase();
    },
    "processed": {},
    "data": {
      tosearch:"abcdefghijklmnñopqrstuvwxyzqæƀðʒǝɠɨłꟽɯœɔȣꝵʉγλπρψ0123456789-+".split(""),
      toreplace:"ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴñᴏᴘǫʀsᴛᴜᴠᴡxʏᴢǫᴁᴃᴆᴣⱻʛᵻᴌꟺꟺɶᴐᴕꝶᵾᴦᴧᴨᴩᴪ₀₁₂₃₄₅₆₇₈₉₋₊".split("")
    }
  },
  "spaced": {
    "name": "Spaced",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮÑＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９".split("")
    }
  },
  "superscript": {
    "name": "SuperScript",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺÑᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿñᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "tail": {
    "name": "Tail",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "tailuppercase": {
    "name": "Tail Uppercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤƛƁƇƊЄƑƓӇƖʆƘԼMƝÑƠƤƢƦƧƬƲƔƜҲƳȤ0123456789".split("")
    }
  },
  "taillowercase": {
    "name": "Tail Lowercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυVɯҳɣȥʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "upsidedown": {
    "name": "Upside down",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"∀ᙠƆᗡƎℲ⅁HIſ⋊˥WNÑOԀΌᴚS⊥∩ΛWX⅄Zɐqɔpǝɟɓɥıɾʞlɯuñopqɹsʇuʌʍxʎz0⇂ᄅƐㄣގ9ㄥ89".split("")
    }
  },
  "upsidedown2": {
    "name": "Upside down #2",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ɐqɔpǝɟɓɥıſʞๅɯuuodbɹsʇnʌʍxʎzɐqɔpǝɟɓɥıſʞๅɯuũodbɹsʇnʌʍxʎz0123456789".split("")
    }
  },
  "upsidedown3": {
    "name": "Upside down #3",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"∀ʙCᴅєɻƋʜǀๅĸΓWИÑObƠɩƧ⊥∏ΛMXλZɑʙcᴅєɻმʜιɿĸгwиñoƅϭʁƨ⊥nʌʍx⑃z0123456789".split("")
    }
  },
  "weird": {
    "name": "Weird",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐ0123456789".split("")
    }
  }
}
/*
let fontsList = {
}
*/
function addFontsList() {
  //console.log(`Called addFontsList`);
  let select = document.getElementById('fonts-list');
  if(select) {
    for(let fontIdentifier of Object.keys(fonts)) {
      let fontData = fonts[fontIdentifier];
      //console.log(`Adding ${fontIdentifier} (${fontData.name})`);
      let option = document.createElement('option');
      option.innerHTML = fontData.name;
      option.setAttribute("value",`${fontIdentifier}`);
      option.setAttribute("font-identifier",`${fontIdentifier}`);
      select.appendChild(option);
      fontData.processed = {};
      if(fontData.data && fontData.data.tosearch && fontData.data.toreplace &&
        fontData.data.tosearch.length == fontData.data.toreplace.length) {
          for (let i = 0; i < fontData.data.tosearch.length; i++) {
            fontData.processed[fontData.data.tosearch[i]] = fontData.data.toreplace[i];
          }
      }
    }
    /*
    fontsList = Object.keys(unordered).sort().reduce(
    (obj, key) => { 
      obj[key] = unordered[key]; 
      return obj;
    },{});
    */
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
    if (this.steps < 1)
      return this.colors[0];
    if(this.steps < this.colors.length) {
      let tColor = this.colors[this.step]
      this.step++;
      return tColor;
    }
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
  let clamped = Math.min(savedColors.length, Math.max(2, colors));
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
        let parent = $(element).parent().parent();
        if(!parent) {
          $(element).parent().remove();
        }
        parent.remove();
      }
    });
  } else if (number < colors) {
    //console.log(number,colors)
    // Need to add some colors
    let template = $('#hexColorTemplate').html();
    for (let i = number + 1; i <= colors; i++) {
      let html = template.replace(/\$NUM/g, i).replace(/\$VAL/g, savedColors[i - 1]);
      container.append(html);
    }
    jscolor.install(); // Refresh all jscolor elements
  }
  
  hexColors.each((index, element) => {
    if(index < number) {
      let eColor = document.getElementById(`color-${index + 1}`);
      if(eColor) eColor.value = `${savedColors[index]}`
      //console.log(eColor);
    }
  });
}

/* Gets all colored entered by the user */
function getColors() {
  //console.log(savedColors);
  const hexColors = $('#hexColors').find('.hexColor');
  const colors = [];
  //console.log(`Listening to getColors():`)
  hexColors.each((index, element) => {
    const value = $(element).val();
    //console.log(`#${index} ${savedColors[index]} => ${value}`)
    //console.log(element)
    savedColors[index] = value;
    colors[index] = convertToRGB(value);
  });
  return colors;
}
function updateOutputTextFromPlugin(event) {
  updateOutputText(event, true);
}
function updateOutputTextFromFont(event) {
  updateOutputText(event, false);
}
function updateOutputText(event) {
  updateOutputText(event, false);
}

let replacements = new Map();
function fixReplacements(text) {
  //console.log(`Before fix replacement: ${text}`);
  for(let [k,v] of replacements.entries()) {
    text = text.replaceAll(k,v);
  }
  //console.log(`After fix replacement: ${text}`);
  return text;
}
function addReplacements(text) {
  replacements.clear();
  //console.log(`Before replacement: ${text}`)
  for(let e of double_emojis) {
    if(text.includes(e)) {
      let randomEmoji = getRandomEmoji(text);
      replacements.set(randomEmoji,e)
      text = text.replaceAll(e,randomEmoji);
      //console.log(`Replacing: ${e} -> ${randomEmoji}`)
    }
  }
  //console.log(`After replacement: ${text}`)
  return text;
}
let beta = false;
let developer = false;
function getRandomEmoji(text) {
  let random = emojis_to_use_as_replacement[Math.floor(Math.random() * emojis_to_use_as_replacement.length)]
  if(replacements.has(random) || text.includes(random)) {
    return getRandomEmoji(text);
  }
  return random;
}
function s(){
  //console.log(`Init colors: [${v}]`);
  let c = v.split("-").filter(s=>s.match(/[a-fA-F0-9]{6}/g));
  //console.log(`Colors: [${c.join("-")}]`);
  if(c.length >= 2) {
    if(c.length > savedColors.length) {
      c.slice(0,savedColors.length);
    }          
    const container = $('#hexColors');
    const hexColors = container.find('.hexColor');
    hexColors.each((index, element) => {
      $(element).parent().remove();
    });
    //console.log(`Storing saved colors from url:`)
    setTimeout(()=>{
      for (let i = 0; i < c.length; i++) {
        //console.log(`#${i} ${savedColors[i]} => ${c[i]}`);
        savedColors[i] = c[i];
        let eColor = document.getElementById(`color-${i + 1}`);
        if(eColor) eColor.value = `#${c[i]}`
      }
      if (c.length != $('#numOfColors').val()) {
        $('#numOfColors').val(c.length);
      }
      toggleColors(c.length);
    },25);
  }
}
function runPermutation(event, right) {
  const hexColors = $('#hexColors').find('.hexColor');
  let count = hexColors.length;
  const toRotate = savedColors.slice(0, count);
  const saveFromRotation = savedColors.slice(count);
  if(right) {
    const element = toRotate.shift();
    toRotate.push(element);
  }else{
    const element = toRotate.pop();
    toRotate.splice(0, 0, element);
  }
  savedColors.length = 0;
  savedColors.push(...toRotate,...saveFromRotation);
  const container = $('#hexColors');
  container.empty();
  // Need to add some colors
  let template = $('#hexColorTemplate').html();
  for (let i = 0; i < count; i++) {
    let html = template.replace(/\$NUM/g, i + 1).replace(/\$VAL/g, savedColors[i]);
    container.append(html);
  }
  jscolor.install(); // Refresh all jscolor elements
  updateOutputText(event);
}
function updateOutputText(event, setFormat) {
  // console.log(event)
  // if(event && typeof event !== "undefined") {
  //   event.cancelBubble = true;
  //   event.preventDefault();
  //   event.stopPropagation();
  // }
  //const loreEnabled = document.getElementById('lore-mode').checked;
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
  
  const bold = document.getElementById('bold').checked;
  const italic = document.getElementById('italics').checked;
  const underline = document.getElementById('underline').checked;
  const strike = document.getElementById('strike').checked;

  let outputText = document.getElementById('outputText');
  let colorsList = getColors();
  //if(loreEnabled) {
  if(mode == 1){
    let newNick = nickName.value
    if (!newNick) newNick = 'Type something!'
    //console.log(colorsList);
    let gradient;
    if(document.getElementById('fonts-list')) {
      if(document.getElementById('fonts-list').value) {
        let fontData = fonts[document.getElementById('fonts-list').value];
        if(fontData){
          if(!fontData.default) {
            //console.log("Font is selected and not default");
            let toModify = newNick;
            newNick = "";
            if(typeof fontData.before != "undefined") {
              toModify = fontData.before(toModify);
            }
            let processed = fontData.processed;
            for (let i = 0; i < toModify.length; i++) {
              newNick += processed[toModify[i]] || toModify[i];
            }
            if(typeof fontData.after != "undefined") {
              newNick = fontData.after(newNick);
            }
          }
          //else console.log("Font is selected and default");
        }
        //else console.log("Font is not selected..");
      }
      //else console.log("Font not value. Impossible..");
    }
    //else console.log("Not fonts-list.. How?");
    //console.log(`Before replaced newNick: ${newNick}`)
    
    newNick = addReplacements(newNick);
  
    let chars = newNick.replace(/ /g, '');
  
    if (format.iridiumGradient) {
      let newColorList = [colorsList[0],colorsList[colorsList.length - 1]]
      gradient = new Gradient(newColorList, chars.length);
    }else{
      gradient = new Gradient(colorsList, chars.length);
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
  
    output = fixReplacements(output);
    let beforeFixedNewNick = newNick + "";
    newNick = fixReplacements(newNick);
  
    if (format.iridiumGradient) {
      outputText.innerText = `<GRADIENT:${startIridium}>${newNick}</GRADIENT:${endIridium}>`;
    }else if (format.adventureGradient) {
      let effects = "";
      if (bold) effects += '<b>';
      if (italic) effects += '<i>';
      if (underline) effects += '<u>';
      if (strike) effects += '<st>';
      if(colorsList.length == 1) {
        outputText.innerText = `<${convertToHex(colorsList[0])}>${effects}${newNick}`
      }else{
        outputText.innerText = `<gradient:${colorsList.map(c=>`#${convertToHex(c)}`).join(":")}>${effects}${newNick}</gradient>`
      }
    }else{
      outputText.innerText = output;
    }
    if(isGeneratingPermutation) {
      generatedPermutation.push(outputText.innerText);
    }
    showIridiumWarning(format, colorsList);
    showError(format.maxLength != null && format.maxLength < output.length);
    displayColoredName(beforeFixedNewNick, charColors, format);
  }else if(mode == 2) {
    let loreLines = loreInput.value.split("\n");
    if(loreInput.value.replace(/\n/g,"").trim().length == 0) loreLines = [`Type something!`];

    if(document.getElementById('fonts-list')) {
      if(document.getElementById('fonts-list').value) {
        let fontData = fonts[document.getElementById('fonts-list').value];
        if(fontData){
          if(!fontData.default) {
            let loretoModify = loreLines.concat();
            loreLines = [];
            for(let line of loretoModify) {
              let toModify = line;
              let newLine = "";
              if(typeof fontData.before != "undefined") {
                toModify = fontData.before(toModify);
              }
              let processed = fontData.processed;
              for (let i = 0; i < toModify.length; i++) {
                newLine += processed[toModify[i]] || toModify[i];
              }
              if(typeof fontData.after != "undefined") {
                newLine = fontData.after(newLine);
              }
              loreLines.push(newLine);
            }
          }
          //else console.log("Font is selected and default");
        }
        //else console.log("Font is not selected..");
      }
      //else console.log("Font not value. Impossible..");
    }
    if(event) {
      //console.log(event);
      if(typeof event.style !== "undefined") {
        event.style.height = "1px";
        event.style.height = ((event.scrollHeight)+2)+"px";
      }
    }

    let finalOutput = [];
    let finalBeforeReplacement = [];

    loreText.classList.remove('minecraftbold', 'minecraftibold', 'minecraftitalic');
    if(!format.iridiumGradient) {
      if (document.getElementById('bold').checked) {
        if (document.getElementById('italics').checked) {
          loreText.classList.add('minecraftibold');
        } else {
          loreText.classList.add('minecraftbold');
        }
      } else if (document.getElementById('italics').checked) {
        loreText.classList.add('minecraftitalic');
      }
    }
    loreText.innerHTML = '';
    
    for(let line of loreLines) {
      line = addReplacements(line);
      let gradient;

      let chars = line.replace(/ /g, '');
    
      if (format.iridiumGradient) {
        let newColorList = [colorsList[0],colorsList[colorsList.length - 1]]
        gradient = new Gradient(newColorList, chars.length);
      }else{
        gradient = new Gradient(colorsList, chars.length);
      }
      let charColors = [];
      let output = format.outputPrefix;
      
      let startIridium;
      let endIridium;
      for (let i = 0; i < line.length; i++) {
        let char = line.charAt(i);
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
        }else if((i + 1) == line.length) {
          endIridium = hexOutput.slice(2,8);
        }
        output += hexOutput;
      }
    
      output = fixReplacements(output);
      let beforeFixedNewNick = line + "";
      finalBeforeReplacement.push([beforeFixedNewNick,charColors]);
      line = fixReplacements(line);
    
      if (format.iridiumGradient) {
        finalOutput.push(`<GRADIENT:${startIridium}>${line}</GRADIENT:${endIridium}>`);
      }else if (format.adventureGradient) {
        let effects = "";
        if (bold) effects += '<b>';
        if (italic) effects += '<i>';
        if (underline) effects += '<u>';
        if (strike) effects += '<st>';
        if(colorsList.length == 1) {
          finalOutput.push(`<${convertToHex(colorsList[0])}>${effects}${line}`)
        }else{
          finalOutput.push(`<gradient:${colorsList.map(c=>`#${convertToHex(c)}`).join(":")}>${effects}${line}</gradient>`)
        }
      }else{
        finalOutput.push(output);
      }
    }
    addDisplayColoredLore(finalBeforeReplacement, format);
    outputText.style.whiteSpace = "pre";
    outputText.innerText = finalOutput.join("\r\n");
    outputText.style.whiteSpace = "normal";
    showIridiumWarning(format, colorsList);
  }else if(mode == 3) {
    let motdLines = motdInput.value.split("\n");
    if(motdInput.value.replace(/\n/g,"").trim().length == 0) motdLines = [`Type something!`,`Choose your MOTD!`];
    //console.log(motdLines)
    if(document.getElementById('fonts-list')) {
      if(document.getElementById('fonts-list').value) {
        let fontData = fonts[document.getElementById('fonts-list').value];
        if(fontData){
          if(!fontData.default) {
            let loretoModify = motdLines.concat();
            motdLines = [];
            for(let line of loretoModify) {
              let toModify = line;
              let newLine = "";
              if(typeof fontData.before != "undefined") {
                toModify = fontData.before(toModify);
              }
              let processed = fontData.processed;
              for (let i = 0; i < toModify.length; i++) {
                newLine += processed[toModify[i]] || toModify[i];
              }
              if(typeof fontData.after != "undefined") {
                newLine = fontData.after(newLine);
              }
              motdLines.push(newLine);
            }
          }
          //else console.log("Font is selected and default");
        }
        //else console.log("Font is not selected..");
      }
      //else console.log("Font not value. Impossible..");
    }
    if(event) {
      //console.log(event);
      if(typeof event.style !== "undefined") {
        event.style.height = "54px";
        //event.style.height = ((event.scrollHeight)+2)+"px";
      }
    }

    let finalOutput = [];
    let finalBeforeReplacement = [];

    coloredMOTD.classList.remove('minecraftbold', 'minecraftibold', 'minecraftitalic');
    if(!format.iridiumGradient) {
      if (document.getElementById('bold').checked) {
        if (document.getElementById('italics').checked) {
          coloredMOTD.classList.add('minecraftibold');
        } else {
          coloredMOTD.classList.add('minecraftbold');
        }
      } else if (document.getElementById('italics').checked) {
        coloredMOTD.classList.add('minecraftitalic');
      }
    }
    coloredMOTD.innerHTML = '';
    
    for(let line of motdLines) {
      line = addReplacements(line);
      let gradient;

      let chars = line.replace(/ /g, '');
    
      if (format.iridiumGradient) {
        let newColorList = [colorsList[0],colorsList[colorsList.length - 1]]
        gradient = new Gradient(newColorList, chars.length);
      }else{
        gradient = new Gradient(colorsList, chars.length);
      }
      let charColors = [];
      let output = format.outputPrefix;
      
      let startIridium;
      let endIridium;
      for (let i = 0; i < line.length; i++) {
        let char = line.charAt(i);
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
        }else if((i + 1) == line.length) {
          endIridium = hexOutput.slice(2,8);
        }
        output += hexOutput;
      }
    
      output = fixReplacements(output);
      let beforeFixedNewNick = line + "";
      finalBeforeReplacement.push([beforeFixedNewNick,charColors]);
      line = fixReplacements(line);
    
      if (format.iridiumGradient) {
        finalOutput.push(`<GRADIENT:${startIridium}>${line}</GRADIENT:${endIridium}>`);
      }else if (format.adventureGradient) {
        let effects = "";
        if (bold) effects += '<b>';
        if (italic) effects += '<i>';
        if (underline) effects += '<u>';
        if (strike) effects += '<st>';
        if(colorsList.length == 1) {
          finalOutput.push(`<${convertToHex(colorsList[0])}>${effects}${line}`)
        }else{
          finalOutput.push(`<gradient:${colorsList.map(c=>`#${convertToHex(c)}`).join(":")}>${effects}${line}</gradient>`)
        }
      }else{
        finalOutput.push(output);
      }
    }
    addDisplayColoredMOTD(finalBeforeReplacement, format);
    outputText.style.whiteSpace = "pre";
    outputText.innerText = finalOutput.join("\r\n");
    outputText.style.whiteSpace = "normal";
    showIridiumWarning(format, colorsList);
  }
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
function toggleMode(event) {
  let oldInput;
  if(event) {
    let o = document.getElementById(modes[mode].InputId);
    if(o) oldInput = o.value;
    //console.log(o.value)
    /*
    if(mode == 1) {
      let o = document.getElementById(modes[mode].InputId);
      if(o) oldInput = o.innerText;
    }else if(mode == 2){
      let o = document.getElementById("nickname");
      if(o) oldInput = o.innerText;
    }else {
      let o = document.getElementById("nickname");
      if(o) oldInput = o.innerText;
    }
    */
    mode++;
    if(!modes[mode]) mode = 1;
  }
  if(mode == 1) { //Text
    //Text
    coloredNick.style.display = "block";
    nickName.style.display = "block";
    //Lore
    loreInput.style.display = "none";
    loreContainer.style.display = "none";
    //Motd
    motdInput.style.display = "none";
    motdIcon.style.display = "none";
    coloredMOTD.style.display = "none";
    //
    let genModeText = document.getElementById('gen-mode-text');
    if(genModeText) genModeText.innerText = modes[mode].Label || "Unknown?";
    
    let genMode = document.getElementById('gen-mode');
    if(genMode) genMode.checked = true;
    
    
    let o = document.getElementById(modes[mode].InputId);
    if(o && oldInput) o.value = oldInput;
    updateOutputText(null);
  }else if(mode == 2) { //Lore
    updateOutputText(null)
    //Text
    coloredNick.style.display = "none";
    nickName.style.display = "none";
    //Lore
    loreInput.style.display = "block";
    loreContainer.style.display = "block";
    //Motd
    motdInput.style.display = "none";
    motdIcon.style.display = "none";
    coloredMOTD.style.display = "none";
    //
    if(event) {
      //console.log(event)
      loreContainer.style.left = (event.pageX) + 'px';
      loreContainer.style.top = (event.pageX) + 'px';
    }
    let genModeText = document.getElementById('gen-mode-text');
    if(genModeText) genModeText.innerText = modes[mode].Label || "Unknown?";
    
    let genMode = document.getElementById('gen-mode');
    if(genMode) genMode.checked = true;
    let o = document.getElementById(modes[mode].InputId);
    if(o && oldInput) o.value = oldInput;
    updateOutputText(null);
  }else if(mode == 3) { //MOTD
    //Text
    coloredNick.style.display = "none";
    nickName.style.display = "none";
    //Lore
    loreInput.style.display = "none";
    loreContainer.style.display = "none";
    //Motd
    motdInput.style.display = "block";
    motdIcon.style.display = "block";
    coloredMOTD.style.display = "block";

    let genModeText = document.getElementById('gen-mode-text');
    if(genModeText) genModeText.innerText = modes[mode].Label || "Unknown?";
    
    let genMode = document.getElementById('gen-mode');
    if(genMode) genMode.checked = true;
    let o = document.getElementById(modes[mode].InputId);
    if(o && oldInput) o.value = oldInput;
    updateOutputText(null);
  }
}
function addDisplayColoredMOTD(finalBeforeReplacement, format) {
  let index = 0;
  for(let [line,colors] of finalBeforeReplacement) {
    if(index > 0) coloredMOTD.innerHTML = coloredMOTD.innerHTML + "<br>";
    for (let i = 0; i <= line.length; i++) {
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
      //coloredMOTD.style.paddingTop = "10px";
      //coloredMOTD.style.paddingBottom = "2px";
      let char = line[i];
      if(replacements.has(char)) {
        coloredNickSpan.textContent = replacements.get(char);
      }else{
        coloredNickSpan.textContent = char;
      }
      coloredMOTD.append(coloredNickSpan);
      index++;
    }
  }
}
function addDisplayColoredLore(finalBeforeReplacement, format) {
  let index = 0;
  for(let [line,colors] of finalBeforeReplacement) {
    if(index > 0) loreText.innerHTML = loreText.innerHTML + "<br>";
    for (let i = 0; i <= line.length; i++) {
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
      loreText.style.paddingTop = "2px";
      loreText.style.paddingBottom = "2px";
      let char = line[i];
      if(replacements.has(char)) {
        coloredNickSpan.textContent = replacements.get(char);
      }else{
        coloredNickSpan.textContent = char;
      }
      loreText.append(coloredNickSpan);
      index++;
    }
  }
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
    let char = nickName[i];
    if(replacements.has(char)) {
      coloredNickSpan.textContent = replacements.get(char);
    }else{
      coloredNickSpan.textContent = char;
    }
    coloredNick.append(coloredNickSpan);
  }
  //coloredNick.innerHTML = fixReplacements(coloredNick.innerHTML);
  //alert(colors);
}
function openIconUploadBox(event) {
  console.log(event);
  //let imageContainer = document.getElementById("motd-icon");
  let imagePreview = document.getElementById("motd-icon-item");
  // Create a new input element
  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';

  // Add event listener to handle file selection
  uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    // Handle the file upload or further processing here
    
    // Create a FileReader object
    const reader = new FileReader();

    // Set up a load event listener on the FileReader
    reader.addEventListener('load', function() {
      // Update the image source with the uploaded image
      imagePreview.src = reader.result;
    });

    // Read the uploaded file as a data URL
    reader.readAsDataURL(file);
  });

  // Append the input element to the image container
  document.body.appendChild(uploadInput);

  // Trigger a click event on the input element
  uploadInput.click();
  
  document.body.removeChild(uploadInput);
}
function makeEditable(element) {
  const originalOnClick = element.onclick;
  // Create an input element
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.value = element.textContent;
  inputElement.classList.add("alonsocraft");

  // Set styles for the input element
  inputElement.style.border = 'none';
  inputElement.style.backgroundColor = 'transparent';
  inputElement.style.color = 'white';
  inputElement.style.position = "absolute"

  // Replace the <p> element with the input element
  element.replaceWith(inputElement);

  // Focus on the input element
  inputElement.focus();

  // Handle the blur event to restore the <p> element
  inputElement.addEventListener('blur', function() {
    const text = inputElement.value.trim() || 'AlonsoCraft';
    // Create a new <p> element with the updated text
    const newElement = document.createElement('p');
    newElement.classList.add("alonsocraft");
    newElement.textContent = text;
    newElement.onclick = originalOnClick;
    
    newElement.addEventListener('onclick', function(el) {
      makeEditable(el);
    });
    // Replace the input element with the new <p> element
    inputElement.replaceWith(newElement);
  });
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
function loadChecking() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let storedGen = localStorage.getItem("favorite-version");
 let gen = typeof storedGen != "undefined" && storedGen == "new" ? "new" : "old";
 let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NoZWNraW5nP3NpdGU9PHNpdGU+JmtleT08a2V5PiZsb2NrPTxsb2NrPiZnZW49PGdlbj4=")
    .replace(/<site>/g,"generator").replace(/<key>/g,"KEY-A")
    .replace(/<gen>/g,gen)
    .replace(/<lock>/g,(typeof window.getRandomStyle == "undefined" || typeof adBlockEnabled == "undefined" || adBlockEnabled || myTimeout != undefined) ? "yes" : "no"  );
 let counter = document.getElementById("online-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
        //console.log(`Total fails: ${counter.dataset.failed}`)
        counter.dataset.failed = "0";
        counter.style.display = "flex";
        if(isNaN(result)) {
         counter.textContent = `🟡 You shouldn't be reading this. Report it on https://alonsoaliaga.com/discord`;
         counter.style.backgroundColor = "yellow";
        }else{
         //counter.textContent = `🟢 ${result} user${result==1?``:`s`} online using our Minecraft Profile Picture Generator!`;
         counter.textContent = `🟢 ${result} online creating amazing gradients for their server with our generator!`;
         counter.style.backgroundColor = "green";
        }
     },
     error: function (e) {
      //console.log(`Total fails: ${counter.dataset.failed}`)
      if(counter.style.display != "none") {
        let currentFails = +counter.dataset.failed;
        if(currentFails >= 1){
          counter.style.display = "none"
        }else{
          counter.textContent = `🔴 Check your internet connection!`;
          counter.style.backgroundColor = "#7c0000";
          counter.dataset.failed = `${currentFails + 1}`
        }
      }
     }
   });
 }
}
async function checkSite(window) {
  setTimeout(()=>{
    let href = window.location.href;
    if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
      window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/generator/`}
  },150);
  let search = window.location.search;
  //console.log(search)
  if(typeof search !== "undefined" && search.length > 0) {
    
    let finalString = search.slice(1);
    let parts = [];
    try{
      parts = atob(finalString).split("&");
    }catch(e) {
      console.log(`Search part is not in base64`);
    }

    //let parts = atob(search.slice(1)).split("&");
    //console.log(parts);
    for(let part of parts) {
      let [k,v] = part.split("=");
      if(k == atob("YmV0YQ==")) {
        if(v === "true") {
          beta = true;
          let dgenmode = document.getElementById("dgenmode");
          if(dgenmode) {
            dgenmode.style.display = "block";
          }
        }
      }else if(k == atob("bW9kZQ==")) {
        if(!isNaN(v) && typeof modes[v] !== "undefined") {
          mode = parseInt(v);
          toggleMode(null);
        }
      }else if(k == atob("Y29udGVudA==")) {
        try{
          let content = decodeURIComponent(v);
          setContent(content);
        }catch(e) {}
      }else if(k == atob("Zm9udA==")) {
        if(v != "normal" && typeof fonts[v] != "undefined") {
          let fontsList = document.getElementById("fonts-list");
          if(fontsList) {
            fontsList.value = v;
          }
        }
      }else if(k == atob("ZGV2ZWxvcGVy")) {
        if(v === "true") {
          developer = true;
          let ddevmode = document.getElementById("ddevmode");
          if(ddevmode) {
            ddevmode.style.display = "block";
          }
        }
      }else if(["Ym9sZA==","aXRhbGljcw==","dW5kZXJsaW5l","c3RyaWtl"].includes(btoa(k))) {
        if(v == "true") {
          let option = document.getElementById(k);
          if(option) option.checked = true;
        }
      }else if(k == atob("Zm9ybWF0")) {
        let outputFormat = document.getElementById(`output-format`);
        if(outputFormat) {
          let theFormat = formats[v];
          if(typeof theFormat != "undefined") {
            outputFormat.value = v;
            updateOutputText();
          }
        }
      }else if(k == atob("Y29sb3Jz")) {
        //console.log(`Init colors: [${v}]`);
        let c = v.split("-").filter(s=>s.match(/[a-fA-F0-9]{6}/g));
        //console.log(`Colors: [${c.join("-")}]`);
        if(c.length >= 2) {
          if(c.length > savedColors.length) {
            c.slice(0,savedColors.length);
          }          
          const container = $('#hexColors');
          const hexColors = container.find('.hexColor');
          hexColors.each((index, element) => {
            $(element).parent().remove();
          });
          //console.log(`Storing saved colors from url:`)
          setTimeout(()=>{
            for (let i = 0; i < c.length; i++) {
              //console.log(`#${i} ${savedColors[i]} => ${c[i]}`);
              savedColors[i] = c[i];
              let eColor = document.getElementById(`color-${i + 1}`);
              if(eColor) eColor.value = `#${c[i]}`
            }
            if (c.length != $('#numOfColors').val()) {
              $('#numOfColors').val(c.length);
            }
            toggleColors(c.length);
          },25);
        }
      }
    }
  }
  /*
  let href = window.location.href;
  if(href.endsWith(atob("P2JldGE9dHJ1ZQ=="))) {
    beta = true;
    let dgenmode = document.getElementById("dgenmode");
    if(dgenmode) {
      dgenmode.style.display = "block";
    }
  }
  */
  fetch('https://raw.githubusercontent.com/AlonsoAliaga/AlonsoAliagaAPI/refs/heads/main/api/tools/tools-list.json')
      .then(res => res.json())
      .then(content => {
        let toolsData = content;
        let toolsArray = []
        for(let toolData of toolsData) {
          let clazz = typeof toolData.clazz == "undefined" ? "" : ` class="${toolData.clazz}"`;
          let style = typeof toolData.style == "undefined" ? "" : ` style="${toolData.style}"`;
          toolsArray.push(`<span>💠</span> <span${clazz}${style}><a ${clazz}${style} title="${toolData.description}" id="tool-priority-${toolData.priority}" href="${toolData.link}">${toolData.name}</a></span>`);
        }
        document.getElementById("tools-for-you").innerHTML = toolsArray.join(`<br>`);
      });
}
function setContent(content) {
  setTimeout(()=>{
    if(modes[mode]) {
      let input = document.getElementById(modes[mode].InputId);
      if(input) {
        input.value = content;
        updateOutputText();
      }
    }
  },500);
}
function copyCustomURL() {
  let url = createCustomURL();
  copyTextToClipboard(url);
  let ddevmode = document.getElementById("dev-mode");
  if(ddevmode) ddevmode.checked = false;
}
function createCustomURL() {
  let url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
  let m = new Map();
  if(modes[mode]) {
    let d = modes[mode];
    if(mode != 1) {
      m.set("mode",mode);
      m.set("beta",true);
    }
    if(document.getElementById('bold').checked) m.set("bold",true);
    if(document.getElementById('italics').checked) m.set("italics",true);
    if(document.getElementById('underline').checked) m.set("underline",true);
    if(document.getElementById('strike').checked) m.set("strike",true);
    let c = document.getElementById(d.InputId);
    if(c) {
      m.set("content",encodeURIComponent(c.value));
    }
    let fontPreset = document.getElementById("fonts-list");
    if(fontPreset && fontPreset.value != "Select a font") {
      //console.log(fontPreset.value);
      m.set("font",fontPreset.value)
    }
    m.set("colors",getColors().map(s=>convertToHex(s)).join("-"));
  }
  if(m.size > 0) {
    let q = [];
    for(let [k,v] of m.entries()) q.push(`${k}=${v}`)
    return `${url}?${btoa(q.join("&"))}`;
  }else return `${url}`;
}
let count = 0;
async function loadCounter() {
  let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NvdW50ZXI/c2l0ZT08c2l0ZT4ma2V5PTxrZXk+").replace(/<site>/g,"generator").replace(/<key>/g,"KEY-A");
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
        count++;
        document.getElementById("counter-amount").innerHTML = "Click to return!";
        if(count <= 1) {
          setTimeout(()=>{
            loadCounter();
          },1000*10);
        }
      }
    });
  }
}
function startDrag(event) {
  isDragging = true;
  offsetX = event.clientX - loreContainer.offsetLeft;
  offsetY = event.clientY - loreContainer.offsetTop;
}
function drag(event) {
  if (isDragging) {
    loreContainer.style.left = (event.clientX - offsetX) + 'px';
    loreContainer.style.top = (event.clientY - offsetY) + 'px';
  }
}
function stopDrag() {
  isDragging = false;
}
let copiedTimeout;
function alertCopied() {
  if(copiedTimeout) {
    clearTimeout(copiedTimeout);
    var sb = document.getElementById("snackbar");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  copiedTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
toggleColors(2);
updateOutputText(undefined);
document.getElementById('darkmode').checked = true
darkMode();
toggleMode(null);
addListeners();
function addListeners() {
  loreContainer.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', drag);
  window.addEventListener('mouseup', stopDrag);
}
//Script stolen from https://alonsoaliaga.com/hex
function exportOptions() {
  console.log(`Exporting options..`);

  let formatIdentifier = document.getElementById('output-format').value
  let formatFontIdentifier = document.getElementById('fonts-list').value
  if(!formats[formatIdentifier]) {
    formatIdentifier = "a0";
  }
  if(!fonts[formatFontIdentifier]) {
    formatFontIdentifier = "normal";
  }
  let colors = getColors();
  let bold = document.getElementById('bold').checked;
  let italic = document.getElementById('italics').checked;
  let underline = document.getElementById('underline').checked;
  let strike = document.getElementById('strike').checked;

  let exported = {
    format: formatIdentifier,
    font: formatFontIdentifier,
    colors: colors,
    bold: bold,
    italic: italic,
    underline: underline,
    strike: strike,
  }
  console.log(exported)
  let toExport = btoa(JSON.stringify(exported,null,4));
  copyTextToClipboard(toExport);
}
function loadImport(element) {
  console.log(`Importing options..`);
  let importJSON;
  let value = element.value;
  element.value = "";
  let importMode = 0;
  let extractedColors = []
  try{
    let string = atob(value);
    importJSON = JSON.parse(string);
    importMode = 1;
  }catch(e) {}
  if(importMode == 0) {
    let regex = /#[0-9a-fA-F]{6}/g
    let match = value.match(regex);
    if(typeof match !== "undefined" && match.length > 0) {
      importMode = 2;
      extractedColors = match.map(s=>convertToRGB(s.replace(/&/g,"").replace(/#/g,"")))
    }
  }
  if(importMode == 1) {
    console.log(importJSON);
    loadColors(importJSON.colors);
    document.getElementById('fonts-list').value = importJSON.font;
    document.getElementById('output-format').value = importJSON.format;
    document.getElementById('bold').checked = importJSON.bold;
    document.getElementById('italics').checked = importJSON.italic;
    document.getElementById('underline').checked = importJSON.underline;
    document.getElementById('strike').checked = importJSON.strike;
    document.getElementById('numOfColors').value = importJSON.colors.length;
  
    updateOutputText()
  }else if(importMode == 2) {
    loadColors(extractedColors);
    document.getElementById('numOfColors').value = extractedColors.length;
    updateOutputText()
  }else{
    console.log(`Invalid options..`)
    alert("Invalid option to import!")
  }
}
function loadColors(colors) {
  toggleColors(2);
  const container = $('#hexColors');
  /*
  for (let i = 0 + 1; i <= colors.length; i++) {
    savedColors[i] = colors[i];
  }
  convertToHex()
  */
  toggleColors(colors.length);

  container.empty();
  // Need to add some colors
  let template = $('#hexColorTemplate').html();
  if(typeof colors[0] == "string") {
    for (let i = 0 + 1; i <= colors.length; i++) {
      let html = template.replace(/\$NUM/g, i).replace(/\$VAL/g, colors[i - 1]);
      container.append(html);
    }
  }else{
    for (let i = 0 + 1; i <= colors.length; i++) {
      let html = template.replace(/\$NUM/g, i).replace(/\$VAL/g, convertToHex(colors[i - 1]));
      container.append(html);
    }
  }
  jscolor.install(); // Refresh all jscolor elements
}
function generatePermutation(){
  let reversed = document.getElementById("reverse-permutation").checked;
  isGeneratingPermutation = true;
  generatedPermutation = [];
  let colorsAmount = getColors().length;
  let originalMode = mode;
  mode = 1;
  for(let i = 0; i < colorsAmount; i++) {
    runPermutation(undefined,!reversed);
  }
  isGeneratingPermutation = false;
  runPermutation(undefined,!reversed);
  mode = originalMode;
  
  let outputText = document.getElementById('outputText');
  outputText.style.whiteSpace = "pre";
  outputText.innerText = generatedPermutation.map(s=>`- "${s}"`).join(`\r\n`);
  outputText.style.whiteSpace = "normal";
}
function moveColor(element,direction) {
  let currentColorNumber = +element.getAttribute("color-number");
  let currentColorIndex = currentColorNumber - 1;
  let colorToMigrate = savedColors[currentColorIndex];
  const container = $('#hexColors');
  const activeColors = container.find('.hexColor').size();
  if(direction == "up") {
    if(currentColorIndex > 0) {
      let upColor = savedColors[currentColorIndex - 1];
      savedColors[currentColorIndex - 1] = oneMichi(colorToMigrate);
      savedColors[currentColorIndex] = oneMichi(upColor);
    }
  }else{
    if(currentColorIndex < activeColors - 1) {
      let downColor = savedColors[currentColorIndex + 1];
      savedColors[currentColorIndex + 1] = oneMichi(colorToMigrate);
      savedColors[currentColorIndex] = oneMichi(downColor);
    }
  }
  let c = savedColors;
  if(c.length > activeColors) {
    c = c.slice(0,activeColors);
  }
  const hexColors = container.find('.hexColor');
  hexColors.each((index, element) => {
    let parent = $(element).parent().parent();
    if(!parent) {
      $(element).parent().remove();
    }else{
      parent.remove();
    }
  });
  for (let i = 0; i < c.length; i++) {
    //console.log(`#${i} ${savedColors[i]} => ${c[i]}`);
    savedColors[i] = c[i];
    let eColor = document.getElementById(`color-${i + 1}`);
    if(eColor) eColor.value = `#${c[i]}`
  }
  if (c.length != $('#numOfColors').val()) {
    $('#numOfColors').val(c.length);
  }
  toggleColors(c.length);
  updateOutputText();
}
function oneMichi(str) {
  return str.startsWith("#") ? str : `${str}` ;
}

/**
 * Extracts defining color points from a string containing gradient codes (e.g., &#RRGGBBtext).
 * Uses a threshold to filter out intermediate colors that are too close to the previously identified point.
 * COMPATIBILITY: Uses regex.exec() instead of matchAll() for older environments.
 * @param {string} gradientStr - The input string with gradient codes. Should be a valid string.
 * @param {number} threshold - Minimum color distance (Euclidean RGB) to identify a new defining point. Higher threshold = fewer points.
 * @returns {string[]} An array of hex color strings (#RRGGBB) representing the defining points.
 */
function extractGradientPoints(gradientStr, threshold) {
  // Compact helper: Convert #RRGGBB hex to [r, g, b] array
  const hexToRgb = hex => {
    // Check if hex is a valid string before parsing
    if (typeof hex !== 'string' || hex.length !== 7) return [0, 0, 0];
    const bigint = parseInt(hex.slice(1), 16);
    // Check if parsing was successful
    if (isNaN(bigint)) return [0,0,0];
    return [(bigint >> 16) & 0xFF, (bigint >> 8) & 0xFF, bigint & 0xFF];
  };
  // Compact helper: Calculate squared Euclidean distance between two RGB colors
  const distSq = (rgb1, rgb2) =>
    (rgb1[0] - rgb2[0]) ** 2 + (rgb1[1] - rgb2[1]) ** 2 + (rgb1[2] - rgb2[2]) ** 2;

  // 1. Extract all color codes found in the string, in order (Using exec loop for compatibility)
  const allColors = [];
  const regex = /#([0-9a-fA-F]{6})/g; // Regex with global flag
  let match;

  // Ensure gradientStr is a string before trying to match
  if (typeof gradientStr !== 'string') {
      console.error("Input is not a string:", gradientStr);
      return []; // Return empty if input is invalid
  }

  while ((match = regex.exec(gradientStr)) !== null) {
    // match[0] is the full match (e.g., '&#C00BD6')
    // match[1] is the first captured group (e.g., 'C00BD6')
    allColors.push(`#${match[1].toUpperCase()}`);
  }

  // If fewer than 2 colors, return them all
  if (allColors.length < 2) {
    return allColors;
  }

  // 2. Filter based on threshold
  const definingPoints = [allColors[0]]; // Start point is always defining
  let lastKeptRgb = hexToRgb(allColors[0]);
  const thresholdSq = threshold ** 2;

  for (let i = 1; i < allColors.length; i++) {
    const currentHex = allColors[i];
    const currentRgb = hexToRgb(currentHex);

    // Keep the current color if it's sufficiently different from the *last kept* defining point
    if (distSq(currentRgb, lastKeptRgb) > thresholdSq) {
      definingPoints.push(currentHex);
      lastKeptRgb = currentRgb; // Update the point of reference
    }
  }

  // Ensure the very last color code extracted from the string is included if it wasn't already
  const lastExtractedColor = allColors[allColors.length - 1];
   if (definingPoints.length > 0 && definingPoints[definingPoints.length - 1] !== lastExtractedColor) {
     definingPoints.push(lastExtractedColor);
   } else if (definingPoints.length === 0 && allColors.length > 0) {
     // If no points were added besides the first one (e.g., high threshold),
     // still ensure the last one is present if different. Added this condition just in case.
     definingPoints.push(lastExtractedColor);
   }


  return definingPoints;
}

// --- Example Usage (Remains the same) ---
function decodeInput() {
  let inputToDecode = document.getElementById("input-to-decode").value;
  if(true) {
    const regex = /§x((§[0-9a-fA-F]){6})/g;
    let matches = inputToDecode.match(regex);
    console.log(matches);
    if(matches && matches.length > 0) {
      for(let match of inputToDecode.match(regex)) {
        //console.log(`Replacing: ${match}, ${match.replace(/\x/g,"").replace(/\§/g,"")}`)
        inputToDecode = inputToDecode.replace(match,`#${match.replace(/\x/g,"").replace(/\§/g,"")}`)
      }
    }
  }
  if(true) {
    const regex = /&x((&[0-9a-fA-F]){6})/g;
    let matches = inputToDecode.match(regex);
    console.log(matches);
    if(matches && matches.length > 0) {
      for(let match of inputToDecode.match(regex)) {
        //console.log(`Replacing: ${match}, ${match.replace(/\x/g,"").replace(/\§/g,"")}`)
        inputToDecode = inputToDecode.replace(match,`#${match.replace(/\x/g,"").replace(/\&/g,"")}`)
      }
    }
  }
  let points = extractGradientPoints(inputToDecode,document.getElementById('threshold-value').value);
  copyTextToClipboard(points.join("-"))
}
function loadThings() {
  addDefaultsFormats(); addDefaultsPresets(); addPluginsList(); addFontsList(); loadCounter();
}
let myTimeout;
let uuid;
document.addEventListener("DOMContentLoaded", () => {
  checkSite(window);
  loadCounter();
  loadThings();
  setTimeout(()=>{
    loadChecking();
    setInterval(()=>{
      loadChecking();
    },10000)
  },2500)
  setTimeout(() => {
    if(!uuid) {
      processAds();
    }
  },5000);
  setTimeout(()=>{
    let favoriteVersion = localStorage.getItem("favorite-version");
    if(typeof favoriteVersion != "undefined" && favoriteVersion != null) {
      if(favoriteVersion == "new") {  
        window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/generator/`;
        return;
      }
    }
    let openNewGeneratorButton = document.getElementById("new-generator-div");
      let isRed = false;
      setInterval(()=>{
          if(isRed) {
              openNewGeneratorButton.style.backgroundColor = "#ffc107";
              openNewGeneratorButton.style.color = "black";
              isRed = false;
          }else{
              isRed = true;
              openNewGeneratorButton.style.backgroundColor = "red";
              openNewGeneratorButton.style.color = "white";
          }
      },500);
      openNewGeneratorButton.addEventListener("click", ()=>{
          localStorage.setItem("favorite-version", "new");
          window.open(`./index.html`, '_blank').focus();
          //window.open(`https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/generator/`, '_blank').focus();
      });
  },250);
});
function randomUUID() {
  // Generate a random UUID (version 4)
  uuid = "UUID not supported in this environment";
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function lockElementWithMessage(element,className,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/generator/main/assets/images/lock-icon.png') {
  if(element) {
    element.classList.add(className);
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
    element.append(ov);
  }
}
function processAds() {
  uuid = "UUID supported in this environment";
  lockElementWithMessage(document.getElementById("gen-perm-div"),"adlocked",`Disable AdBlock to generate animations!`)
  lockElementWithMessage(document.getElementById("input-to-decode-div"),"adlockedsmall",`Disable AdBlock to decode gradients and create new gradients with the same colors!`)
  lockElementWithMessage(document.getElementById("button-toggle-custom-gradient-div"),"adlockedfit",`Disable AdBlock to use custom gradients!`)
  lockElementWithMessage(document.getElementById("customskindiv"),"adlockedsmall",`Disable AdBlock to use custom skin texture!`)
}