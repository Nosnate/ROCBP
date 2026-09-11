// uaRO-specific layer. Keep server-only changes here; do not duplicate the classic core.
window.RO_SERVER_UARO = {
  id:'uaro', name:'uaRO', locale:'en', dataVersion:'2026-09-08',
  source:'https://wiki.uaro.net/',
  version:'Classic Pre-Renewal · Episode 13.1',
  rules:{baseMax:99,jobMax:70,maxStat:99,maxAspd:190,instantCastDex:150,minSkillDelayMs:200,minItemDelayMs:100,partyShareRange:15,serverTime:'UTC+0'},
  rates:{baseExp:5,jobExp:5,drop:5,normalCard:0.05,mvpDrop:3,mvpMiniCard:0.01,petHomunIntimacy:3},
  features:[
    ['poring_coin','Poring Coin System'],['warper','Quest-based Dungeon Warper'],['pets','Enhanced Cute Pet System'],['hunting_missions','Hunting Missions'],['repeatable_quests','Repeatable Quests'],['main_office','Main Office'],['attendance','Attendance System'],['daily_rewards','Daily Rewards System'],['vendor','Vendor System'],['modified_sales','Modified Sales Prices'],['old_gh','Old Glast Heim'],['biolab4','Bio Lab 4'],['horror_toy','Horror Toy Factory'],['pretrans_woe','Pre-Trans WoE']
  ],
  commands:[
    ['@rates','Displays server rates.'],['@time','Displays server time and day/night information.'],['@uptime','Shows map-server uptime.'],['@refresh','Synchronizes client and server position.'],['@showdelay','Shows or hides skill-delay messages.'],['@noask','Automatically rejects deals and invites.'],['@camerainfo','Displays or sets camera information.'],['@ws','Searches vending results, including price/refine filters.'],['@wb','Searches buying stores with price filtering.']
  ],
  changes:[
    {id:'general_reflect_cap',type:'System',date:'Ongoing',title:'Reflected damage is HP-capped',text:'Reflected damage cannot exceed the HP of the user. Safety Wall blocks reflection.'},
    {id:'teleport_portal',type:'System',date:'Ongoing',title:'ImageTeleport avoids portals',text:'Adjusted to prevent teleporting directly onto a map portal.'},
    {id:'party_buff_animation',type:'System',date:'Ongoing',title:'Party buff animations reduced',text:'Recipients no longer suffer full animation delay for listed party buffs.'},
    {id:'knight_bb',type:'Knight / Lord Knight',date:'Ongoing',title:'Bowling Bash improved',text:'Knockback is 2 cells and skill range is increased to 2 cells, covering the full AoE.'},
    {id:'knight_berserk',type:'Knight / Lord Knight',date:'2026-07-21',title:'Berserk reworked',text:'Fly Wing variants remain usable, chat remains enabled, and active Concentration is refreshed/extended when Berserk starts.'},
    {id:'paladin_reflect',type:'Crusader / Paladin',date:'Ongoing',title:'Shield Reflect does not affect MVPs',text:'Reflect damage is capped and no longer affects Boss-type monsters. Removing the shield still cancels the skill.'},
    {id:'assassin_edp',type:'Assassin / Assassin Cross',date:'Ongoing',title:'Enchant Deadly Poison lasts 90 seconds',text:'Duration increased from 60 seconds to 90 seconds.'},
    {id:'assassin_cdp',type:'Assassin / Assassin Cross',date:'2025-10-31',title:'Create Deadly Poison costs 10 SP',text:'SP cost reduced from 50 SP to 10 SP. Failed attempts no longer remove HP; mass production supports up to 300 at a time.'},
    {id:'stalker_backstab',type:'Rogue / Stalker',date:'2026-08-04',title:'Back Stab cooldown reduced',text:'Back Stab can be used like other attack skills and its cooldown is reduced from 0.5s to 0.333s.'},
    {id:'adoptee_stats',type:'Adoptee',date:'Ongoing',title:'Adopted characters may reach 99 base stats',text:'The normal 80 base-stat cap for adopted characters is raised to 99.'},
    {id:'magic_crasher',type:'Skill',date:'2026-09-08',title:'Magic Crasher buffed',text:'Against non-player monsters, Magic Crasher pierces 75% of DEF and damage is doubled. Cards and active weapon property still apply.'},
    {id:'holy_cross',type:'Skill',date:'2026-04-15',title:'Holy Cross with two-handed spear deals 2x damage',text:'uaRO added a dedicated two-handed spear damage interaction to Holy Cross.'},
    {id:'guild_functions',type:'System',date:'2026-08',title:'Guild functions consolidated',text:'Guild storage/bank/log functions were merged into @guild tools; legacy commands were removed.'}
  ],
  classes:{
    lord_knight:{skillOverrides:{spiral_pierce:{requirements:[['spear_mastery',10]]}},notes:['Spiral Pierce requires Spear Mastery 10 on uaRO.']},
    paladin:{notes:['Shield Reflect is ineffective against Boss-type monsters/MVPs.']},
    assassin_cross:{skillOverrides:{enchant_deadly_poison:{durationSeconds:90},create_deadly_poison:{spCost:10}},notes:['EDP lasts 90s. CDP costs 10 SP and can mass-produce up to 300.']},
    stalker:{skillOverrides:{back_stab:{cooldownSeconds:0.333}},notes:['Back Stab may be performed like most attack skills and has a 0.333s cooldown.']}
  },
  items:[
    {id:5747,name:'Mitra [1]',type:'Headgear',position:'Upper',def:3,weight:10,level:90,jobs:['High Priest'],source:'Dimonka',custom:true,effects:['INT +1','VIT +1','MDEF +5','Healing effectiveness +5%','At 90 INT: MATK +10'],materials:[['Poring Coin',1500],['Handcuffs',1000],['Margaretha Sorin Card',1]]},
    {id:18542,name:'Love Guard [1]',type:'Headgear',position:'Upper+Middle',def:4,weight:50,level:30,jobs:['All'],source:'Dimonka',custom:true,effects:['Received healing +5%','Own healing +2%','At +7: own healing +3%'],materials:[['Poring Coin',1500],['Research Chart',500],['Errende Ebecee Card',3]]},
    {id:18774,name:'Advanced Assassin Mask [0]',type:'Headgear',position:'Lower',def:0,weight:10,level:70,jobs:['All'],source:'Dimonka',custom:true,effects:['CRIT +1','Critical damage +1%'],materials:[['Poring Coin',1000],['Assassin Mask',1],['Star Crumb',50]]},
    {id:5325,name:'Robo Eye [0]',type:'Headgear',position:'Middle',def:0,weight:20,level:0,jobs:['All'],source:'Vesper MVP',custom:true,effects:['Rare drop from Vesper (2.1%)']},
    {id:5389,name:'Angel Spirit [0]',type:'Headgear',position:'Middle',def:0,weight:20,level:0,jobs:['All'],source:'Valkyrie Randgris MVP',custom:true,effects:['Rare drop from Valkyrie Randgris (2.25%)']},
    {id:5481,name:'Hermode Cap [1]',type:'Headgear',position:'Upper',def:0,weight:0,level:0,jobs:['All'],source:'Assassin Cross Eremes Mini Boss',custom:true,effects:['Uncommon drop (15%)']},
    {id:2790,name:'Bradium Brooch [1]',type:'Accessory',position:'Accessory',def:0,weight:0,level:0,jobs:['All'],source:'Bradium Golem',custom:true,effects:['Rare drop (0.05%)']},
    {id:5592,name:"Sigrun's Wings [0]",type:'Headgear',position:'Middle',def:0,weight:10,level:0,jobs:['All'],source:'Gryphon',custom:true,effects:['Rare drop (0.9%)']},
    {id:5416,name:'Wickebine\'s Black Cat Ears',type:'Headgear',position:'Upper',def:2,weight:20,level:45,jobs:['All'],source:'Dimonka',custom:true,effects:['Critical damage +10%','CRIT +3','FLEE +10','DEF -50%'],materials:[['Poring Coin',1000],['Black Cat Doll',500],['Kitty Band',1]]},
    {key:'gigantic_majestic_goat_def',name:'Gigantic Majestic Goat (DEF)',type:'Headgear',position:'Upper',def:5,weight:80,level:50,jobs:['All'],source:'Dimonka',custom:true,effects:['DemiHuman tolerance +12%','ATK scales with Job Level'],materials:[['Poring Coin',1200],['Majestic Goat [1]',1],['Majestic Goat',1]]},
    {id:18543,name:'Darkness Helm [1]',type:'Headgear',position:'Upper',def:3,weight:50,level:70,jobs:['All'],source:'Dimonka',custom:true,effects:['Conditional combo bonuses with Evil Wing Ears, Angel Wing Ears, Pecopeco Wing Ears or Black Frame Glasses'],materials:[['Poring Coin',1500],['Bone Helm [1]',1],['Crystal of Darkness',500]]},
    {id:5223,name:'Chick Hat',type:'Headgear',position:'Upper',def:1,weight:10,level:10,jobs:['All'],source:'Dimonka',custom:true,effects:['LUK +2','MaxHP +50','MaxSP +50','Enable Level 2 Double Attack','DemiHuman and Brute damage taken -3%'],materials:[['Poring Coin',1200],['Feather of Birds',500],['Egg Shell',1],['Sidewinder Card',1]]},
    {id:5484,name:'Rainbow Scarf',type:'Headgear',position:'Lower',def:1,weight:10,level:90,jobs:['All'],source:'Dimonka',custom:true,effects:['MATK +1%','INT +1','MDEF +2'],materials:[['Poring Coin',1200],['Soft Silk',500],['Red Feather',10],['Blue Feather',10]]},
    {key:'koneko_hat',name:'Koneko Hat',type:'Headgear',position:'Upper',def:1,weight:50,level:0,jobs:['All'],source:'Dimonka',custom:true,effects:['Skill after-cast delay -3%','MATK +3%','MaxSP +3%','MDEF +3','INT +1'],materials:[['Poring Coin',1200],['Drooping Cat',1]]},
    {id:5595,name:'Orc Hero Headdress [1]',type:'Headgear',position:'Upper+Middle',def:5,weight:90,level:0,jobs:['All'],source:'Dimonka',custom:true,effects:['STR +2','3% chance to autocast Lv3 Weapon Perfection when receiving physical damage'],materials:[['Poring Coin',4000],['Heroic Emblem',100],['Gold',20]]}
  ],
  headgearQuestMeta:{npc:'Dimonka',location:'Main Office',currency:'Poring Coin',source:'https://www.wiki.uaro.net/Dimonka_Headgear_Quest/'},
  databases:{items:'placeholder',cards:'placeholder',monsters:'placeholder',maps:'placeholder',quests:'placeholder'}
};
window.RO_SERVERS = {uaro:window.RO_SERVER_UARO};
