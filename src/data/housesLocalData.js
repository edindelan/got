import house1 from '../assets/images/houses/house1.png';
import house2 from '../assets/images/houses/house2.png';
import house3 from '../assets/images/houses/house3.png';
import house4 from '../assets/images/houses/house4.png';
import house5 from '../assets/images/houses/house5.png';
import house6 from '../assets/images/houses/house6.png';
import house7 from '../assets/images/houses/house7.png';
import house8 from '../assets/images/houses/house8.png';

export default [
  {
    id: '1',
    image: house1,
    name: 'Stark',
    backgroundColor: '#040612',
    description: 'House Stark of Winterfell is a Great House of Westeros and the royal house of the Kingdom of the North. They rule over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and early on in Daenerys Targaryen\'s war for Westeros, the leaders of House Stark ruled over the region as the Kings in the North.',
    mapPosition: {
      x: 1929,
      y: 1536,
    },
    currentLordData: {name: "Queen Sansa Stark"},
    region: "The North",
    coatOfArms: "A grey direwolf on a white field",
    words: "Winter Is Coming",
    titles: ['Kings in the North', 'Lords of Winterfell',
      'Lords Paramount of the North', 'Wardens of the North'],
    founded: "Over 8,000 years",
    swornMembersCount: 88
  },
  {
    id: '2',
    image: house2,
    name: 'Lannister',
    backgroundColor: '#4B0005',
    description: 'House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and one of its oldest dynasties. It was also the royal house of the Seven Kingdoms following the extinction of House Baratheon of King\'s Landing, which had been their puppet house during the War of the Five Kings, for a brief stint of time until House Targaryen took back the Iron Throne in Daenerys Targaryen\'s war for Westeros.',
    mapPosition: {
      x: 736,
      y: 1667,
    },
    currentLordData: {name: "Cersei Lannister"},
    region: "The Westerlands",
    coatOfArms: "A gold lion, on a crimson field(Gules, a lion or)",
    words: "Hear Me Roar!",
    titles: ['King of the Rock', 'Lord of Casterly Rock',
      'Shield of Lannisport', 'Warden of the West'],
    founded: "Age of Heroes",
    swornMembersCount: 79
  },
  {
    id: '3',
    image: house3,
    name: 'Baratheon',
    backgroundColor: '#968401',
    description: 'House Baratheon of Storm\'s End is a Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister took control of the throne, though lost it to House Targaryen. House Baratheon traditionally rules the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm\'s End.',
    mapPosition: {
      x: 2379,
      y: 2151,
    },
    currentLordData: {name: "Stannis Baratheon"},
    region: "The Crownlands",
    coatOfArms: "Or, a heart gules enflamed proper charged with a stag's head sable crowned of the field",
    words: "",
    titles: ['Lord of Dragonstone', 'King of Westeros'],
    founded: "284 AC",
    swornMembersCount: 27
  },
  {
    id: '4',
    image: house4,
    name: 'Arryn',
    backgroundColor: '#142e4e',
    description: 'House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Defenders of the Vale and Wardens of the East under the Targaryen, Baratheon, and Lannister dynasties. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with Yohn Royce holding actual power over the house.',
    mapPosition: {
      x: 3386,
      y: 1282,
    },
    currentLordData: {name: "Robert Arryn"},
    region: "The Vale",
    coatOfArms: "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
    words: "As High as Honor",
    titles: ['King of Mountain and Vale', 'Lord of the Eyrie', 'Defender of the Vale', 'Warden of the East'],
    founded: "Coming of the Andals",
    swornMembersCount: 24
  },
  {
    id: '5',
    image: house5,
    name: 'Tully',
    backgroundColor: '#094816',
    description: 'House Tully of Riverrun is a Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."',
    mapPosition: {
      x: 3358,
      y: 2068,
    },
    currentLordData: {name: "Edmure Tully"},
    region: "The Riverlands",
    coatOfArms: "A leaping silver trout on a field of blue and mud red(Paly wavy azure and gules, a trout embowed argent)",
    words: "Family, Duty, Honor",
    titles: [],
    founded: "'Lord of Riverrun', 'Lord Paramount of the Trident'",
    swornMembersCount: 17
  },
  {
    id: '6',
    image: house6,
    name: 'Martell',
    backgroundColor: '#8c4d20',
    description: 'House Martell of Sunspear is one of the Great Houses of Westeros. It rules the peninsula of Dorne in the far south of the continent from their castle Sunspear. Though loyal to the Iron Throne, the Martells were never conquered by the Targaryens and pursued a more isolated role in wider political events since Robert\'s Rebellion.',
    mapPosition: {
      x: 2000,
      y: 1900,
    },
    currentLordData: {name: "Prince Martell"},
    region: "Dorne",
    coatOfArms: "A red sun pierced by a gold spear, on an orange field. Formerly just a gold spear on an orange field",
    words: "Unbowed, Unbent, Unbroken",
    titles: ['Princes of Dorne', 'Lords of Sunspear'],
    founded: "",
    swornMembersCount: 23
  },
  {
    id: '7',
    image: house7,
    name: 'Targaryen',
    backgroundColor: '#4a2a25',
    description: 'House Targaryen of Dragonstone is an exiled Great House of Westeros and the former royal house of the Seven Kingdoms. House Targaryen conquered and unified the realm before it was deposed during Robert\'s Rebellion and House Baratheon replaced it as the new royal House. The two surviving Targaryens, Viserys and Daenerys, fled into exile to the Free Cities of Essos across the Narrow Sea. House Lannister replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor, but the realm was reconquered by Daenerys Targaryen, retaking the Iron Throne following the Battle of King\'s Landing.',
    mapPosition: {
      x: 950,
      y: 550,
    },
    currentLordData: {name: "Daenerys Targaryen"},
    region: "The Crownlands",
    coatOfArms: "Sable, a dragon thrice-headed gules",
    words: "Fire and Blood",
    titles: ['King of the Andals', 'The Rhoynar and the First Men',
      'Lord of the Seven Kingdoms', 'Prince of Summerhall'],
    founded: "House Targaryen: >114 BCHouse Targaryen of King's Landing:1 AC",
    swornMembersCount: 101
  },
  {
    id: '8',
    image: house8,
    name: 'Tyrell',
    backgroundColor: '#4f633f',
    description: 'House Tyrell of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, and heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest.',
    mapPosition: {
      x: 2500,
      y: 1500,
    },
    currentLordData: {name: "Mace Tyrell"},
    region: "The Reach",
    coatOfArms: "Vert, a rose Or",
    words: "Growing Strong",
    titles: ['Lord of Highgarden', 'Defender of the Marches', 'High Marshal of the Reach',
      'Warden of the South', 'Lord Paramount of the Mander', 'High Steward of Highgarden'],
    founded: "",
    swornMembersCount: 44
  },
];
