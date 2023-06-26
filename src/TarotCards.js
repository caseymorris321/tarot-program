import TheMagician from './images/TheMagician.png';
import TheFool from './images/TheFool.png'; 
import TheHighPriestess from './images/TheHighPriestess.png';
import TheEmpress from './images/TheEmpress.png';
import TheEmperor from './images/TheEmperor.png';
import TheHierophant from './images/TheHierophant.png';
import TheLovers from './images/TheLovers.png';
import TheChariot from './images/TheChariot.png';
import Strength from './images/Strength.png';
import TheHermit from './images/TheHermit.png';
import TheWheelOfFortune from './images/TheWheelOfFortune.png'
import Justice from './images/Justice.png'
import TheHangedMan from './images/TheHangedMan.png'
import Death from './images/Death.png'
import Temperance from './images/Temperance.png'
import TheDevil from './images/TheDevil.png'
import TheTower from './images/TheTower.png'
import TheStar from './images/TheStar.png'
import TheMoon from './images/TheMoon.png'
import TheSun from './images/TheSun.png'
import Judgment from './images/Judgment.png'
import TheWorld from './images/TheWorld.png'
import AceOfWands from './images/AceOfWands.png'
import TwoOfWands from './images/TwoOfWands.png'
import ThreeOfWands from './images/ThreeOfWands.png'
import FourOfWands from './images/FourOfWands.png'
import FiveOfWands from './images/FiveOfWands.png'
import SixOfWands from './images/SixOfWands.png'
import SevenOfWands from './images/SevenOfWands.png'
import EightOfWands from './images/EightOfWands.png'
import NineOfWands from './images/NineOfWands.png'
import TenOfWands from './images/TenOfWands.png'
import PageOfWands from './images/PageOfWands.png'
import KnightOfWands from './images/KnightOfWands.png'
import QueenOfWands from './images/QueenOfWands.png'
import KingOfWands from './images/KingOfWands.png'
import AceOfCups from './images/AceOfCups.png'
import TwoOfCups from './images/TwoOfCups.png'
import ThreeOfCups from './images/ThreeOfCups.png'
import FourOfCups from './images/FourOfCups.png'
import FiveOfCups from './images/FiveOfCups.png'
import SixOfCups from './images/SixOfCups.png'
import SevenOfCups from './images/SevenOfCups.png'
import EightOfCups from './images/EightOfCups.png'
import NineOfCups from './images/NineOfCups.png'
import TenOfCups from './images/TenOfCups.png'
import PageOfCups from './images/PageOfCups.png'
import KnightOfCups from './images/KnightOfCups.png'
import QueenOfCups from './images/QueenOfCups.png'
import KingOfCups from './images/KingOfCups.png'
// import AceOfSwords from './images/AceOfSwords.png'
// import TwoOfSwords from './images/TwoOfSwords.png'
// import ThreeOfSwords from './images/ThreeOfSwords.png'
// import FourOfSwords from './images/FourOfSwords.png'
// import FiveOfSwords from './images/FiveOfSwords.png'
// import SixOfSwords from './images/SixOfSwords.png'
// import SevenOfSwords from './images/SevenOfSwords.png'
// import EightOfSwords from './images/EightOfSwords.png'
// import NineOfSwords from './images/NineOfSwords.png'
// import TenOfSwords from './images/TenOfSwords.png'
// import PageOfSwords from './images/PageOfSwords.png'
// import KnightOfSwords from './images/KnightOfSwords.png'
// import QueenOfSwords from './images/QueenOfSwords.png'
// import KingOfSwords from './images/KingOfSwords.png'
// import AceOfPentacles from './images/AceOfPentalces.png'
// import TwoOfPentacles from './images/TwoOfPentalces.png'
// import ThreeOfPentacles from './images/ThreeOfPentalces.png'
// import FourOfPentacles from './images/FourOfPentalces.png'
// import FiveOfPentacles from './images/FiveOfPentalces.png'
// import SixOfPentacles from './images/SixOfPentalces.png'
// import SevenOfPentacles from './images/SevenOfPentalces.png'
// import EightOfPentacles from './images/EightOfPentalces.png'
// import NineOfPentacles from './images/NineOfPentalces.png'
// import TenOfPentacles from './images/TenOfPentalces.png'
// import PageOfPentacles from './images/PageOfPentalces.png'
// import KnightOfPentacles from './images/KnightOfPentalces.png'
// import QueenOfPentacles from './images/QueenOfPentalces.png'
// import KingOfPentacles from './images/KingOfPentalces.png'

const tarotCards = [
    {
        name: 'The Fool',
        description: 'The Fool represents new beginnings, spontaneity, and innocence. It signifies stepping into the unknown with an open mind and embracing life\'s journey.',
        keywords: 'New beginnings, Spontaneity, Innocence',
        image: TheFool
    },
    {
        name: 'The Magician',
        description: 'The Magician symbolizes manifestation, power, and creative energy. It suggests harnessing your skills and resources to create the reality you desire.',
        keywords: 'Manifestation, Power, Creative energy',
        image: TheMagician
    },
    {
        name: 'The High Priestess',
        description: 'The High Priestess represents a gateway to the subconscious and the spiritual realms, inviting you to explore your inner world and trust your intuition.',
        keywords: 'Intuition, Mystery, Feminine Energy',
        image: TheHighPriestess
    },
    {
        name: 'The Empress',
        description: 'The Empress symbolizes fertility, abundance, nurturing, and the creative force.',
        keywords: 'Fertility, Nourishment, Connection with Nature and the Earth',
        image: TheEmpress
    },
    {
        name: 'The Emperor',
        description: 'The Emperor symbolizes authority, structure, and stability, embodying the qualities of leadership and the ability to create a solid foundation.',
        keywords: 'Authority, Structure, Leadership',
        image: TheEmperor
    },
    {
        name: 'The Hierophant',
        description: 'The Hierophant symbolizes tradition, spirituality, and the pursuit of higher knowledge, representing a connection to established belief systems and the guidance of spiritual teachers.',
        keywords: 'Tradition, Spirituality, Guidance',
        image: TheHierophant
    },
    {
        name: 'The Lovers',
        description: 'The Lovers symbolizes deep connections, love, harmony, and the choices we make in relationships, representing the union of opposites and the power of choice in matters of the heart.',
        keywords: 'Love, Harmony, Choice',
        image: TheLovers
    },
    {
        name: 'The Chariot',
        description: 'The Chariot symbolizes determination, willpower, and the ability to overcome challenges, representing the victorious pursuit of goals through focused action and self-control.',
        keywords: 'Determination, Willpower, Victory',
        image: TheChariot
    },
    {
        name: 'Strength',
        description: 'Strength symbolizes inner courage, resilience, and the power to overcome challenges by harnessing one\'s inner strength and gentle persuasion rather than brute force.',
        keywords: 'Inner Strength, Patience, Gentle Power',
        image: Strength
    },
    {
        name: 'The Hermit',
        description: 'The Hermit symbolizes introspection, solitude, and inner guidance.',
        keywords: 'Isolation, Introspection, Wisdom',
        image: TheHermit
    },
    {
        name: 'Wheel of Fortune',
        description: 'The Wheel of Fortune represents the ever-changing cycles of life and destiny.',
        keywords: 'Destiny, Change, Luck',
        image: TheWheelOfFortune
    },
    {
        name: 'Justice',
        description: 'Justice represents truth, fairness, and the consequences of one\'s actions.',
        keywords: 'Balance, Fairness, Impartiality',
        image: Justice
    },
    {
        name: 'The Hanged Man',
        description: 'The Hanged Man represents surrender, suspension, and gaining new perspectives through self-reflection and sacrifice.',
        keywords: 'Surrender, Introspection, Enlightenment',
        image: TheHangedMan
    },
    {
        name: 'Death',
        description: 'The Death tarot card represents profound transformation, the inevitability of change, and the end of one chapter leading to the beginning of another.',
        keywords: 'Transformation, Rebirth, Transition',
        image: Death
    },
    {
        name: 'Temperance',
        description: 'Temperance represents the harmonious blending of opposites, moderation, and finding balance amidst diversity and conflicting forces.',
        keywords: 'Balance, Harmony, Integration',
        image: Temperance
    },
    {
        name: 'The Devil',
        description: 'The Devil represents the forces of temptation, bondage, and the exploration of our darker impulses and desires.',
        keywords: 'Temptation, Bondage, Liberation.',
        image: TheDevil
    },
    {
        name: 'The Tower',
        description: 'The Tower represents sudden and disruptive change, destruction of old structures, and the opportunity for profound personal growth and transformation.',
        keywords: 'Crisis, Upheaval, Revelation.',
        image: TheTower
    },
    {
        name: 'The Star',
        description: 'The Star represents hope, inspiration, and spiritual guidance.',
        keywords: 'Hope, Inspiration, Guidance.',
        image: TheStar
    },
    {
        name: 'The Moon',
        description: 'The Moon represents intuition, subconsciousness, and the exploration of the mysterious realms within.',
        keywords: 'Mystery, Illusion, Subconscious',
        image: TheMoon
    },
    {
        name: 'The Sun',
        description: 'The Sun represents radiant vitality, joy, and enlightenment, symbolizing the power of optimism and the triumph of light over darkness.',
        keywords: 'Illumination, Vitality, Joy',
        image: TheSun
    },
    {
        name: 'Judgement',
        description: 'Judgement represents a spiritual awakening and transformation, symbolizing rebirth, introspection, and divine judgment.',
        keywords: 'Rebirth, Redemption, Awakening',
        image: Judgment
    },
    {
        name: 'The World',
        description: 'The World represents completion, wholeness, and the harmonious integration of all aspects of life into a unified whole.',
        keywords: 'Completion, Unity, Fulfillment',
        image: TheWorld
    },
    {
        name: 'Ace of Wands',
        description: 'Ace of Wands represents the spark of inspiration and potential for new beginnings in creative endeavors and passionate pursuits.',
        keywords: 'Inspiration, Potential, New beginnings',
        image: AceOfWands
    },
    {
        name: 'Two of Wands',
        description: 'Two of Wands represents a pivotal moment of contemplation and decision-making, as one stands at the precipice of possibilities, weighing options and envisioning future endeavors.',
        keywords: 'Contemplation, Decision-making, Possibilities',
        image: TwoOfWands
    },
    {
        name: 'Three of Wands',
        description: 'Three of Wands signifies a moment of anticipation and progress, as one looks out onto the horizon, ready to embark on a journey of exploration and expansion, fueled by foresight and ambition.',
        keywords: 'Anticipation, Progress, Exploration',
        image: ThreeOfWands
    },
    {
        name: 'Four of Wands',
        description: 'Four of Wands signifies a joyous celebration of stability and harmony, where individuals come together in unity to honor accomplishments and create an atmosphere of blissful contentment.',
        keywords: 'Celebration, Stability, Unity',
        image: FourOfWands
    },
    {
        name: 'Five of Wands',
        description: 'Five of Wands represents a dynamic and spirited clash of energies, as individuals engage in lively competition, each asserting their ideas and passions, creating a vibrant and challenging environment of growth and self-discovery.',
        keywords: 'Competition, Energy, Growth',
        image: FiveOfWands
    },
    {
        name: 'Six of Wands',
        description: 'Six of Wands represents victory, recognition, and celebration of success.',
        keywords: 'Victory, Recognition, Celebration',
        image: SixOfWands
    },
    {
        name: 'Seven of Wands',
        description: 'Seven of Wands represents courageously defending one\'s position against challenges and opposition.',
        keywords: 'Courage, Defiance, Opposition',
        image: SevenOfWands
    },
    {
        name: 'Eight of Wands',
        description: 'Eight of Wands represents rapid action, quick developments, and the swift arrival of change or communication in various aspects of life.',
        keywords: 'Swift, Progress, Communication',
        image: EightOfWands
    },
    {
        name: 'Nine of Wands',
        description: ' Nine of Wands represents resilience, endurance, and the strength to persist in the face of challenges and obstacles.',
        keywords: 'Resilience, Perseverance, Endurance',
        image: NineOfWands
    },
    {
        name: 'Ten of Wands',
        description: 'Ten of Wands represents the burden of responsibilities, the feeling of being overwhelmed, and the need to find balance and release from the weight of one\'s obligations.',
        keywords: 'Burden, Overwhelm, Release',
        image: TenOfWands
    },
    {
        name: 'Page of Wands',
        description: 'Page of Wands represents the spark of inspiration, the emergence of creative potential, and the enthusiastic pursuit of new ventures and opportunities.',
        keywords: 'Inspiration, Potential, Exploration',
        image: PageOfWands
    },
    {
        name: 'Knight of Wands',
        description: 'Knight of Wands represents passion, action, and a bold and adventurous spirit, as one fearlessly charges forward towards their goals and desires.',
        keywords: 'Passion, Action, Adventure',
        image: KnightOfWands
    },
    {
        name: 'Queen of Wands',
        description: 'Queen of Wands represents a charismatic, confident, and passionate woman who is a natural leader and radiates creativity and enthusiasm in all aspects of her life.',
        keywords: 'Charismatic, Passionate, Confident',
        image: QueenOfWands
    },
    {
        name: 'King of Wands',
        description: 'King of Wands represents a visionary and dynamic leader who exudes confidence, takes decisive action, and inspires others through his strong will and creative pursuits.',
        keywords: 'Visionary, Assertiveness, Ambition',
        image: KingOfWands
    },
    {
        name: 'Ace of Cups',
        description: 'Ace of Cups symbolizes new beginnings, emotional fulfillment, and the potential for love and deep connections in one\'s life',
        keywords: 'Love, Emotions, New Beginnings',
        image: AceOfCups
    },
    {
        name: 'Two of Cups',
        description: 'Two of Cups represents harmony, balance, and deep emotional connections between two individuals.',
        keywords: 'Love, Partnership, Unity',
        image: TwoOfCups
    },
    {
        name: 'Three of Cups',
        description: 'Three of Cups represents friendship, joyous gatherings, and harmonious relationships.',
        keywords: 'Friendship, Celebration, Unity',
        image: ThreeOfCups
    },
    {
        name: 'Four of Cups',
        description: 'Four of Cups represents introspection and contemplation, as the figure in the card appears detached and uninterested in the opportunities presented before them',
        keywords: 'Introspection, Detachment, Contemplation',
        image: FourOfCups
    },
    {
        name: 'Five of Cups',
        description: 'Five of Cups represents a person standing before three spilled cups with a sense of sorrow and missed opportunities, while two cups remain upright in the background, offering a glimmer of hope and potential for emotional healing.',
        keywords: 'Loss, Disappointment, Renewal',
        image: FiveOfCups
    },
    {
        name: 'Six of Cups',
        description: 'Six of Cups depicts a scene of nostalgic innocence and sweet memories as two individuals exchange cups, symbolizing a sense of joy, reunion, and a fond remembrance of the past.',
        keywords: 'Nostalgia, Innocence, Reunion',
        image: SixOfCups
    },
    {
        name: 'Seven of Cups',
        description: 'Seven of Cups portrays a figure surrounded by seven floating cups, each containing a different illusion or fantasy, symbolizing choices, dreams, and the need for discernment amidst various tempting possibilities.',
        keywords: 'Choices, Illusions, Discernment',
        image: SevenOfCups
    },
    {
        name: 'Eight of Cups',
        description: ' Eight of Cups portrays a figure walking away from a stack of cups, signifying a journey of emotional detachment, soul-searching, and the pursuit of a higher purpose or spiritual fulfillment.',
        keywords: 'Detachment, Introspection, Quest',
        image: EightOfCups
    },
    {
        name: 'Nine of Cups',
        description: 'Nine of Cups represents a person sitting contentedly with nine cups arranged behind them, symbolizing fulfillment, emotional satisfaction, and a sense of accomplishment or wish fulfillment in various areas of life.',
        keywords: 'Fulfillment, Satisfaction, Abundance',
        image: NineOfCups
    },
    {
        name: 'Ten of Cups',
        description: 'Ten of Cups portrays a harmonious family scene with a rainbow overhead, symbolizing domestic bliss, emotional fulfillment, and the attainment of lasting happiness and harmonious relationships.',
        keywords: 'Fulfillment, Harmony, Joy',
        image: TenOfCups
    },
    {
        name: 'Page of Cups',
        description: 'Page of Cups depicts a young person holding a cup with a fish emerging from it, symbolizing emotional openness, intuition, and the emergence of creative and imaginative endeavors.',
        keywords: 'Emotional openness, Intuition, Creativity',
        image: PageOfCups
    },
    {
        name: 'Knight of Cups',
        description: 'Knight of Cups symbolizes romantic pursuits, emotional sensitivity, intuition, and the quest for creative inspiration and meaningful connections.',
        keywords: 'Romance, Chivalry, Emotional depth',
        image: KnightOfCups
    },
    {
        name: 'Queen of Cups',
        description: 'Queen of Cups represents emotional intelligence, empathy, intuition, and the embodiment of feminine nurturing energy.',
        keywords: 'Empathy, Intuition, Nurturing',
        image: QueenOfCups
    },
    {
        name: 'King of Cups',
        description: 'King of Cups symbolizes emotional intelligence, compassion, mastery of emotions, wisdom, and the ability to balance logic with sensitivity.',
        keywords: 'Compassion, Wisdom, Emotional mastery',
        image: KingOfCups
    },
    {
        name: 'Ace of Swords',
        description: 'Ace of Swords represents the emergence of clarity and decisive action in one\'s life.',
        keywords: 'Clarity, Emergence, Decisive action',
        image: ''
    },
    {
        name: 'Two of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Three of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Four of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Five of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Six of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Seven of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Eight of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Nine of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Ten of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Page of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Knight of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Queen of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'King of Swords',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Ace of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Two of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Three of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Four of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Five of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Six of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Seven of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Eight of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Nine of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Ten of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Page of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Knight of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'Queen of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },
    {
        name: 'King of Pentacles',
        description: '',
        keywords: '',
        image: ''
    },

];
export default tarotCards;