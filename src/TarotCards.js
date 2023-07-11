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
import AceOfSwords from './images/AceOfSwords.png'
import TwoOfSwords from './images/TwoOfSwords.png'
import ThreeOfSwords from './images/ThreeOfSwords.png'
import FourOfSwords from './images/FourOfSwords.png'
import FiveOfSwords from './images/FiveOfSwords.png'
import SixOfSwords from './images/SixOfSwords.png'
import SevenOfSwords from './images/SevenOfSwords.png'
import EightOfSwords from './images/EightOfSwords.png'
import NineOfSwords from './images/NineOfSwords.png'
import TenOfSwords from './images/TenOfSwords.png'
import PageOfSwords from './images/PageOfSwords.png'
import KnightOfSwords from './images/KnightOfSwords.png'
import QueenOfSwords from './images/QueenOfSwords.png'
import KingOfSwords from './images/KingOfSwords.png'
import AceOfPentacles from './images/AceOfPentacles.png'
import TwoOfPentacles from './images/TwoOfPentacles.png'
import ThreeOfPentacles from './images/ThreeOfPentacles.png'
import FourOfPentacles from './images/FourOfPentacles.png'
import FiveOfPentacles from './images/FiveOfPentacles.png'
import SixOfPentacles from './images/SixOfPentacles.png'
import SevenOfPentacles from './images/SevenOfPentacles.png'
import EightOfPentacles from './images/EightOfPentacles.png'
import NineOfPentacles from './images/NineOfPentacles.png'
import TenOfPentacles from './images/TenOfPentacles.png'
import PageOfPentacles from './images/PageOfPentacles.png'
import KnightOfPentacles from './images/KnightOfPentacles.png'
import QueenOfPentacles from './images/QueenOfPentacles.png'
import KingOfPentacles from './images/KingOfPentacles.png'

const tarotCards = [
    {
        name: 'The Fool',
        description: 'The Fool represents new beginnings, spontaneity, and innocence. It signifies stepping into the unknown with an open mind and embracing life\'s journey.',
        keywords: 'New beginnings, Spontaneity, Innocence',
        reversedDescription: 'The Fool Reversed represents a lack of spontaneity and a missed opportunity for new beginnings.',
        reversedKeywords: 'Hesitation, Stagnation, Caution',
        image: TheFool
    },
    {
        name: 'The Magician',
        description: 'The Magician symbolizes manifestation, power, and creative energy. It suggests harnessing your skills and resources to create the reality you desire.',
        keywords: 'Manifestation, Power, Creative energy',
        reversedDescription: 'The Magician reversed suggests a lack of confidence or focus, indicating a need to harness inner resources and overcome self-doubt.',
        reversedKeywords: 'Hindered progress, Inadequacy, Misdirection',
        image: TheMagician
    },
    {
        name: 'The High Priestess',
        description: 'The High Priestess represents a gateway to the subconscious and the spiritual realms, inviting you to explore your inner world and trust your intuition.',
        keywords: 'Intuition, Mystery, Feminine Energy',
        reversedDescription: 'The High Priestess reversed signifies a loss of intuition or inner wisdom, urging the seeker to seek clarity and reconnect with their inner guidance.',
        reversedKeywords: 'Blocked intuition, Spiritual disconnect, Seek inner guidance',
        image: TheHighPriestess
    },
    {
        name: 'The Empress',
        description: 'The Empress symbolizes fertility, abundance, nurturing, and the creative force.',
        keywords: 'Fertility, Nourishment, Connection with Nature and the Earth',
        reversedDescription: 'The Empress reversed suggests a lack of nurturing or creative energy, calling for the need to replenish and care for oneself before extending that energy to others.',
        reversedKeywords: 'Lack of nurturing, Creative energy depleted, Self-care',
        image: TheEmpress
    },
    {
        name: 'The Emperor',
        description: 'The Emperor symbolizes authority, structure, and stability, embodying the qualities of leadership and the ability to create a solid foundation.',
        keywords: 'Authority, Structure, Leadership',
        reversedDescription: 'The Emperor reversed signifies a loss of authority or control, urging the seeker to find balance between assertiveness and flexibility in order to regain stability and leadership.',
        reversedKeywords: 'Loss of authority, Lack of control, Balance and flexibility',
        image: TheEmperor
    },
    {
        name: 'The Hierophant',
        description: 'The Hierophant symbolizes tradition, spirituality, and the pursuit of higher knowledge, representing a connection to established belief systems and the guidance of spiritual teachers.',
        keywords: 'Tradition, Spirituality, Guidance',
        reversedDescription: 'The Hierophant reversed suggests a rebellion against tradition or established beliefs, urging the seeker to explore alternative perspectives and find their own spiritual path.',
        reversedKeywords: 'Rebellion, Alternative perspectives, Spiritual exploration',
        image: TheHierophant
    },
    {
        name: 'The Lovers',
        description: 'The Lovers symbolizes deep connections, love, harmony, and the choices we make in relationships, representing the union of opposites and the power of choice in matters of the heart.',
        keywords: 'Love, Harmony, Choice',
        reversedDescription: 'The Lovers reversed indicates disharmony or a lack of alignment in relationships, emphasizing the need for introspection and open communication to restore balance and connection.',
        reversedKeywords: 'Disharmony, Lack of alignment, Introspection',
        image: TheLovers
    },
    {
        name: 'The Chariot',
        description: 'The Chariot symbolizes determination, willpower, and the ability to overcome challenges, representing the victorious pursuit of goals through focused action and self-control.',
        keywords: 'Determination, Willpower, Victory',
        reversedDescription: 'The Chariot reversed signifies a loss of control or direction, urging the seeker to regain focus, overcome obstacles, and steer their life with determination and purpose.',
        reversedKeywords: 'Unfocused, Hindered progress, Reclaim determination',
        image: TheChariot
    },
    {
        name: 'Strength',
        description: 'Strength symbolizes inner courage, resilience, and the power to overcome challenges by harnessing one\'s inner strength and gentle persuasion rather than brute force.',
        keywords: 'Inner Strength, Patience, Gentle Power',
        reversedDescription: 'Strength reversed suggests a lack of inner strength or self-control, reminding the seeker to find balance, overcome self-doubt, and tap into their resilience to face challenges with confidence.',
        reversedKeywords: 'Lack of inner strength, Self-control challenged, Resilience and confidence',
        image: Strength
    },
    {
        name: 'The Hermit',
        description: 'The Hermit symbolizes introspection, solitude, and inner guidance.',
        keywords: 'Isolation, Introspection, Wisdom',
        reversedDescription: 'The Hermit reversed signifies a reluctance to seek solitude and introspection, urging the seeker to embrace moments of solitude and inner reflection in order to find guidance and self-discovery.',
        reversedKeywords: 'Reluctance, Avoiding solitude, Inner reflection',
        image: TheHermit
    },
    {
        name: 'Wheel of Fortune',
        description: 'The Wheel of Fortune represents the ever-changing cycles of life and destiny.',
        keywords: 'Destiny, Change, Luck',
        reversedDescription: 'Wheel of Fortune reversed indicates a period of stagnation or missed opportunities, urging the seeker to embrace change, take proactive steps, and seize the moment to alter their destiny.',
        reversedKeywords: 'Stagnation, Missed opportunities, Embrace change',
        image: TheWheelOfFortune
    },
    {
        name: 'Justice',
        description: 'Justice represents truth, fairness, and the consequences of one\'s actions.',
        keywords: 'Balance, Fairness, Impartiality',
        reversedDescription: 'Justice reversed suggests a lack of fairness or imbalance, urging the seeker to seek inner harmony, make amends, and strive for equality in order to restore justice in their life.',
        reversedKeywords: 'Lack of fairness, Imbalance, Inner harmony',
        image: Justice
    },
    {
        name: 'The Hanged Man',
        description: 'The Hanged Man represents surrender, suspension, and gaining new perspectives through self-reflection and sacrifice.',
        keywords: 'Surrender, Introspection, Enlightenment',
        reversedDescription: 'The Hanged Man reversed signifies resistance to change or a refusal to let go, urging the seeker to embrace surrender, release attachments, and gain a new perspective to find enlightenment and growth.',
        reversedKeywords: 'Resistance to change, Refusal to let go, Surrender and enlightenment',
        image: TheHangedMan
    },
    {
        name: 'Death',
        description: 'The Death tarot card represents profound transformation, the inevitability of change, and the end of one chapter leading to the beginning of another.',
        keywords: 'Transformation, Rebirth, Transition',
        reversedDescription: 'Death reversed suggests resistance to change or an inability to let go of the past, urging the seeker to embrace transformation, release attachments, and allow new beginnings to unfold.',
        reversedKeywords: 'Resistance to change, Inability to let go, Transformation and new beginnings',
        image: Death
    },
    {
        name: 'Temperance',
        description: 'Temperance represents the harmonious blending of opposites, moderation, and finding balance amidst diversity and conflicting forces.',
        keywords: 'Balance, Harmony, Integration',
        reversedDescription: 'Temperance reversed indicates a lack of balance or moderation, urging the seeker to seek harmony, exercise patience, and practice self-control in order to find inner peace and restore equilibrium in their life.',
        reversedKeywords: 'Lack of balance, Impatience, Self-control and harmony',
        image: Temperance
    },
    {
        name: 'The Devil',
        description: 'The Devil represents the forces of temptation, bondage, and the exploration of our darker impulses and desires.',
        keywords: 'Temptation, Bondage, Liberation.',
        reversedDescription: 'The Devil reversed suggests liberation from negative influences or unhealthy attachments, urging the seeker to break free from self-destructive patterns and reclaim personal power for a renewed sense of freedom and empowerment.',
        reversedKeywords: 'Liberation, Breaking free, Personal empowerment',
        image: TheDevil
    },
    {
        name: 'The Tower',
        description: 'The Tower represents sudden and disruptive change, destruction of old structures, and the opportunity for profound personal growth and transformation.',
        keywords: 'Crisis, Upheaval, Revelation.',
        reversedDescription: 'The Tower reversed suggests a resistance to change or a fear of upheaval, urging the seeker to embrace transformation and release old structures in order to rebuild their life on a stronger foundation.',
        reversedKeywords: 'Resistance to change, Fear of upheaval, Transformation and rebuilding',
        image: TheTower
    },
    {
        name: 'The Star',
        description: 'The Star represents hope, inspiration, and spiritual guidance.',
        keywords: 'Hope, Inspiration, Guidance.',
        reversedDescription: 'The Star reversed indicates a loss of hope or a lack of faith, urging the seeker to rediscover optimism, trust in the universe, and believe in the potential for healing and renewal.',
        reversedKeywords: 'Loss of hope, Lack of faith, Healing and renewal',
        image: TheStar
    },
    {
        name: 'The Moon',
        description: 'The Moon represents intuition, subconsciousness, and the exploration of the mysterious realms within.',
        keywords: 'Mystery, Illusion, Subconscious',
        reversedDescription: 'The Moon reversed suggests confusion or deception, urging the seeker to seek clarity, confront fears, and trust their intuition to navigate through uncertain situations and uncover hidden truths.',
        reversedKeywords: 'Confusion, Deception, Clarity and intuition',
        image: TheMoon
    },
    {
        name: 'The Sun',
        description: 'The Sun represents radiant vitality, joy, and enlightenment, symbolizing the power of optimism and the triumph of light over darkness.',
        keywords: 'Illumination, Vitality, Joy',
        reversedDescription: 'The Sun reversed indicates a temporary loss of joy or vitality, urging the seeker to rediscover optimism, embrace inner radiance, and find moments of happiness even in challenging times.',
        reversedKeywords: 'Loss of joy, Diminished vitality, Rediscover optimism',
        image: TheSun
    },
    {
        name: 'Judgement',
        description: 'Judgement represents a spiritual awakening and transformation, symbolizing rebirth, introspection, and divine judgment.',
        keywords: 'Rebirth, Redemption, Awakening',
        reversedDescription: 'Judgement reversed suggests a reluctance to self-reflect or confront the truth, urging the seeker to embrace self-evaluation, release judgment, and seek forgiveness in order to experience personal transformation and inner freedom.',
        reversedKeywords: 'Reluctance to self-reflect, Release judgment, Personal transformation',
        image: Judgment
    },
    {
        name: 'The World',
        description: 'The World represents completion, wholeness, and the harmonious integration of all aspects of life into a unified whole.',
        keywords: 'Completion, Unity, Fulfillment',
        reversedDescription: 'The World reversed signifies a lack of completion or a feeling of being stuck, urging the seeker to seek closure, embrace change, and expand their horizons to achieve a sense of fulfillment and integration in their life.',
        reversedKeywords: 'Lack of completion, Feeling stuck, Closure and expansion',
        image: TheWorld
    },
    {
        name: 'Ace of Wands',
        description: 'Ace of Wands represents the spark of inspiration and potential for new beginnings in creative endeavors and passionate pursuits.',
        keywords: 'Inspiration, Potential, New beginnings',
        reversedDescription: 'Ace of Wands reversed suggests a delay or a lack of creative energy, urging the seeker to reignite their passion, overcome obstacles, and take action to manifest their ideas into reality.',
        reversedKeywords: 'Delay, Lack of creative energy, Reignite passion',
        image: AceOfWands
    },
    {
        name: 'Two of Wands',
        description: 'Two of Wands represents a pivotal moment of contemplation and decision-making, as one stands at the precipice of possibilities, weighing options and envisioning future endeavors.',
        keywords: 'Contemplation, Decision-making, Possibilities',
        reversedDescription: 'Two of Wands reversed indicates a lack of planning or hesitation in making decisions, urging the seeker to embrace boldness, take calculated risks, and step outside their comfort zone to unlock new possibilities and seize opportunities.',
        reversedKeywords: 'Lack of planning, Hesitation, Boldness and calculated risks',
        image: TwoOfWands
    },
    {
        name: 'Three of Wands',
        description: 'Three of Wands signifies a moment of anticipation and progress, as one looks out onto the horizon, ready to embark on a journey of exploration and expansion, fueled by foresight and ambition.',
        keywords: 'Anticipation, Progress, Exploration',
        reversedDescription: 'Three of Wands reversed suggests a delay in progress or a lack of foresight, urging the seeker to reassess their goals, seek new perspectives, and take proactive steps to overcome obstacles and move forward with their plans.',
        reversedKeywords: 'Delay in progress, Lack of foresight, Reassess goals',
        image: ThreeOfWands
    },
    {
        name: 'Four of Wands',
        description: 'Four of Wands signifies a joyous celebration of stability and harmony, where individuals come together in unity to honor accomplishments and create an atmosphere of blissful contentment.',
        keywords: 'Celebration, Stability, Unity',
        reversedDescription: 'Four of Wands reversed signifies instability or a lack of harmony in celebrations or achievements, urging the seeker to address conflicts, cultivate stronger foundations, and create a supportive environment to experience joy and fulfillment in their endeavors.',
        reversedKeywords: 'Instability, Lack of harmony, Conflict resolution',
        image: FourOfWands
    },
    {
        name: 'Five of Wands',
        description: 'Five of Wands represents a dynamic and spirited clash of energies, as individuals engage in lively competition, each asserting their ideas and passions, creating a vibrant and challenging environment of growth and self-discovery.',
        keywords: 'Competition, Energy, Growth',
        reversedDescription: 'Five of Wands reversed suggests a resolution of conflicts or a decrease in competition, urging the seeker to find common ground, foster collaboration, and work towards shared goals in order to achieve harmony and cooperation.',
        reversedKeywords: 'Conflict resolution, Decrease in competition, Harmony and cooperation',
        image: FiveOfWands
    },
    {
        name: 'Six of Wands',
        description: 'Six of Wands represents victory, recognition, and celebration of success.',
        keywords: 'Victory, Recognition, Celebration',
        reversedDescription: 'Six of Wands reversed suggests a temporary setback or a lack of recognition for accomplishments, urging the seeker to remain resilient, seek validation from within, and continue striving for success despite external challenges or setbacks.',
        reversedKeywords: 'Temporary setback, Lack of recognition, Resilience and self-validation',
        image: SixOfWands
    },
    {
        name: 'Seven of Wands',
        description: 'Seven of Wands represents courageously defending one\'s position against challenges and opposition.',
        keywords: 'Courage, Defiance, Opposition',
        reversedDescription: 'Seven of Wands reversed indicates a lack of determination or wavering confidence in the face of opposition, urging the seeker to assert their beliefs, stand their ground, and tap into their inner strength to overcome challenges and maintain their position.',
        reversedKeywords: 'Lack of determination, Wavering confidence, Assertiveness and inner strength',
        image: SevenOfWands
    },
    {
        name: 'Eight of Wands',
        description: 'Eight of Wands represents rapid action, quick developments, and the swift arrival of change or communication in various aspects of life.',
        keywords: 'Swift, Progress, Communication',
        reversedDescription: 'Eight of Wands reversed suggests delays or a lack of forward momentum, urging the seeker to address obstacles, streamline their plans, and take focused action to overcome barriers and restore a sense of swift progress and efficiency.',
        reversedKeywords: 'Delays, Lack of momentum, Streamline and focused action',
        image: EightOfWands
    },
    {
        name: 'Nine of Wands',
        description: ' Nine of Wands represents resilience, endurance, and the strength to persist in the face of challenges and obstacles.',
        keywords: 'Resilience, Perseverance, Endurance',
        reversedDescription: 'Nine of Wands reversed signifies a depletion of energy or a feeling of burnout, urging the seeker to prioritize self-care, seek support from others, and recharge their resilience in order to continue facing challenges with strength and perseverance.',
        reversedKeywords: 'Depletion of energy, Burnout, Self-care and resilience',
        image: NineOfWands
    },
    {
        name: 'Ten of Wands',
        description: 'Ten of Wands represents the burden of responsibilities, the feeling of being overwhelmed, and the need to find balance and release from the weight of one\'s obligations.',
        keywords: 'Burden, Overwhelm, Release',
        reversedDescription: 'Ten of Wands reversed suggests a release of burdens or a surrender of overwhelming responsibilities, urging the seeker to delegate tasks, set healthy boundaries, and lighten their load in order to regain a sense of freedom and restore balance in their life.',
        reversedKeywords: 'Release of burdens, Surrender, Delegation and balance',
        image: TenOfWands
    },
    {
        name: 'Page of Wands',
        description: 'Page of Wands represents the spark of inspiration, the emergence of creative potential, and the enthusiastic pursuit of new ventures and opportunities.',
        keywords: 'Inspiration, Potential, Exploration',
        reversedDescription: 'Page of Wands reversed signifies a lack of enthusiasm or impulsive behavior, urging the seeker to cultivate patience, develop a clear vision, and channel their creative energy in a focused and disciplined manner to manifest their passions and ideas.',
        reversedKeywords: 'Lack of enthusiasm, Impulsive behavior, Patience and focused manifestation',
        image: PageOfWands
    },
    {
        name: 'Knight of Wands',
        description: 'Knight of Wands represents passion, action, and a bold and adventurous spirit, as one fearlessly charges forward towards their goals and desires.',
        keywords: 'Passion, Action, Adventure',
        reversedDescription: 'Knight of Wands reversed suggests recklessness or a lack of direction, urging the seeker to channel their energy into purposeful action, harness their passion with moderation, and adopt a more strategic approach to achieve their goals and maintain stability.',
        reversedKeywords: 'Recklessness, Lack of direction, Purposeful action and moderation',
        image: KnightOfWands
    },
    {
        name: 'Queen of Wands',
        description: 'Queen of Wands represents a charismatic, confident, and passionate woman who is a natural leader and radiates creativity and enthusiasm in all aspects of her life.',
        keywords: 'Charismatic, Passionate, Confident',
        reversedDescription: 'Queen of Wands reversed indicates a misuse of personal power or a lack of confidence, urging the seeker to reconnect with their inner strength, embrace their authenticity, and assert themselves with grace and self-assurance to manifest their ambitions and lead with charisma.',
        reversedKeywords: 'Power struggles, Self-doubt, Inner strength and authenticity.',
        image: QueenOfWands
    },
    {
        name: 'King of Wands',
        description: 'King of Wands represents a visionary and dynamic leader who exudes confidence, takes decisive action, and inspires others through his strong will and creative pursuits.',
        keywords: 'Visionary, Assertiveness, Ambition',
        reversedDescription: 'King of Wands reversed suggests a misuse of authority or a lack of leadership, urging the seeker to cultivate patience, temper their assertiveness, and lead with wisdom and integrity to inspire and empower others towards success and positive change.',
        reversedKeywords: 'Abusive power, Ineffectual leadership, Patience and integrity',
        image: KingOfWands
    },
    {
        name: 'Ace of Cups',
        description: 'Ace of Cups symbolizes new beginnings, emotional fulfillment, and the potential for love and deep connections in one\'s life',
        keywords: 'Love, Emotions, New Beginnings',
        reversedDescription: 'Ace of Cups reversed suggests blocked emotions or a lack of emotional fulfillment, urging the seeker to address emotional barriers, open their heart, and cultivate self-love and compassion to experience deep emotional connections and renewed inner fulfillment.',
        reversedKeywords: 'Emotional blockage, Dissatisfaction, Inner healing.',
        image: AceOfCups
    },
    {
        name: 'Two of Cups',
        description: 'Two of Cups represents harmony, balance, and deep emotional connections between two individuals.',
        keywords: 'Love, Partnership, Unity',
        reversedDescription: 'Two of Cups reversed suggests disharmony or a lack of emotional connection in relationships, urging the seeker to foster open communication, seek mutual understanding, and restore harmony in order to cultivate deep and meaningful connections with others.',
        reversedKeywords: 'Disharmony, Lack of connection, Open communication and understanding',
        image: TwoOfCups
    },
    {
        name: 'Three of Cups',
        description: 'Three of Cups represents friendship, joyous gatherings, and harmonious relationships.',
        keywords: 'Friendship, Celebration, Unity',
        reversedDescription: 'Three of Cups reversed suggests a lack of celebration or a disconnection from social connections, urging the seeker to seek joy, foster meaningful connections, and embrace moments of camaraderie to experience a sense of belonging and shared happiness.',
        reversedKeywords: 'Lack of celebration, Disconnection, Joy and camaraderie',
        image: ThreeOfCups
    },
    {
        name: 'Four of Cups',
        description: 'Four of Cups represents introspection and contemplation, as the figure in the card appears detached and uninterested in the opportunities presented before them',
        keywords: 'Introspection, Detachment, Contemplation',
        reversedDescription: 'Four of Cups reversed signifies missed opportunities or a lack of appreciation for what is being offered, urging the seeker to cultivate gratitude, open their eyes to new possibilities, and embrace the gifts and opportunities that surround them.',
        reversedKeywords: 'Missed opportunities, Lack of appreciation, Gratitude and new possibilities',
        image: FourOfCups
    },
    {
        name: 'Five of Cups',
        description: 'Five of Cups represents loss, grief, and the need to confront and process negative emotions in order to move forward and find healing.',
        keywords: 'Loss, Disappointment, Renewal',
        reversedDescription: 'Five of Cups reversed suggests acceptance and moving on from past disappointments or grief, urging the seeker to focus on healing, finding silver linings, and embracing new possibilities for emotional renewal and growth.',
        reversedKeywords: 'Acceptance, Moving on, Healing and renewal',
        image: FiveOfCups
    },
    {
        name: 'Six of Cups',
        description: 'Six of Cups depicts a scene of nostalgic innocence and sweet memories as two individuals exchange cups, symbolizing a sense of joy, reunion, and a fond remembrance of the past.',
        keywords: 'Nostalgia, Innocence, Reunion',
        reversedDescription: 'Six of Cups reversed suggests a resistance to embracing the past or a reluctance to let go, urging the seeker to release nostalgic attachments, embrace the present moment, and foster a sense of emotional growth and liberation for a brighter future.',
        reversedKeywords: 'Resistance to the past, Reluctance to let go, Emotional growth and liberation',
        image: SixOfCups
    },
    {
        name: 'Seven of Cups',
        description: 'Seven of Cups portrays a figure surrounded by seven floating cups, each containing a different illusion or fantasy, symbolizing choices, dreams, and the need for discernment amidst various tempting possibilities.',
        keywords: 'Choices, Illusions, Discernment',
        reversedDescription: 'Seven of Cups reversed signifies clarity and focus amidst confusion or illusion, urging the seeker to prioritize practicality, make grounded decisions, and align their actions with their true desires to manifest tangible results and avoid being lost in a world of unrealistic fantasies.',
        reversedKeywords: 'Clarity, Grounded decisions, Manifest tangible results',
        image: SevenOfCups
    },
    {
        name: 'Eight of Cups',
        description: ' Eight of Cups portrays a figure walking away from a stack of cups, signifying a journey of emotional detachment, soul-searching, and the pursuit of a higher purpose or spiritual fulfillment.',
        keywords: 'Detachment, Introspection, Quest',
        reversedDescription: 'Eight of Cups reversed suggests a resistance to change or a fear of letting go, urging the seeker to embrace inner growth, release attachments to the past, and embark on a journey of self-discovery and emotional fulfillment to find a renewed sense of purpose and fulfillment.',
        reversedKeywords: 'Resistance to change, Fear of letting go, Inner growth and self-discovery',
        image: EightOfCups
    },
    {
        name: 'Nine of Cups',
        description: 'Nine of Cups represents a person sitting contentedly with nine cups arranged behind them, symbolizing fulfillment, emotional satisfaction, and a sense of accomplishment or wish fulfillment in various areas of life.',
        keywords: 'Fulfillment, Satisfaction, Abundance',
        reversedDescription: 'Nine of Cups reversed indicates a lack of emotional fulfillment or dissatisfaction despite outer achievements, urging the seeker to seek inner contentment, align their desires with their values, and cultivate gratitude and self-acceptance for a deeper sense of joy and fulfillment.',
        reversedKeywords: 'Lack of fulfillment, Dissatisfaction, Inner contentment and gratitude',
        image: NineOfCups
    },
    {
        name: 'Ten of Cups',
        description: 'Ten of Cups portrays a harmonious family scene with a rainbow overhead, symbolizing domestic bliss, emotional fulfillment, and the attainment of lasting happiness and harmonious relationships.',
        keywords: 'Fulfillment, Harmony, Joy',
        reversedDescription: 'Ten of Cups reversed suggests a disruption of harmony or strained relationships within the family or community, urging the seeker to foster open communication, seek',
        reversedKeywords: 'Disruption of harmony, Strained relationships, Open communication and resolution',
        image: TenOfCups
    },
    {
        name: 'Page of Cups',
        description: 'Page of Cups depicts a young person holding a cup with a fish emerging from it, symbolizing emotional openness, intuition, and the emergence of creative and imaginative endeavors.',
        keywords: 'Emotional openness, Intuition, Creativity',
        reversedDescription: 'Page of Cups reversed suggests emotional immaturity or a lack of self-expression, urging the seeker to embrace vulnerability, cultivate emotional awareness, and explore their creative potential to foster personal growth and deeper connections with others.',
        reversedKeywords: 'Emotional immaturity, Lack of self-expression, Vulnerability and personal growth',
        image: PageOfCups
    },
    {
        name: 'Knight of Cups',
        description: 'Knight of Cups symbolizes romantic pursuits, emotional sensitivity, intuition, and the quest for creative inspiration and meaningful connections.',
        keywords: 'Romance, Chivalry, Emotional depth',
        reversedDescription: 'Knight of Cups reversed suggests a tendency towards emotional manipulation or romantic idealism, urging the seeker to cultivate emotional balance, engage in authentic connections, and channel their creative energy in a grounded and compassionate way to pursue genuine love and meaningful relationships.',
        reversedKeywords: 'Emotional manipulation, Romantic idealism, Emotional balance and authentic connections',
        image: KnightOfCups
    },
    {
        name: 'Queen of Cups',
        description: 'Queen of Cups represents emotional intelligence, empathy, intuition, and the embodiment of feminine nurturing energy.',
        keywords: 'Empathy, Intuition, Nurturing',
        reversedDescription: 'Queen of Cups reversed suggests emotional insecurity or a lack of emotional nurturance, urging the seeker to prioritize self-care, listen to their intuition, and cultivate emotional stability and compassion to nurture themselves and others with love and kindness.',
        reversedKeywords: 'Emotional insecurity, Lack of nurturance, Self-care and compassion',
        image: QueenOfCups
    },
    {
        name: 'King of Cups',
        description: 'King of Cups symbolizes emotional intelligence, compassion, mastery of emotions, wisdom, and the ability to balance logic with sensitivity.',
        keywords: 'Compassion, Wisdom, Emotional mastery',
        reversedDescription: 'King of Cups reversed suggests emotional volatility or a lack of emotional control, urging the seeker to seek inner balance, cultivate emotional intelligence, and express their feelings in a balanced and empathetic manner to foster harmonious relationships and create a calm emotional environment.',
        reversedKeywords: 'Emotional volatility, Lack of control, Inner balance and empathetic expression',
        image: KingOfCups
    },
    {
        name: 'Ace of Swords',
        description: 'Ace of Swords represents the emergence of clarity and decisive action in one\'s life.',
        keywords: 'Clarity, Emergence, Decisive action',
        reversedDescription: 'Ace of Swords reversed suggests a lack of mental clarity or a struggle with mental conflict, urging the seeker to seek truth, clarity, and mental focus in order to overcome challenges, make informed decisions, and gain a fresh perspective on their situation.',
        reversedKeywords: 'Lack of clarity, Mental conflict, Truth and fresh perspective',
        image: AceOfSwords
    },
    {
        name: 'Two of Swords',
        description: 'Two of Swords represents a state of indecision, often depicting the need to weigh options, find inner harmony, and seek clarity before making a significant choice.',
        keywords: 'Indecision, Balance, Contemplation',
        reversedDescription: 'Two of Swords reversed suggests a difficulty in making decisions or a state of indecision, urging the seeker to confront their choices, trust their intuition, and take action to move forward, breaking free from the paralysis of analysis and embracing clarity.',
        reversedKeywords: 'Decision paralysis, Intuitive guidance, Break free and move forward',
        image: TwoOfSwords
    },
    {
        name: 'Three of Swords',
        description: 'Three of Swords symbolizes emotional pain, heartache, and sorrow, representing a period of grief and healing.',
        keywords: 'Heartbreak, Suffering, Healing',
        reversedDescription: 'Three of Swords reversed signifies a healing process or the gradual release of heartache and pain, urging the seeker to embrace forgiveness, seek emotional healing, and open themselves up to new possibilities for love and emotional renewal.',
        reversedKeywords: 'Healing process, Release of pain, Forgiveness and emotional renewal',
        image: ThreeOfSwords
    },
    {
        name: 'Four of Swords',
        description: ' Four of Swords represents a period of rest, solitude, and recuperation, suggesting the need for inner reflection and self-care.',
        keywords: 'Rest, Reflection, Rejuvenation',
        reversedDescription: 'Four of Swords reversed suggests a resistance to rest or a need to take a break from mental or physical exhaustion, urging the seeker to prioritize self-care, seek relaxation, and restore their energy and well-being to find renewed strength and clarity for the challenges ahead.',
        reversedKeywords: 'Resistance to rest, Mental exhaustion, Self-care and renewal',
        image: FourOfSwords
    },
    {
        name: 'Five of Swords',
        description: 'Five of Swords card symbolizes conflict, discord, and the aftermath of a difficult battle where one party emerges as the victor, leaving the defeated feeling defeated and resentful.',
        keywords: 'Conflict, Victory, Resentment',
        reversedDescription: 'Five of Swords reversed suggests a release of conflict or a resolution of tension, urging the seeker to seek reconciliation, let go of grudges, and embrace a spirit of compromise and cooperation in order to restore harmony and find peaceful resolutions in their interactions with others.',
        reversedKeywords: 'Release of conflict, Resolution of tension, Reconciliation and harmony',
        image: FiveOfSwords
    },
    {
        name: 'Six of Swords',
        description: 'Six of Swords card represents a journey of transition and moving forward, leaving behind a troubled past and seeking solace in calmer waters, symbolizing the hope for a brighter future.',
        keywords: 'Transition, Journey, Hope',
        reversedDescription: 'Six of Swords reversed suggests resistance to change or a struggle to move forward from a difficult situation, urging the seeker to embrace transition, release attachments to the past, and seek guidance and support to navigate through challenges and embark on a journey towards healing and growth.',
        reversedKeywords: 'Resistance to change, Struggle to move forward, Transition and healing',
        image: SixOfSwords
    },
    {
        name: 'Seven of Swords',
        description: 'Seven of Swords card represents cunning, deception, and a clever strategy employed to outwit others and achieve personal gain, reminding us to be wary of hidden motives and to maintain integrity in our actions.',
        keywords: 'Cunning, Deception, Strategy',
        reversedDescription: 'Seven of Swords reversed signifies a release of deceit or dishonesty, urging the seeker to embrace honesty, take responsibility for their actions, and rebuild trust in order to move forward with integrity and regain a sense of personal authenticity.',
        reversedKeywords: 'Release of deceit, Honesty, Rebuilding trust and personal authenticity',
        image: SevenOfSwords
    },
    {
        name: 'Eight of Swords',
        description: 'Eight of Swords card represents feelings of restriction, entrapment, and self-imposed limitations, reminding us to seek clarity, challenge our perceived boundaries, and find the inner strength to break free from the constraints that hold us back.',
        keywords: 'Restriction, Entrapment, Liberation.',
        reversedDescription: 'Eight of Swords reversed suggests a release from self-imposed limitations or mental entrapment, urging the seeker to embrace freedom, challenge negative beliefs, and cultivate self-confidence in order to break free from perceived constraints and pursue new possibilities.',
        reversedKeywords: 'Release from limitations, Mental freedom, Self-confidence and new possibilities',
        image: EightOfSwords
    },
    {
        name: 'Nine of Swords',
        description: 'Nine of Swords card represents worry, anxiety, and inner turmoil, depicting a person haunted by their own fears and racing thoughts, urging us to confront our anxieties and seek solace through self-reflection and reaching out for support.',
        keywords: 'Worry, Anxiety, Introspection',
        reversedDescription: 'Nine of Swords reversed suggests a release from anxiety or worry, urging the seeker to seek inner peace, practice self-compassion, and engage in positive self-talk to overcome negative thought patterns and find solace in times of distress.',
        reversedKeywords: 'Release from anxiety, Inner peace, Self-compassion and positive self-talk',
        image: NineOfSwords
    },
    {
        name: 'Ten of Swords',
        description: 'Ten of Swords card represents a dramatic end or culmination of a difficult situation, signifying the completion of a cycle, the need for acceptance, and the potential for transformation and new beginnings.',
        keywords: 'Completion, Adversity, Transformation',
        reversedDescription: 'Ten of Swords reversed signifies the end of a painful cycle or the gradual healing of wounds, urging the seeker to embrace resilience, release the past, and find the strength to rise above adversity in order to experience transformation and renewal.',
        reversedKeywords: 'End of cycle, Healing wounds, Resilience and transformation',
        image: TenOfSwords
    },
    {
        name: 'Page of Swords',
        description: 'Page of Swords represents a youthful and curious energy, signaling the emergence of new ideas, intellectual pursuits, and the need for mental agility in the face of challenges.',
        keywords: 'Youthfulness, Curiosity, Mental agility',
        reversedDescription: 'Page of Swords reversed suggests a lack of clarity or immature communication, urging the seeker to seek truth, develop mental discipline, and practice mindful communication in order to gain insight, overcome challenges, and navigate through conflicts with wisdom and integrity.',
        reversedKeywords: 'Lack of clarity, Immature communication, Truth-seeking and mindful communication',
        image: PageOfSwords
    },
    {
        name: 'Knight of Swords',
        description: 'Knight of Swords charges forth with swift and decisive action, seeking truth, justice, and clarity in all endeavors.',
        keywords: 'Action, Determination, Clarity',
        reversedDescription: 'Knight of Swords reversed suggests impulsive or reckless behavior, urging the seeker to seek balance, exercise caution, and approach challenges with thoughtfulness and strategic planning in order to achieve their goals and avoid unnecessary conflicts or hasty decisions.',
        reversedKeywords: 'Impulsive behavior, Recklessness, Balance and strategic planning',
        image: KnightOfSwords
    },
    {
        name: 'Queen of Swords',
        description: 'Queen of Swords embodies sharp intellect, astute observation, and unwavering independence, wielding her sword of truth with grace and precision.',
        keywords: 'Intellect, Independence, Truth',
        reversedDescription: 'Queen of Swords reversed suggests a lack of clarity in communication or a tendency towards harshness, urging the seeker to cultivate empathy, embrace open-mindedness, and practice compassionate communication to foster understanding and create harmonious relationships.',
        reversedKeywords: 'Lack of clarity, Harsh communication, Empathy and compassionate understanding',
        image: QueenOfSwords
    },
    {
        name: 'King of Swords',
        description: 'King of Swords exudes authority, logic, and sharp discernment, ruling with a calm and commanding presence while upholding the principles of justice and truth.',
        keywords: 'Authority, Logic, Justice',
        reversedDescription: 'King of Swords reversed suggests a misuse of intellect or a tendency towards manipulation, urging the seeker to seek wisdom, practice ethical decision-making, and use their mental acuity for the greater good in order to foster fairness, justice, and true leadership.',
        reversedKeywords: 'Misuse of intellect, Manipulation, Wisdom and ethical leadership',
        image: KingOfSwords
    },
    {
        name: 'Ace of Pentacles',
        description: 'Ace of Pentacles signifies new beginnings and material abundance, representing the fertile ground for prosperous opportunities and the potential for long-term stability and growth',
        keywords: 'Opportunity, Abundance, Stability',
        reversedDescription: 'Ace of Pentacles reversed suggests a missed opportunity or a delay in material abundance, urging the seeker to seek practicality, take calculated risks, and lay a solid foundation in order to manifest prosperity and financial stability in their life.',
        reversedKeywords: 'Missed opportunity, Delay in abundance, Practicality and financial stability',
        image: AceOfPentacles
    },
    {
        name: 'Two of Pentacles',
        description: 'Two of Pentacles represents the delicate balance of juggling multiple responsibilities and priorities, navigating life\'s ups and downs with adaptability and flexibility while seeking harmony amidst the constant motion.',
        keywords: 'Balance, Adaptability, Priorities',
        reversedDescription: 'Two of Pentacles reversed signifies imbalance or difficulty in managing responsibilities, urging the seeker to prioritize and find equilibrium between various aspects of life, adapt to change, and embrace flexibility to achieve stability and harmony.',
        reversedKeywords: 'Imbalance, Difficulty in managing, Prioritization and flexibility',
        image: TwoOfPentacles
    },
    {
        name: 'Three of Pentacles',
        description: 'Three of Pentacles represents collaboration, teamwork, and skilled craftsmanship, emphasizing the importance of working together towards a common goal to achieve success.',
        keywords: 'Collaboration, Teamwork, Skilled Craftsmanship',
        reversedDescription: 'Three of Pentacles reversed suggests a lack of collaboration or a struggle with teamwork, urging the seeker to cultivate open communication, value the contributions of others, and embrace cooperation in order to achieve success and create meaningful and harmonious work relationships.',
        reversedKeywords: 'Lack of collaboration, Struggle with teamwork, Open communication and cooperation',
        image: ThreeOfPentacles
    },
    {
        name: 'Four of Pentacles',
        description: 'Four of Pentacles signifies possessiveness, a fear of loss, and a tendency to hold tightly to material possessions or control, often at the expense of personal relationships or experiencing true abundance.',
        keywords: 'Possessiveness, Fear, Material Possessions',
        reversedDescription: 'Four of Pentacles reversed signifies a release of possessiveness or a shift towards generosity, urging the seeker to let go of material attachments, embrace abundance with an open heart, and practice generosity and financial flow to create a sense of freedom and prosperity in their life.',
        reversedKeywords: 'Release of possessiveness, Generosity, Financial flow and freedom',
        image: FourOfPentacles
    },
    {
        name: 'Five of Pentacles',
        description: 'Five of Pentacles represents adversity, financial struggle, and a sense of isolation, highlighting the importance of seeking support and finding inner resilience during challenging times.',
        keywords: 'Adversity, Financial Struggle, Isolation',
        reversedDescription: 'Five of Pentacles reversed suggests a release from financial hardship or a shift towards resilience, urging the seeker to seek support, embrace opportunities for assistance, and cultivate a mindset of abundance and resourcefulness to overcome challenges and experience a renewed sense of stability and prosperity.',
        reversedKeywords: 'Release from hardship, Resilience, Support and abundance',
        image: FiveOfPentacles
    },
    {
        name: 'Six of Pentacles',
        description: 'Six of Pentacles embodies generosity, charity, and the act of giving, emphasizing the balance between sharing one\'s resources with others and receiving support when needed.',
        keywords: 'Generosity, Charity, Balance',
        reversedDescription: 'Six of Pentacles reversed suggests a lack of generosity or imbalance in giving and receiving, urging the seeker to cultivate a spirit of generosity, practice fair and equitable exchanges, and find harmony in sharing resources and supporting others for a sense of abundance and fulfillment.',
        reversedKeywords: 'Lack of generosity, Imbalance, Fairness and equitable exchanges',
        image: SixOfPentacles
    },
    {
        name: 'Seven of Pentacles',
        description: 'Seven of Pentacles symbolizes patience, perseverance, and a time of evaluation, highlighting the need to assess one\'s progress, make adjustments, and trust in the process of growth and fruition.',
        keywords: 'Patience, Perseverance, Evaluation',
        reversedDescription: 'Seven of Pentacles reversed suggests a lack of patience or a feeling of stagnation in regards to long-term goals, urging the seeker to reassess their efforts, seek new strategies, and have faith in their progress in order to overcome obstacles and eventually reap the rewards of their hard work.',
        reversedKeywords: 'Lack of patience, Stagnation, Reassess and progress',
        image: SevenOfPentacles
    },
    {
        name: 'Eight of Pentacles',
        description: 'Eight of Pentacles represents diligence, skill development, and a focus on honing one\'s craft, emphasizing the importance of dedicated effort and continuous improvement in order to achieve mastery.',
        keywords: 'Diligence, Skill Development, Mastery',
        reversedDescription: 'Eight of Pentacles reversed suggests a lack of dedication or a need to refine skills, urging the seeker to focus on honing their craft, embrace a growth mindset, and commit to continuous learning and improvement in order to achieve mastery and long-term success.',
        reversedKeywords: 'Lack of dedication, Skill refinement, Growth mindset and mastery',
        image: EightOfPentacles
    },
    {
        name: 'Nine of Pentacles',
        description: 'Nine of Pentacles represents self-sufficiency, abundance, and enjoying the rewards of one\'s hard work, highlighting a sense of independence and luxury that comes from cultivating personal success and financial stability.',
        keywords: 'Self-sufficiency, Abundance, Luxury',
        reversedDescription: 'Nine of Pentacles reversed suggests a lack of financial independence or a disconnection from the abundance of life, urging the seeker to cultivate self-sufficiency, embrace gratitude for the present, and seek inner fulfillment and contentment to experience true wealth and prosperity.',
        reversedKeywords: 'Lack of financial independence, Disconnection from abundance, Self-sufficiency and inner fulfillment',
        image: NineOfPentacles
    },
    {
        name: 'Ten of Pentacles',
        description: 'Ten of Pentacles signifies wealth, legacy, and the fulfillment of long-term goals, illustrating a state of prosperity and stability within a family or community that has been built through generations of hard work and wise financial decisions.',
        keywords: 'Wealth, Legacy, Prosperity',
        reversedDescription: 'Ten of Pentacles reversed signifies a lack of stability or disharmony within the family or community, urging the seeker to prioritize nurturing relationships, foster open communication, and cultivate a supportive and loving environment to restore a sense of shared prosperity, security, and harmony.',
        reversedKeywords: 'Instability, Discord, Nurturing relationships and shared abundance',
        image: TenOfPentacles
    },
    {
        name: 'Page of Pentacles',
        description: 'Page of Pentacles represents a young, ambitious individual who is eager to learn and develop practical skills while also symbolizing the potential for financial opportunities and growth.',
        keywords: 'Youthful, Curiosity, Practicality',
        reversedDescription: 'Page of Pentacles reversed suggests a lack of focus or a missed opportunity for growth, urging the seeker to cultivate discipline, seek practical knowledge, and embrace a diligent approach in order to manifest their ambitions and tap into their potential for material and personal development.',
        reversedKeywords: 'Lack of direction, Potential untapped, Diligence and practicality',
        image: PageOfPentacles
    },
    {
        name: 'Knight of Pentacles',
        description: 'Knight of Pentacles embodies a diligent, methodical, and dependable energy, symbolizing the traits of responsibility, hard work, and a strong focus on practical matters and long-term stability.',
        keywords: 'Diligence, Responsibility, Stability',
        reversedDescription: 'Knight of Pentacles reversed suggests a tendency towards stubbornness or a lack of progress, urging the seeker to embrace adaptability, take calculated risks, and cultivate a proactive mindset to overcome obstacles and pursue their goals with determination and efficiency.',
        reversedKeywords: 'Resistance to change, Stagnation, Adaptability and determination',
        image: KnightOfPentacles
    },
    {
        name: 'Queen of Pentacles',
        description: 'Queen of Pentacles represents a nurturing and abundant energy, embodying qualities of practicality, financial security, and a deep connection to nature, emphasizing the importance of nurturing oneself and others while finding joy in the material comforts of life.',
        keywords: 'Nurturing, Abundance, Practicality',
        reversedDescription: 'Queen of Pentacles reversed suggests a lack of practicality or nurturing energy, urging the seeker to cultivate stability, embrace abundance, and prioritize self-care in order to create a nurturing and prosperous environment for themselves and those around them.',
        reversedKeywords: 'Impracticality, Neglecting self-care, Stability and abundance',
        image: QueenOfPentacles
    },
    {
        name: 'King of Pentacles',
        description: 'King of Pentacles represents a grounded and prosperous energy, embodying qualities of financial mastery, practicality, and a strong sense of responsibility, highlighting the ability to achieve and maintain wealth through wise decision-making and diligent management of resources.',
        keywords: 'Grounded, Prosperity, Responsibility',
        reversedDescription: 'King of Pentacles reversed suggests a misuse of power or a lack of financial stability, urging the seeker to seek balance, practice responsible management of resources, and cultivate generosity and abundance to manifest long-term prosperity and create a secure and harmonious environment.',
        reversedKeywords: 'Misuse of power, Lack of stability, Responsible management and abundance',
        image: KingOfPentacles
    },

];
export default tarotCards;