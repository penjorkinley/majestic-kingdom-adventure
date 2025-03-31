export interface DestinationDetail {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  howToReach: string;
}

export const destinationDetails: DestinationDetail[] = [
  {
    id: 1,
    name: "Tiger's Nest Monastery",
    location: "Paro, Bhutan",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
    description:
      "Explore this iconic monastery perched on a cliff, offering breathtaking views and spiritual significance",
    fullDescription:
      "Perched precariously on a cliff at 3,120 meters above sea level, the Tiger's Nest Monastery (Paro Taktsang) is Bhutan's most iconic landmark. According to legend, Guru Rinpoche flew to this location on the back of a tigress to subdue a local demon. He then meditated in a cave for three months, and the monastery was built around this sacred spot in 1692. The hike to Tiger's Nest takes about 2-3 hours, offering stunning views of the Paro Valley. Inside, visitors can explore multiple temples adorned with intricate paintings depicting Buddhist teachings and deities.",
    highlights: [
      "Spectacular cliffside location with panoramic views of Paro Valley",
      "Sacred meditation caves where Guru Rinpoche meditated",
      "Beautiful prayer wheels and colorful prayer flags",
      "Intricate Buddhist artwork and golden statues",
      "Tranquil meditation spots with spiritual significance",
    ],
    bestTimeToVisit:
      "The best time to visit Tiger's Nest is during spring (March-May) and autumn (September-November) when the weather is pleasant and skies are clear, offering the best views during the hike.",
    howToReach:
      "The monastery is located about 10 km north of Paro. Visitors can take a taxi or arrange transportation through their hotel to the base of the mountain. From there, it's a 2-3 hour uphill hike to reach the monastery. Horses are available for hire for part of the journey.",
  },
  {
    id: 2,
    name: "Punakha Dzong",
    location: "Punakha, Bhutan",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
    description:
      "Discover the majestic fortress at the confluence of two rivers, showcasing Bhutan's architectural splendor",
    fullDescription:
      "The Punakha Dzong, also known as Pungthang Dechen Phodrang (Palace of Great Happiness), is one of Bhutan's most majestic structures. Built in 1637 by Zhabdrung Ngawang Namgyal, it stands at the confluence of the Mo Chhu and Pho Chhu rivers. As the second oldest and second-largest dzong in Bhutan, it served as the administrative center and the seat of government until the capital moved to Thimphu. The dzong houses sacred relics and the preserved remains of Zhabdrung Ngawang Namgyal. Its white-washed walls, ornate woodwork, and beautiful courtyards exemplify traditional Bhutanese architecture at its finest.",
    highlights: [
      "Stunning location at the confluence of two rivers",
      "Impressive architecture with intricate woodwork and massive prayer halls",
      "Beautiful jacaranda trees that bloom with purple flowers in spring",
      "Historical significance as former capital of Bhutan",
      "Coronation site of Bhutan's kings and venue for royal weddings",
    ],
    bestTimeToVisit:
      "Visit during spring (March-April) when the jacaranda trees bloom with purple flowers, creating a magical setting around the dzong. The winter months (November-February) offer clear views with fewer tourists.",
    howToReach:
      "Punakha is approximately a 2.5-hour drive from Thimphu. The dzong is located at the confluence of Mo Chhu and Pho Chhu rivers, easily accessible by road. Most tours include transportation, or taxis can be arranged from major towns.",
  },
  {
    id: 3,
    name: "Dochula Pass",
    location: "Thimphu, Bhutan",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/by%20Matt%20Dutile4.jpg",

    description:
      "Visit this mountain pass with panoramic Himalayan views and 108 memorial chortens",
    fullDescription:
      "Dochula Pass, located at an altitude of 3,100 meters on the road from Thimphu to Punakha, offers breathtaking panoramic views of the eastern Himalayan range on clear days. The pass is adorned with 108 chortens (stupas) known as the 'Druk Wangyal Chortens,' built in honor of the Bhutanese soldiers who lost their lives in the 2003 military operation against insurgents from India. The site also features the Druk Wangyal Lhakhang (temple), colorful prayer flags fluttering in the mountain breeze, and a royal botanical park. The 108 chortens were commissioned by the eldest Queen Mother, Her Majesty Ashi Dorji Wangmo Wangchuck.",
    highlights: [
      "Spectacular views of the Himalayan mountain range including Bhutan's highest peaks",
      "108 memorial chortens in a beautiful arrangement",
      "Druk Wangyal Lhakhang temple with colorful murals",
      "Rhododendron forests that bloom in various colors during spring",
      "Excellent photography opportunities with misty mountain landscapes",
    ],
    bestTimeToVisit:
      "October to February offers the clearest views of the Himalayan peaks. Early morning visits are recommended to avoid clouds that typically form by midday.",
    howToReach:
      "Dochula Pass is located approximately 30 km from Thimphu on the way to Punakha. It takes about 45 minutes to drive from Thimphu, and the pass is a common stop on journeys between Thimphu and Punakha.",
  },
  {
    id: 4,
    name: "Phobjikha Valley",
    location: "Wangdue, Bhutan",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",

    description:
      "Journey to this glacial valley, home to endangered black-necked cranes and pristine natural beauty",
    fullDescription:
      "Phobjikha Valley is a vast U-shaped glacial valley known for its stunning landscape and as the winter home of the endangered black-necked cranes, which migrate from the Tibetan Plateau. This remote and picturesque valley is one of Bhutan's most important wildlife preserves and contains the beautiful 17th-century Gangtey Monastery (Gangtey Goemba) overlooking the valley. The valley is a conservation area and part of the Black Mountains National Park. The locals have a deep reverence for the black-necked cranes, considering them sacred birds that bring good fortune. The valley's unique ecosystem includes marshlands, hills covered with pine forests, and traditional Bhutanese farmhouses scattered throughout the landscape.",
    highlights: [
      "Winter habitat of the rare black-necked cranes (November to March)",
      "The impressive Gangtey Monastery with its ornate architecture",
      "Pristine natural environment with lush meadows and pine forests",
      "Gangtey Nature Trail - an easy 5 km hiking trail through the valley",
      "Traditional rural Bhutanese lifestyle and architecture",
    ],
    bestTimeToVisit:
      "November to February to witness the black-necked cranes. The valley is also beautiful during spring (March-May) when wildflowers bloom across the meadows.",
    howToReach:
      "Phobjikha Valley is located about 3 hours east of Punakha (approximately 5-6 hours from Thimphu). The drive includes scenic mountain passes and landscapes. Most visitors arrive as part of organized tours or with private vehicles.",
  },
];
