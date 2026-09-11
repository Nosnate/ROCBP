// Initial classic skill catalog. This file is intentionally independent of server overrides.
// IDs are stable planner IDs, not item/skill numeric database IDs.
window.RO_SKILLS = {
  'knight': [
    {id:'knight_sword_mastery',name:'Sword Mastery',max:10,group:'Sword',req:[]},
    {id:'two_hand_sword_mastery',name:'Two-Hand Sword Mastery',max:10,group:'Sword',req:[]},
    {id:'two_hand_quicken',name:'Two-Hand Quicken',max:10,group:'Sword',req:[['two_hand_sword_mastery',1]]},
    {id:'counter_attack',name:'Counter Attack',max:5,group:'Sword',req:[['two_hand_sword_mastery',5]]},
    {id:'bowling_bash',name:'Bowling Bash',max:10,group:'Offensive',req:[['bash',10],['magnum_break',3],['two_hand_quicken',10]]},
    {id:'brandish_spear',name:'Brandish Spear',max:10,group:'Spear',req:[['spear_mastery',10]]},
    {id:'spear_mastery',name:'Spear Mastery',max:10,group:'Spear',req:[]},
    {id:'pierce',name:'Pierce',max:10,group:'Spear',req:[['spear_mastery',1]]},
    {id:'concentration',name:'Concentration',max:5,group:'Buff',req:[['spear_mastery',5],['pierce',5]]}
  ],
  'lord_knight': [
    {id:'spear_dynamo',name:'Spear Dynamo',max:5,group:'Spear',req:[['brandish_spear',10]]},
    {id:'spiral_pierce',name:'Spiral Pierce',max:5,group:'Spear',req:[['spear_mastery',10],['spear_dynamo',5]]},
    {id:'aura_blade',name:'Aura Blade',max:5,group:'Transcendent',req:[]},
    {id:'parrying',name:'Parrying',max:10,group:'Two-Hand Sword',req:[['two_hand_quicken',10]]},
    {id:'berserk',name:'Berserk',max:1,group:'Transcendent',req:[]},
    {id:'head_crush',name:'Head Crush',max:5,group:'Spear',req:[]},
    {id:'joint_beat',name:'Joint Beat',max:10,group:'Spear',req:[['head_crush',3]]},
    {id:'clashing_spirals',name:'Clashing Spiral',max:5,group:'Spear',req:[['joint_beat',5]]}
  ],
  'crusader': [
    {id:'faith',name:'Faith',max:10,group:'Passive',req:[]},
    {id:'guard',name:'Guard',max:10,group:'Shield',req:[]},
    {id:'shield_charge',name:'Shield Charge',max:5,group:'Shield',req:[['guard',3]]},
    {id:'shield_boomerang',name:'Shield Boomerang',max:5,group:'Shield',req:[['shield_charge',3]]},
    {id:'holy_cross',name:'Holy Cross',max:10,group:'Spear',req:[['faith',7]]},
    {id:'grand_cross',name:'Grand Cross',max:10,group:'Holy',req:[['faith',10],['holy_cross',6]]},
    {id:'reflect_shield',name:'Shield Reflect',max:10,group:'Defense',req:[['guard',5]]},
    {id:'defending_aura',name:'Defending Aura',max:5,group:'Defense',req:[['guard',5]]}
  ],
  'paladin': [
    {id:'faith',name:'Faith',max:10,group:'Passive',req:[]},
    {id:'guard',name:'Guard',max:10,group:'Shield',req:[]},
    {id:'shield_reflect',name:'Shield Reflect',max:10,group:'Defense',req:[['guard',5]]},
    {id:'holy_cross',name:'Holy Cross',max:10,group:'Spear',req:[['faith',7]]},
    {id:'grand_cross',name:'Grand Cross',max:10,group:'Holy',req:[['faith',10],['holy_cross',6]]},
    {id:'sacrifice',name:'Sacrifice',max:5,group:'Transcendent',req:[['faith',10]]},
    {id:'defending_aura',name:'Defending Aura',max:5,group:'Defense',req:[['guard',5]]},
    {id:'spear_quicken',name:'Spear Quicken',max:10,group:'Spear',req:[['two_hand_spear_mastery',5]]}
  ],
  'assassin': [
    {id:'right_hand_mastery',name:'Right Hand Mastery',max:5,group:'Katar',req:[]},
    {id:'left_hand_mastery',name:'Left Hand Mastery',max:5,group:'Dual Dagger/Katar',req:[['right_hand_mastery',3]]},
    {id:'katar_mastery',name:'Katar Mastery',max:10,group:'Katar',req:[]},
    {id:'sonic_blow',name:'Sonic Blow',max:10,group:'Katar',req:[['katar_mastery',4]]},
    {id:'grimtooth',name:'Grimtooth',max:5,group:'Katar',req:[['katar_mastery',5]]},
    {id:'venom_spreader',name:'Venom Spreader',max:10,group:'Poison',req:[['venom_dust',5]]},
    {id:'venom_dust',name:'Venom Dust',max:10,group:'Poison',req:[['envenom',1]]},
    {id:'enchant_poison',name:'Enchant Poison',max:10,group:'Poison',req:[['envenom',3]]}
  ],
  'assassin_cross': [
    {id:'sonic_blow',name:'Sonic Blow',max:10,group:'Katar',req:[['katar_mastery',4]]},
    {id:'enchant_deadly_poison',name:'Enchant Deadly Poison',max:5,group:'EDP',req:[['poison_react',1]]},
    {id:'create_deadly_poison',name:'Create Deadly Poison',max:1,group:'Creation',req:[]},
    {id:'soul_destroyer',name:'Soul Destroyer',max:10,group:'Hybrid',req:[['sonic_acceleration',1]]},
    {id:'meteor_assault',name:'Meteor Assault',max:10,group:'Katar',req:[['sonic_blow',5],['grimtooth',3]]},
    {id:'advanced_katar_research',name:'Advanced Katar Research',max:5,group:'Passive',req:[]},
    {id:'venom_impress',name:'Venom Impress',max:5,group:'Poison',req:[]}
  ],
  'rogue': [
    {id:'sword_mastery',name:'Sword Mastery',max:10,group:'Sword',req:[]},
    {id:'dagger_throwing',name:'Dagger Throwing Practice',max:10,group:'Dagger',req:[]},
    {id:'snatcher',name:'Snatcher',max:10,group:'Utility',req:[]},
    {id:'steal_coin',name:'Steal Coin',max:10,group:'Utility',req:[['snatcher',4]]},
    {id:'back_stab',name:'Back Stab',max:10,group:'Dagger',req:[]},
    {id:'plagiarism',name:'Plagiarism',max:10,group:'Copy',req:[]},
    {id:'preserve',name:'Preserve',max:1,group:'Copy',req:[['plagiarism',10]]},
    {id:'tunnel_drive',name:'Tunnel Drive',max:5,group:'Utility',req:[['cloaking',5]]}
  ],
  'stalker': [
    {id:'plagiarism',name:'Plagiarism',max:10,group:'Copy',req:[]},
    {id:'preserve',name:'Preserve',max:1,group:'Copy',req:[['plagiarism',10]]},
    {id:'back_stab',name:'Back Stab',max:10,group:'Dagger',req:[]},
    {id:'bowling_bash',name:'Bowling Bash',max:10,group:'Copied Skill',req:[]},
    {id:'triple_attack',name:'Triple Attack',max:10,group:'Dagger',req:[]},
    {id:'tunnel_drive',name:'Tunnel Drive',max:5,group:'Utility',req:[]},
    {id:'reject_sword',name:'Reject Sword',max:5,group:'Defense',req:[]},
    {id:'full_strip',name:'Full Strip',max:5,group:'Utility',req:[['divest_armor',5],['divest_weapon',5],['divest_shield',5],['divest_helm',5]]}
  ],
  'hunter': [
    {id:'owl_eye',name:"Owl's Eye",max:10,group:'Passive',req:[]},
    {id:'vulture_eye',name:'Vulture Eye',max:10,group:'Passive',req:[['owl_eye',3]]},
    {id:'blitz_beat',name:'Blitz Beat',max:5,group:'Falcon',req:[['beast_bane',3]]},
    {id:'steel_crow',name:'Steel Crow',max:10,group:'Falcon',req:[['blitz_beat',5]]},
    {id:'beast_bane',name:'Beast Bane',max:10,group:'Passive',req:[]},
    {id:'ankle_snare',name:'Ankle Snare',max:5,group:'Trap',req:[]},
    {id:'blast_mine',name:'Blast Mine',max:5,group:'Trap',req:[['ankle_snare',1]]}
  ],
  'sniper': [
    {id:'true_sight',name:'True Sight',max:10,group:'Buff',req:[]},
    {id:'sharp_shooting',name:'Sharp Shooting',max:5,group:'AoE',req:[]},
    {id:'falcon_assault',name:'Falcon Assault',max:5,group:'Falcon',req:[['blitz_beat',5]]},
    {id:'wind_walk',name:'Wind Walk',max:10,group:'Buff',req:[]},
    {id:'focused_arrow_strike',name:'Focused Arrow Strike',max:5,group:'Special',req:[['sharp_shooting',3]]},
    {id:'camouflage',name:'Camouflage',max:5,group:'Utility',req:[]}
  ]
};
