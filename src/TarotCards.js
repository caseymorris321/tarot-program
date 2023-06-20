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

];

export default tarotCards;