// Server data is intentionally isolated from the UI.
// Add future servers as another entry in window.RO_SERVERS without changing app.js.
window.RO_SERVERS = {
  uaro: {
    id: 'uaro', name: 'uaRO', version: 'Pre-Renewal', locale: 'en',
    summary: 'uaRO rules layered over classic Pre-Renewal. Custom class, item, system and instance changes are stored as server data.',
    rules: { maxBase: 99, maxJob: 70, rebirth: true },
    classes: [
      'Novice','Swordman','Knight','Lord Knight','Crusader','Paladin',
      'Thief','Assassin','Assassin Cross','Rogue','Stalker',
      'Archer','Hunter','Sniper','Merchant','Blacksmith','Whitesmith',
      'Acolyte','Priest','Monk','Wizard','High Wizard','Sage','Professor',
      'Bard','Dancer','Clown','Gypsy','Ninja','Gunslinger','Super Novice'
    ],
    skills: {
      'Lord Knight': [
        ['Bowling Bash',10,'Sword/2H'],['Brandish Spear',10,'Spear'],['Berserk',1,'Transcendent'],['Two-Hand Quicken',10,'Sword'],['Concentration',5,'Utility'],['Aura Blade',5,'Transcendent'],['Parrying',10,'2H Sword'],['Spear Mastery',10,'Spear']
      ],
      'Assassin Cross': [
        ['Sonic Blow',10,'Assassin'],['Enchant Deadly Poison',5,'EDP'],['Create Deadly Poison',1,'Creation'],['Soul Destroyer',10,'Hybrid'],['Grimtooth',5,'Katar'],['Meteor Assault',10,'Katar'],['Advanced Katar Research',5,'Passive']
      ],
      'Stalker': [
        ['Plagiarism',10,'Copy'],['Preserve',1,'Toggle'],['Back Stab',10,'Dagger'],['Bowling Bash',10,'Copy'],['Triple Attack',10,'Dagger'],['Tunnel Drive',5,'Utility'],['Reject Sword',5,'Defense']
      ],
      'Paladin': [
        ['Faith',10,'Passive'],['Guard',10,'Shield'],['Shield Reflect',10,'Defense'],['Holy Cross',10,'Spear'],['Grand Cross',10,'Holy'],['Sacrifice',5,'Transcendent'],['Defending Aura',5,'Defense'],['Spear Quicken',10,'Spear']
      ],
      'Sniper': [
        ['True Sight',10,'Buff'],['Sharp Shooting',5,'AoE'],['Falcon Assault',5,'Falcon'],['Wind Walk',10,'Buff'],['FAS',10,'Falcon'],['Focused Arrow Strike',5,'Special']
      ]
    },
    customChanges: [
      {title:'Back Stab', text:'Cooldown reduced to 0.333s (Aug 4, 2026).'},
      {title:'Berserk', text:'uaRO rework: Fly Wing / Novice Fly Wing / Infinite Fly Wing can be used, chat is allowed, and Concentration synergy applies.'},
      {title:'Create Deadly Poison', text:'SP cost reduced from 50 to 10 (Oct 31, 2025).'},
      {title:'Reflect Damage', text:'Reflect damage cannot exceed the user HP; MVP/boss reflection is disabled by later boss immunity changes.'},
      {title:'Mind Breaker', text:'Reduces hard MDEF outside WoE/GvG; uaRO-specific behavior.'},
      {title:'Party Buff Animation', text:'Removed for recipients; caster still sees full animation.'}
    ],
    items: {
      '1232': {id:'1232', name:'Assassin Dagger [0]', slot:0, type:'Weapon', placeholder:true, note:'Demo DB record only; connect real item DB later.'},
      '13020': {id:'13020', name:'Combat Knife [0]', slot:0, type:'Weapon', placeholder:true},
      '1219': {id:'1219', name:'Executioner [0]', slot:0, type:'Weapon', placeholder:true}
    }
  }
};
