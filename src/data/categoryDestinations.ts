// src/data/categoryDestinations.ts
export interface CategoryDestination {
  id: number;
  name: string;
  description: string;
  image: string;
  items: DestinationItem[];
}

export interface DestinationItem {
  id: number;
  name: string;
  location: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  howToReach: string;
}

export const categoryDestinations: CategoryDestination[] = [
  {
    id: 1,
    name: "Monasteries",
    description:
      "Explore Bhutan's sacred Buddhist monasteries perched on cliffs and hidden in valleys",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
    items: [
      {
        id: 101,
        name: "Tiger's Nest Monastery",
        location: "Paro, Bhutan",
        description:
          "The iconic monastery perched dramatically on a cliff with spiritual significance",
        fullDescription:
          "Perched precariously on a cliff at 3,120 meters above sea level, the Tiger's Nest Monastery (Paro Taktsang) is Bhutan's most iconic landmark. According to legend, Guru Rinpoche flew to this location on the back of a tigress to subdue a local demon. He then meditated in a cave for three months, and the monastery was built around this sacred spot in 1692. The hike to Tiger's Nest takes about 2-3 hours, offering stunning views of the Paro Valley. Inside, visitors can explore multiple temples adorned with intricate paintings depicting Buddhist teachings and deities.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile1.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Marcus%20Westberg%20Bumthang%20202316.jpg",
        ],
        highlights: [
          "Spectacular cliffside location with panoramic views of Paro Valley",
          "Sacred meditation caves where Guru Rinpoche meditated",
          "Beautiful prayer wheels and colorful prayer flags",
          "Intricate Buddhist artwork and golden statues",
          "Tranquil meditation spots with spiritual significance",
        ],
        bestTimeToVisit:
          "Spring (March-May) and autumn (September-November) when the weather is pleasant and skies are clear, offering the best views during the hike.",
        howToReach:
          "The monastery is located about 10 km north of Paro. Visitors can take a taxi or arrange transportation through their hotel to the base of the mountain. From there, it's a 2-3 hour uphill hike to reach the monastery. Horses are available for hire for part of the journey.",
      },
      {
        id: 102,
        name: "Gangtey Monastery",
        location: "Phobjikha Valley, Bhutan",
        description:
          "A beautiful 17th-century monastery overlooking the black-necked crane habitat",
        fullDescription:
          "Gangtey Monastery, also known as Gangtey Goemba, is an important monastery of Nyingmapa school of Buddhism, the main seat of the Pema Lingpa tradition. Built in the 17th century, this monastery sits on a forested hill overlooking the vast Phobjikha Valley, known for its black-necked cranes. The monastery complex includes monks' quarters, meditation centers, and a beautifully decorated assembly hall with intricate artwork. A major renovation completed in 2008 restored many of its historical features. Every autumn, a special festival celebrates the arrival of the black-necked cranes, with monks performing sacred dances to honor these revered birds.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile16.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/04%20-%20Chelela%20Pass-9.jpg",
        ],
        highlights: [
          "Panoramic views of the Phobjikha Valley",
          "Traditional Bhutanese monastic architecture",
          "Rich collection of sacred artifacts and religious paintings",
          "Annual Black-Necked Crane Festival",
          "Peaceful meditation spaces open to visitors",
        ],
        bestTimeToVisit:
          "October to February when the black-necked cranes are in residence. The annual Black-Necked Crane Festival in November is a highlight.",
        howToReach:
          "Gangtey is approximately a 4-hour drive from Thimphu. The journey passes through Dochula Pass and Wangdue Phodrang. Most visitors arrive as part of organized tours with private vehicles.",
      },
      {
        id: 103,
        name: "Tango Monastery",
        location: "Thimphu, Bhutan",
        description:
          "A significant Buddhist college perched on a hillside with a hiking trail",
        fullDescription:
          "Founded in the 13th century by Lama Gyalwa Lhanampa and later built in its current form by the 'Divine Madman' Lama Drukpa Kunley in the 15th century, Tango Monastery serves as one of Bhutan's most important Buddhist colleges. Located just north of Thimphu, this monastery sits atop a hill reached by a pleasant one-hour hike through a forest of rhododendrons and oak trees. The structure features traditional Bhutanese architecture with elaborate woodwork and a distinctive gold roof. Today, it's home to about 300 monks studying Buddhist philosophy, and houses numerous rare religious artifacts. The name 'Tango' comes from the Tibetan word meaning 'horse's head' – referring to the shape of the hill on which it stands.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu2.jpg",
        ],
        highlights: [
          "Center of Buddhist learning and monastic education",
          "Beautiful forest trail leading to the monastery",
          "Impressive architecture with ornate decorations",
          "Peaceful environment ideal for meditation",
          "Sweeping views of Thimphu valley",
        ],
        bestTimeToVisit:
          "Spring (March-May) for flowers blooming along the trail, or autumn (September-November) for clear skies and comfortable hiking temperatures.",
        howToReach:
          "The monastery is about 14 km north of Thimphu. Take a taxi to the base of the trail, and then hike uphill for approximately 45-60 minutes to reach the monastery.",
      },
    ],
  },
  {
    id: 2,
    name: "Fortresses",
    description:
      "Visit magnificent dzongs that showcase Bhutan's architectural and cultural heritage",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
    items: [
      {
        id: 201,
        name: "Punakha Dzong",
        location: "Punakha, Bhutan",
        description:
          "Majestic fortress at the confluence of two rivers with spectacular architecture",
        fullDescription:
          "The Punakha Dzong, also known as Pungthang Dechen Phodrang (Palace of Great Happiness), is one of Bhutan's most majestic structures. Built in 1637 by Zhabdrung Ngawang Namgyal, it stands at the confluence of the Mo Chhu and Pho Chhu rivers. As the second oldest and second-largest dzong in Bhutan, it served as the administrative center and the seat of government until the capital moved to Thimphu. The dzong houses sacred relics and the preserved remains of Zhabdrung Ngawang Namgyal. Its white-washed walls, ornate woodwork, and beautiful courtyards exemplify traditional Bhutanese architecture at its finest.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Bhutan%20Flower%20Show2.jpg",
        ],
        highlights: [
          "Stunning location at the confluence of two rivers",
          "Impressive architecture with intricate woodwork and massive prayer halls",
          "Beautiful jacaranda trees that bloom with purple flowers in spring",
          "Historical significance as former capital of Bhutan",
          "Coronation site of Bhutan's kings and venue for royal weddings",
        ],
        bestTimeToVisit:
          "Spring (March-April) when the jacaranda trees bloom with purple flowers, creating a magical setting around the dzong. The winter months (November-February) offer clear views with fewer tourists.",
        howToReach:
          "Punakha is approximately a 2.5-hour drive from Thimphu. The dzong is located at the confluence of Mo Chhu and Pho Chhu rivers, easily accessible by road. Most tours include transportation, or taxis can be arranged from major towns.",
      },
      {
        id: 202,
        name: "Trashigang Dzong",
        location: "Trashigang, Eastern Bhutan",
        description:
          "Strategic fortress in eastern Bhutan with panoramic valley views",
        fullDescription:
          "Perched high on a mountain spur overlooking the Drangme Chhu river, Trashigang Dzong was built in 1659 to defend against Tibetan invasions. This strategic fortress, also known as 'The Fortress of the Auspicious Hill,' serves as both an administrative center and a monastic complex for the easternmost district of Bhutan. The dzong features traditional Bhutanese architecture with massive walls, intricate woodwork, and a central tower (utse). Its strategic position offers breathtaking views of the surrounding valleys and mountains. Today, the dzong houses government offices, a monastic body, and is the center for the annual Trashigang Tshechu festival, drawing people from the remotest parts of eastern Bhutan.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Trashi%20Yangtse%20090723%20by%20Amp%20Sripimanwat-179-parallax%20(1).jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Trashi%20Yangtse%20090723%20by%20Amp%20Sripimanwat-179-parallax%20(1).jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/04%20-%20Chelela%20Pass-9.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Laya2.jpg",
        ],
        highlights: [
          "Spectacular views of Drangme Chhu river valley",
          "Strategic historical importance in eastern Bhutan",
          "Traditional Bhutanese fortress architecture",
          "Important administrative and religious center",
          "Annual Trashigang Tshechu festival",
        ],
        bestTimeToVisit:
          "October to April when the weather is clear and dry, with November-December being ideal for witnessing the Trashigang Tshechu festival.",
        howToReach:
          "Trashigang is about 550 km from Thimphu, typically a 2-day journey by road. Flights to Yonphula Domestic Airport (30 km from Trashigang) are available from Paro, followed by a 1-hour drive to reach the dzong.",
      },
      {
        id: 203,
        name: "Trongsa Dzong",
        location: "Trongsa, Central Bhutan",
        description:
          "Massive historical fortress with strategic importance and rich history",
        fullDescription:
          "Built in 1644, Trongsa Dzong is an imposing fortress that symbolizes the strength of the Bhutanese political system. Strategically positioned on a mountain spur overlooking the Mangde Chhu river gorge, this dzong controlled the east-west trade route for centuries, giving Trongsa Penlops (governors) immense power. The dzong's labyrinthine complex covers a massive area, with numerous courtyards, passageways, and administrative offices. Historically, kings of Bhutan must first serve as the Trongsa Penlop before ascending the throne, establishing this dzong's profound political significance. The fortress houses 25 temples, including a beautifully decorated Mithrub Lhakhang (assembly hall), and hosts the annual Trongsa Tshechu festival.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Marcus%20Westberg%20Bumthang%20202316.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Marcus%20Westberg%20Bumthang%20202316.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/_SCH5022_V2_FINAL_RGB.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile1.jpg",
        ],
        highlights: [
          "Strategic location controlling east-west travel routes",
          "Historic seat of power for future kings of Bhutan",
          "Expansive complex with spectacular architecture",
          "Intricate Buddhist artwork and historical artifacts",
          "Stunning views of Mangde Chhu gorge and surrounding landscape",
        ],
        bestTimeToVisit:
          "October to May when the weather is pleasant with clear skies, offering the best views of the dzong and surrounding landscape.",
        howToReach:
          "Trongsa is located in central Bhutan, approximately 200 km east of Thimphu. The journey by road takes about 6-7 hours, traversing mountain passes and scenic landscapes.",
      },
    ],
  },
  {
    id: 3,
    name: "Passes",
    description:
      "Experience breathtaking mountain passes with panoramic Himalayan views",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/by%20Matt%20Dutile4.jpg",
    items: [
      {
        id: 301,
        name: "Dochula Pass",
        location: "Thimphu to Punakha Highway, Bhutan",
        description:
          "Mountain pass with 108 memorial chortens and stunning Himalayan views",
        fullDescription:
          "Dochula Pass, located at an altitude of 3,100 meters on the road from Thimphu to Punakha, offers breathtaking panoramic views of the eastern Himalayan range on clear days. The pass is adorned with 108 chortens (stupas) known as the 'Druk Wangyal Chortens,' built in honor of the Bhutanese soldiers who lost their lives in the 2003 military operation against insurgents from India. The site also features the Druk Wangyal Lhakhang (temple), colorful prayer flags fluttering in the mountain breeze, and a royal botanical park. The 108 chortens were commissioned by the eldest Queen Mother, Her Majesty Ashi Dorji Wangmo Wangchuck.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/by%20Matt%20Dutile4.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/by%20Matt%20Dutile4.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/04%20-%20Chelela%20Pass-9.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Dochula%20Pass%20by%20Carissa%20Nimah.jpg",
        ],
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
        id: 302,
        name: "Chelela Pass",
        location: "Between Paro and Haa Valleys, Bhutan",
        description:
          "Bhutan's highest motorable pass with alpine landscapes and rhododendron forests",
        fullDescription:
          "Chelela Pass, standing at an elevation of 3,988 meters, is Bhutan's highest motorable mountain pass connecting the picturesque valleys of Paro and Haa. This alpine wonderland offers unobstructed views of the sacred Mount Jomolhari and Jichu Drake peaks on clear days. The pass is renowned for its stunning landscapes, with slopes covered in blue poppies (Bhutan's national flower), rhododendrons, and primulas during spring and summer. Prayer flags flutter in the wind, creating a colorful spectacle against the backdrop of snow-capped mountains. The area is also excellent for spotting Himalayan wildlife, including monal pheasants and blood pheasants, and offers numerous hiking trails for adventurous travelers.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/04%20-%20Chelela%20Pass-9.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/04%20-%20Chelela%20Pass-9.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/by%20Matt%20Dutile4.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/spring-MarcusWestberg.jpg",
        ],
        highlights: [
          "Panoramic views of Mount Jomolhari and surrounding Himalayan peaks",
          "Highest motorable pass in Bhutan with breathtaking alpine scenery",
          "Stunning display of wildflowers in spring and summer months",
          "Colorful prayer flags creating a spiritual atmosphere",
          "Excellent bird-watching and short hiking opportunities",
        ],
        bestTimeToVisit:
          "April to June for blooming wildflowers, and October to November for clear mountain views. The pass may be inaccessible during heavy winter snowfall from December to February.",
        howToReach:
          "Chelela Pass is approximately 35 km from Paro town, requiring a 1.5-2 hour drive on winding mountain roads. Most visitors arrange a private vehicle or join a tour, as public transportation to the pass is limited.",
      },
      {
        id: 303,
        name: "Thrumshing La Pass",
        location: "Between Bumthang and Mongar, Bhutan",
        description:
          "Remote high mountain pass on the East-West Highway with pristine wilderness",
        fullDescription:
          "Thrumshing La Pass, at an elevation of 3,780 meters, is one of Bhutan's most important mountain passes on the East-West Highway connecting central and eastern Bhutan. This remote pass cuts through the heart of Thrumshingla National Park, a pristine wilderness area protecting old-growth fir forests, bamboo thickets, and alpine meadows. The journey through this pass offers a dramatic transition between Bhutan's central valleys and eastern regions, with distinct changes in landscape, climate, and culture. At the summit, travelers are rewarded with spectacular views of mountain ranges and deep valleys, often shrouded in mist. The area around the pass is rich in biodiversity, home to rare species like the red panda, Himalayan black bear, and numerous bird species.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Pelala-Mountain-Pass-Trans-Bhutan-Trail-by-Alicia-Warner-4.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Pelala-Mountain-Pass-Trans-Bhutan-Trail-by-Alicia-Warner-4.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/winter-scarlette-DG.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/autumn-scarlette-dg.jpg",
        ],
        highlights: [
          "Dramatic mountain scenery with panoramic views",
          "Journey through Thrumshingla National Park's diverse ecosystems",
          "Cultural transition point between central and eastern Bhutan",
          "Rich biodiversity and potential wildlife sightings",
          "Remote, less-visited location offering authentic experiences",
        ],
        bestTimeToVisit:
          "March to May and September to November, when the weather is clear and the pass is least likely to be affected by landslides or snow. The pass may be temporarily closed during monsoon season (June-August) due to landslides.",
        howToReach:
          "Thrumshing La Pass is approximately 180 km east of Bumthang and 65 km west of Mongar. Most travelers cross the pass as part of a longer east-west Bhutan journey, typically with a private vehicle and driver arranged through a tour operator.",
      },
    ],
  },
  {
    id: 4,
    name: "Valleys",
    description:
      "Discover serene valleys with unique landscapes, culture, and biodiversity",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
    items: [
      {
        id: 401,
        name: "Phobjikha Valley",
        location: "Wangdue Phodrang, Bhutan",
        description:
          "Glacial valley famous for endangered black-necked cranes and pristine nature",
        fullDescription:
          "Phobjikha Valley is a vast U-shaped glacial valley known for its stunning landscape and as the winter home of the endangered black-necked cranes, which migrate from the Tibetan Plateau. This remote and picturesque valley is one of Bhutan's most important wildlife preserves and contains the beautiful 17th-century Gangtey Monastery (Gangtey Goemba) overlooking the valley. The valley is a conservation area and part of the Black Mountains National Park. The locals have a deep reverence for the black-necked cranes, considering them sacred birds that bring good fortune. The valley's unique ecosystem includes marshlands, hills covered with pine forests, and traditional Bhutanese farmhouses scattered throughout the landscape.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile16.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile1.jpg",
        ],
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

      {
        id: 402,
        name: "Paro Valley",
        location: "Paro, Bhutan",
        description:
          "Picturesque valley known for its rich culture, history, and stunning landscapes",
        fullDescription:
          "Paro Valley is one of Bhutan's most picturesque regions, known for its lush green landscapes, terraced rice fields, and the iconic Paro Taktsang (Tiger's Nest) monastery. The valley is home to several important cultural sites, including the National Museum of Bhutan housed in the Ta Dzong and the historic Paro Dzong. The valley's charming town features traditional wooden houses and vibrant markets. Paro is also the gateway to Bhutan's only international airport, making it a popular starting point for travelers. The valley is surrounded by majestic mountains and offers numerous hiking trails, including the trek to Taktsang Monastery, which provides breathtaking views of the surrounding landscape.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
        ],
        highlights: [
          "Home to iconic Tiger's Nest Monastery perched on a cliff",
          "Rich cultural heritage with ancient temples and dzongs",
          "Beautiful terraced rice fields and scenic landscapes",
          "Traditional wooden houses and vibrant local markets",
          "Gateway to Bhutan's only international airport",
        ],
        bestTimeToVisit:
          "Spring (March-May) for blooming flowers and pleasant weather, or autumn (September-November) for clear skies and colorful foliage.",
        howToReach:
          "Paro is accessible by road from Thimphu (approximately 1 hour) and is also served by Bhutan's only international airport. Flights from major cities in Asia connect to Paro, making it a convenient entry point to Bhutan.",
      },
      {
        id: 403,
        name: "Bumthang Valley",
        location: "Central Bhutan",
        description:
          "Cultural heart of Bhutan with ancient temples, monasteries, and scenic landscapes",
        fullDescription:
          "Bumthang Valley, often referred to as the cultural heart of Bhutan, is a picturesque region known for its rich history, ancient temples, and stunning landscapes. The valley consists of four main valleys: Chokhor, Tang, Ura, and Chhume, each with its own unique charm. Bumthang is home to some of Bhutan's oldest and most sacred temples, including Jakar Dzong and Jambay Lhakhang. The valley is also famous for its traditional handicrafts, including weaving and cheese production. Visitors can explore the scenic countryside, hike through beautiful landscapes, and experience the vibrant local culture during festivals like the Jambay Lhakhang Drup.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Marcus%20Westberg%20Bumthang%20202316.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Marcus%20Westberg%20Bumthang%20202316.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/_SCH5022_V2_FINAL_RGB.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile1.jpg",
        ],
        highlights: [
          "Home to some of Bhutan's oldest temples and monasteries",
          "Scenic landscapes with rolling hills and fertile valleys",
          "Rich cultural heritage and traditional handicrafts",
          "Famous for its cheese production and local festivals",
          "Bumthang is a center for pilgrimage and spiritual practices",
        ],
        bestTimeToVisit:
          "Spring (March-May) for blooming flowers and pleasant weather, or autumn (September-November) for clear skies and colorful foliage. The annual Jambay Lhakhang Drup festival in October is a highlight.",
        howToReach:
          "Bumthang is accessible by road from Thimphu (approximately 8-10 hours) or by domestic flights from Paro. The valley is well-connected by a network of roads, making it easy to explore the surrounding areas.",
      },
    ],
  },

  {
    id: 5,
    name: "Activities",
    description:
      "Engage in exciting adventures from trekking and cycling to cultural experiences",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/buddha-point%20by%20Amp%20Sripimanwat.jpg",
    items: [
      {
        id: 501,
        name: "Trekking",
        location: "Throughout Bhutan",
        description:
          "Experience Bhutan's diverse landscapes on foot through various trekking routes",
        fullDescription:
          "Trekking in Bhutan offers a unique opportunity to experience the country's pristine landscapes, diverse ecosystems, and remote villages far from the typical tourist trails. From the challenging 25-day Snowman Trek, considered one of the world's most difficult, to shorter 3-5 day adventures like the Druk Path Trek, Bhutan caters to all experience levels. These journeys take you through dense forests, alpine meadows, high mountain passes, and remote valleys, with breathtaking views of the Himalayan peaks. Along the way, encounter diverse wildlife, visit isolated monasteries, and engage with local communities practicing age-old traditions. Bhutanese treks are fully supported with guides, cooks, and pack animals, ensuring a comfortable experience while adhering to sustainable tourism practices.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/spring-MarcusWestberg.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/spring-MarcusWestberg.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Pelala-Mountain-Pass-Trans-Bhutan-Trail-by-Alicia-Warner-4.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Laya2.jpg",
        ],
        highlights: [
          "Wide range of routes for all experience levels",
          "Pristine natural environments with minimal tourist traffic",
          "Cultural interactions with remote mountain communities",
          "Spectacular views of Himalayan peaks including Jomolhari and Gangkar Puensum",
          "Full service trekking with experienced guides and support staff",
        ],
        bestTimeToVisit:
          "March to May and September to November offer the best weather conditions for trekking, with clear skies and moderate temperatures. High-altitude treks are best in October-November when visibility is excellent.",
        howToReach:
          "Most treks begin from major towns like Paro, Thimphu, Punakha, or Bumthang. Transportation to trailheads is typically arranged as part of a trekking package through a licensed Bhutanese tour operator.",
      },
      {
        id: 502,
        name: "Cycling",
        location: "Throughout Bhutan",
        description:
          "Explore Bhutan's dramatic landscapes and rural countryside on two wheels",
        fullDescription:
          "Cycling in Bhutan presents an exhilarating way to experience the country's dramatic landscapes, from challenging mountain passes to gentle valley roads. The kingdom's varied terrain offers routes for all cycling abilities, with the east-west highway providing a classic journey through changing landscapes, cultures, and climates. Mountain biking enthusiasts can tackle purpose-built trails with technical sections and thrilling descents, while casual cyclists might prefer the gentler routes through valleys like Paro, Punakha, and Bumthang. Cycling allows intimate encounters with rural Bhutanese life, offering opportunities to stop at villages, monasteries, and scenic viewpoints that might be missed when traveling by car. The relatively light traffic on Bhutan's roads makes cycling safe and enjoyable, though the mountainous terrain demands good fitness and preparation.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/IMG_1429.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/IMG_1429.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/summer-by-Marcus-Westberg.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/destination-experience-by-kezang-choden.jpg",
        ],
        highlights: [
          "Diverse routes from challenging mountain passes to gentle valley roads",
          "Intimate experience of rural Bhutanese life and landscapes",
          "Opportunities to visit small villages and monasteries off the main tourist circuit",
          "Guided cycling tours with vehicle support for comfort and safety",
          "Environmentally sustainable way to explore Bhutan's natural beauty",
        ],
        bestTimeToVisit:
          "March to May and September to November offer the most pleasant cycling conditions with mild temperatures and minimal rainfall. Avoid the monsoon season (June-August) when roads can be slippery and landslides common.",
        howToReach:
          "Most cycling tours start from Paro or Thimphu. Quality mountain bikes can be rented from tour operators in major towns, though serious cyclists may prefer to bring their own bikes (check with your tour operator about import regulations).",
      },
      {
        id: 503,
        name: "Rafting",
        location: "Pho Chhu, Mo Chhu, and Paro Chhu Rivers",
        description:
          "Experience thrilling white water adventures on Bhutan's pristine rivers",
        fullDescription:
          "White water rafting in Bhutan is an emerging adventure activity that combines adrenaline-pumping action with spectacular scenery. The kingdom's pristine rivers, fed by glacial meltwater from the Himalayas, offer exciting rapids ranging from gentle Class I to challenging Class IV+. The most popular rafting rivers include the Pho Chhu (Father River) and Mo Chhu (Mother River) in Punakha, and the Paro Chhu near Paro. These journeys take you through deep gorges, past traditional villages, and alongside ancient fortresses like the magnificent Punakha Dzong. Beyond the thrill of navigating rapids, rafting provides unique perspectives of Bhutan's landscapes inaccessible by road, with opportunities to spot wildlife along the riverbanks. All rafting expeditions are led by professional guides with international safety standards, suitable for both beginners and experienced rafters depending on the chosen river section.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong2.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
        ],
        highlights: [
          "Thrilling rapids ranging from gentle Class I to challenging Class IV+",
          "Unique riverside views of dzongs, villages, and untouched landscapes",
          "Professional guides with international safety standards",
          "Options suitable for both beginners and experienced rafters",
          "Pristine rivers with crystal clear waters and dramatic mountain backdrops",
        ],
        bestTimeToVisit:
          "October to April is the ideal period for rafting when river levels are optimal and water is clearer. March-April offers warmer temperatures, while November-December provides the clearest water conditions.",
        howToReach:
          "Rafting expeditions typically depart from Punakha (for Mo Chhu and Pho Chhu) or Paro (for Paro Chhu). Transportation to put-in points is usually included in rafting packages arranged through licensed Bhutanese tour operators.",
      },
      {
        id: 504,
        name: "Archery",
        location: "Throughout Bhutan",
        description:
          "Try your hand at Bhutan's national sport with traditional bamboo bows",
        fullDescription:
          "Archery (Datse) is not just a sport in Bhutan but a vital part of the country's cultural identity, serving as the national sport and a popular pastime across all social strata. Traditional Bhutanese archery uses bamboo bows and arrows, with targets placed at distances of 130 meters (considerably farther than Olympic standards). Modern competitions also incorporate compound bows and sophisticated equipment. What makes Bhutanese archery unique is its festive atmosphere—teams dress in traditional attire, perform victory songs and dances, and engage in good-natured taunting of opponents. Spectators gather to watch, with frequent breaks for food, drinks, and socializing. Visitors can observe local tournaments in progress throughout the country or participate in introductory sessions at designated archery ranges, where instructors provide basic training using traditional equipment, offering a hands-on experience of this quintessential Bhutanese tradition.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/_SCH5022_V2_FINAL_RGB.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/_SCH5022_V2_FINAL_RGB.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu2.jpg",
        ],
        highlights: [
          "Experience Bhutan's national sport and cultural tradition",
          "Learn basics of traditional bamboo bow archery from local experts",
          "Witness the unique festive atmosphere of Bhutanese archery tournaments",
          "Participate in a communal activity enjoyed across all levels of Bhutanese society",
          "Opportunity for cultural exchange through friendly competition",
        ],
        bestTimeToVisit:
          "Archery is practiced year-round in Bhutan. Major tournaments coincide with local festivals and national holidays, particularly in winter months (November-February) when farming activities are minimal.",
        howToReach:
          "Archery grounds (bha cho) can be found in every town and most villages across Bhutan. Tourist-oriented archery experiences are available in major towns like Thimphu, Paro, and Punakha, easily arranged through tour operators or hotels.",
      },
      {
        id: 505,
        name: "Hot Stone Bath",
        location: "Throughout Bhutan",
        description:
          "Experience traditional Bhutanese wellness therapy with mineral-rich hot stones",
        fullDescription:
          "The hot stone bath (Dotsho) is an ancient Bhutanese healing practice that combines the therapeutic properties of medicinal herbs with heat-releasing river stones. This traditional therapy begins with large river stones being heated in a fire until red hot, then carefully placed in a wooden tub filled with water and Artemisia leaves (mugwort), releasing minerals and creating a therapeutic steaming bath. The wooden tubs are typically divided into two sections—one containing the hot stones separated by a wooden partition from where the bather sits. The experience is often set in traditional farmhouses or specially designed bathhouses with views of rural landscapes. Beyond its relaxing properties, hot stone baths are believed to help treat joint pains, hypertension, stomach disorders, and arthritis. This authentic wellness experience provides insight into Bhutanese traditional medicine practices while offering deep relaxation after trekking or sightseeing.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/winter-scarlette-DG.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/winter-scarlette-DG.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Laya2.jpg",
        ],
        highlights: [
          "Authentic traditional Bhutanese healing practice",
          "Therapeutic benefits from mineral-rich hot stones and medicinal herbs",
          "Often experienced in traditional farmhouse settings",
          "Perfect relaxation after hiking or sightseeing activities",
          "Insights into Bhutanese traditional medicine and wellness practices",
        ],
        bestTimeToVisit:
          "Hot stone baths are available year-round but are especially enjoyable during cooler months (October to April). Winter evenings (December-February) offer the most authentic experience when hot stone baths are a regular part of rural Bhutanese life.",
        howToReach:
          "Hot stone bath experiences are available at selected farmstays, resorts, and wellness centers throughout Bhutan, particularly in rural areas near Paro, Thimphu, Punakha, and Bumthang. Your tour operator can arrange this experience as part of your itinerary.",
      },
    ],
  },
  {
    id: 6,
    name: "Festivals",
    description:
      "Witness vibrant traditional festivals with masked dances and cultural celebrations",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
    items: [
      {
        id: 601,
        name: "Thimphu Tshechu",
        location: "Thimphu, Bhutan",
        description:
          "Bhutan's largest festival featuring spectacular masked dances and cultural displays",
        fullDescription:
          "Thimphu Tshechu is one of Bhutan's most spectacular and popular festivals, held annually in the capital city for three days. Dating back to the 17th century, this grand celebration honors Guru Rinpoche, who brought Buddhism to Bhutan. The festival features elaborate masked dances (cham) performed by monks and laypeople in vibrant costumes, each dance telling stories from Buddhist teachings and Bhutanese folklore. The highlight is the unfurling of the massive Thongdrel (sacred scroll painting) before dawn on the final day, believed to cleanse sins and bring blessings to all who view it. Beyond the religious significance, Thimphu Tshechu serves as a social gathering where Bhutanese from all walks of life dress in their finest traditional attire, socialize, and enjoy performances. For visitors, it offers an extraordinary window into Bhutanese culture, religious traditions, and communal spirit.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/_SCH5022_V2_FINAL_RGB.jpg",
        ],
        highlights: [
          "Spectacular masked dances with ancient religious significance",
          "Viewing of the sacred Thongdrel at dawn on the final day",
          "Bhutanese people in traditional dress creating a colorful atmosphere",
          "Cultural performances including folk dances and music",
          "Festive market atmosphere with local food and handicrafts",
        ],
        bestTimeToVisit:
          "Thimphu Tshechu is held in September or October (varying according to the lunar calendar). Plan to arrive at least a day before the festival begins and stay for the full three days to experience all major performances.",
        howToReach:
          "Thimphu is Bhutan's capital city, approximately 1.5 hours' drive from Paro International Airport. The festival takes place at Tashichho Dzong and the surrounding areas. Accommodations fill quickly during the festival period, so early booking is essential.",
      },
      {
        id: 602,
        name: "Paro Tshechu",
        location: "Paro, Bhutan",
        description:
          "Historic festival featuring the unfurling of the sacred Thangka at dawn",
        fullDescription:
          "Paro Tshechu, established in the 17th century during the time of Zhabdrung Ngawang Namgyal, is one of Bhutan's most significant religious festivals. Held annually at Paro Dzong (Rinpung Dzong), this five-day celebration draws thousands of locals and international visitors alike. The festival features spectacular masked dances performed by monks in colorful costumes and intricate masks, each dance representing important Buddhist teachings and historical events. The most anticipated moment occurs before dawn on the final day when the enormous Thongdrel (sacred scroll painting) of Guru Rinpoche is unfurled for public viewing. Witnessing this ritual is believed to cleanse one's sins and bring merit. Beyond the religious ceremonies, Paro Tshechu is a vibrant social event where locals dress in their finest traditional attire, share meals, and celebrate together, offering visitors a profound glimpse into Bhutanese cultural and spiritual traditions.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Dochula%20Pass%20by%20Carissa%20Nimah.jpg",
        ],
        highlights: [
          "Mesmerizing masked dances with centuries-old religious significance",
          "Pre-dawn unfurling of the massive Thongdrel (sacred scroll painting)",
          "Spectacular setting in the historic Rinpung Dzong",
          "Opportunity to see Bhutanese people in their finest traditional dress",
          "Festival market with local crafts, food, and traditional games",
        ],
        bestTimeToVisit:
          "Paro Tshechu is held in March or April (varying according to the lunar calendar). Plan to stay for the full five days to experience all major performances, with the Thongdrel unveiling on the final day being the most significant event.",
        howToReach:
          "Paro is home to Bhutan's only international airport. The festival takes place at Rinpung Dzong (Paro Dzong), within walking distance from Paro town. Accommodation in Paro books up quickly during the festival, so advance reservations are essential.",
      },
      {
        id: 603,
        name: "Jambay Lhakhang Drup",
        location: "Bumthang, Bhutan",
        description:
          "Unique festival featuring a midnight naked fire ritual and traditional masked dances",
        fullDescription:
          "Jambay Lhakhang Drup is one of Bhutan's most unique and mystical festivals, held at one of the kingdom's oldest temples, reportedly built in the 7th century by the Tibetan king Songtsen Gampo. What distinguishes this festival is the mesmerizing Mewang (Fire Ceremony), where locals run around a large bonfire in the temple courtyard at midnight, traditionally performed naked or in minimal clothing to purify sins and bring fertility. Beyond this distinctive ritual, the five-day festival features elaborate masked dances depicting the life of Guru Rinpoche and the subjugation of demons, traditional folk dances, and the creation of intricate sand mandalas by monks. The festival commemorates the establishment of the temple and celebrates the triumph of Buddhism over evil forces. The remote location in Bumthang Valley and the festival's unique elements make it a profound cultural experience, offering insights into Bhutan's ancient animistic traditions that predate Buddhism.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Marcus%20Westberg%20Bumthang%20202316.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu2.jpg",
        ],
        highlights: [
          "Unique Mewang (Fire Ceremony) performed at midnight",
          "Setting in one of Bhutan's oldest and most sacred temples",
          "Elaborate masked dances depicting Buddhist teachings and legends",
          "Blend of pre-Buddhist and Buddhist traditions",
          "Remote location in beautiful Bumthang Valley away from major tourist centers",
        ],
        bestTimeToVisit:
          "Jambay Lhakhang Drup is typically held in October or November according to the lunar calendar. The festival lasts for five days, with the Fire Ceremony usually taking place on the evening of the second day.",
        howToReach:
          "Bumthang is located in central Bhutan, approximately 8 hours' drive from Thimphu. Domestic flights operate between Paro and Bumthang's Bathpalathang Airport, significantly reducing travel time. Accommodation in Bumthang is limited, so early booking is essential during the festival period.",
      },
      {
        id: 604,
        name: "Punakha Drubchen",
        location: "Punakha, Bhutan",
        description:
          "Historical festival commemorating Bhutan's victory over Tibetan invaders",
        fullDescription:
          "Punakha Drubchen is a unique festival that commemorates Bhutan's victory over Tibetan forces in the 17th century, a pivotal moment in the country's history that demonstrated its sovereignty. Unlike other religious festivals, this celebration includes a dramatic recreation of the battle scene, with local men dressed as Bhutanese warriors and monks, charging down from Punakha Dzong in a spectacular display. Established by Zhabdrung Ngawang Namgyal himself, the founder of Bhutan as a unified state, this festival holds special historical significance. Beyond the battle reenactment, the festival features traditional masked dances, religious rituals, and folk performances within the magnificent setting of Punakha Dzong—Bhutan's most beautiful fortress situated at the confluence of two rivers. For visitors, Punakha Drubchen offers not just cultural immersion but a vivid history lesson that explains Bhutan's fierce sense of independence and national identity that persists to this day.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu3.jpg",
        ],
        highlights: [
          "Dramatic reenactment of the historical battle against Tibetan forces",
          "Spectacular setting at Punakha Dzong, Bhutan's most beautiful fortress",
          "Unique historical focus compared to other primarily religious festivals",
          "Traditional masked dances and cultural performances",
          "Less crowded than major festivals like Thimphu and Paro Tshechu",
        ],
        bestTimeToVisit:
          "Punakha Drubchen is usually held in February or March according to the lunar calendar. The festival lasts for three days, with the battle reenactment typically occurring on the second day.",
        howToReach:
          "Punakha is approximately 3 hours' drive from Thimphu, crossing the scenic Dochula Pass. There are no direct flights to Punakha, so visitors typically arrive by road as part of an organized tour. Accommodations in Punakha range from luxury resorts to traditional farmhouse stays.",
      },
    ],
  },
  {
    id: 7,
    name: "Nature & Ecotourism",
    description:
      "Explore Bhutan's pristine wilderness, biodiversity hotspots, and conservation successes",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile16.jpg",
    items: [
      {
        id: 701,
        name: "Jigme Dorji National Park",
        location: "Northwestern Bhutan",
        description:
          "Bhutan's largest protected area with diverse ecosystems and endangered wildlife",
        fullDescription:
          "Jigme Dorji National Park, Bhutan's largest protected area covering 4,316 square kilometers, represents a remarkable conservation success story and exemplifies the country's commitment to environmental preservation. This vast wilderness stretches from warm broadleaf forests to permanent ice fields above 7,000 meters, encompassing six major ecosystems. The park serves as a critical habitat for numerous endangered species, including the snow leopard, takin (Bhutan's national animal), blue sheep, and over 300 bird species. Sacred mountains like Jomolhari (7,314m) and Gangchenta (6,840m) rise within its boundaries, while pristine rivers originate from its glaciers, eventually joining the Brahmaputra system. Beyond its ecological significance, the park contains significant cultural sites, ancient trade routes, and remote villages where traditional lifestyles persist. For ecotourists, the park offers world-class trekking routes, wildlife viewing opportunities, and interactions with communities practicing sustainable living in harmony with nature.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/spring-MarcusWestberg.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/spring-MarcusWestberg.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Laya2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/by%20Matt%20Dutile4.jpg",
        ],
        highlights: [
          "Stunning diversity of landscapes from subtropical forests to alpine peaks",
          "Habitat for endangered species including snow leopard and takin",
          "Sacred mountains including Jomolhari with strong cultural significance",
          "Traditional villages practicing sustainable lifestyles",
          "Numerous trekking routes including the popular Jomolhari Trek",
        ],
        bestTimeToVisit:
          "April to June and September to November offer the best conditions for trekking and wildlife viewing. Spring (April-May) brings rhododendron blooms at higher elevations, while autumn (September-November) offers clear mountain views.",
        howToReach:
          "Parts of the park are accessible from Thimphu, Paro, and Punakha. The most visited sections can be reached by road, with park entrance points at Damji (from Punakha) and near Drugyel Dzong (from Paro). Multi-day treks require permits and must be arranged through licensed tour operators.",
      },
      {
        id: 702,
        name: "Royal Manas National Park",
        location: "Southern Bhutan",
        description:
          "Bhutan's oldest protected area with extraordinary biodiversity and tropical ecosystems",
        fullDescription:
          "Royal Manas National Park, established in 1966 as Bhutan's first protected area, represents the kingdom's most biologically diverse conservation zone. Located in southern Bhutan along the border with India's Manas Tiger Reserve, this UNESCO World Heritage Site covers 1,057 square kilometers ranging from subtropical forests to alpine meadows. The park boasts extraordinary biodiversity with over 900 plant species, 60 mammal species (including Bengal tiger, Asian elephant, greater one-horned rhinoceros, and clouded leopard), and more than 500 bird species. Multiple rivers flowing through the park create a rich aquatic ecosystem supporting the endangered golden mahseer fish and Gangetic dolphin. Royal Manas demonstrates successful transboundary conservation with India, forming a critical wildlife corridor in the Eastern Himalayas. For visitors, the park offers wildlife safaris, guided nature walks, birdwatching, and boat trips along the Manas River, all managed with strict sustainable tourism principles to minimize environmental impact.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/summer-by-Marcus-Westberg.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/summer-by-Marcus-Westberg.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile16.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
        ],
        highlights: [
          "Exceptional biodiversity with multiple endangered species",
          "Transboundary conservation area with India's Manas Tiger Reserve",
          "Diverse ecosystems from subtropical forests to alpine meadows",
          "Opportunities for wildlife viewing, including tigers and elephants",
          "Traditional communities living sustainably on the park periphery",
        ],
        bestTimeToVisit:
          "November to April is ideal when the weather is dry, and animals frequently visit water sources. March-April offers excellent birdwatching opportunities, while November-February provides the best wildlife viewing conditions.",
        howToReach:
          "Royal Manas is accessible from Gelephu in southern Bhutan, approximately an 8-hour drive from Thimphu. Access to the park is strictly controlled, and all visits must be arranged through licensed Bhutanese tour operators with special permits.",
      },
      {
        id: 703,
        name: "Black-Necked Crane Centre",
        location: "Phobjikha Valley, Bhutan",
        description:
          "Conservation center dedicated to protecting Bhutan's sacred winter visitors",
        fullDescription:
          "The Black-Necked Crane Information Centre in Phobjikha Valley stands at the heart of Bhutan's conservation efforts for these globally vulnerable birds that hold deep cultural and spiritual significance in Bhutanese culture. Established in 2003 by the Royal Society for Protection of Nature (RSPN), the center serves as both a research facility and visitor education hub. Each winter, approximately 300-500 black-necked cranes migrate from the Tibetan Plateau to Phobjikha's wetlands, where they're welcomed with the Crane Festival and considered harbingers of good fortune. The center features interactive displays explaining crane biology, migration patterns, and local conservation initiatives, along with powerful spotting scopes allowing visitors to observe the birds without disturbance. A growing success story, the center demonstrates how conservation, community development, and sustainable tourism can work in harmony. Beyond crane viewing, visitors can explore a network of nature trails through the valley, engage with community-based tourism initiatives, and learn about traditional beliefs that have protected these birds for centuries.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile1.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Phobjika%20by%20Matt%20Dutile16.jpg",
        ],
        highlights: [
          "Observation of endangered black-necked cranes in their natural habitat",
          "Educational exhibits on crane biology, migration, and conservation",
          "Nature trails through the wetlands and valley ecosystem",
          "Insights into traditional Bhutanese conservation practices",
          "Community-based tourism supporting local conservation efforts",
        ],
        bestTimeToVisit:
          "November to February when the black-necked cranes are present in the valley. The annual Black-Necked Crane Festival in November celebrates their arrival with masked dances and cultural performances.",
        howToReach:
          "The Black-Necked Crane Information Centre is located in Phobjikha Valley, approximately a 3-hour drive from Punakha or 5-6 hours from Thimphu. The center is within walking distance of Gangtey village and monastery.",
      },
      {
        id: 704,
        name: "Bumdeling Wildlife Sanctuary",
        location: "Northeastern Bhutan",
        description:
          "Remote sanctuary known for wintering black-necked cranes and pristine wilderness",
        fullDescription:
          "Bumdeling Wildlife Sanctuary, spanning 1,545 square kilometers in remote northeastern Bhutan, represents one of the kingdom's least disturbed protected areas. This pristine wilderness encompasses a remarkable range of ecosystems, from alpine meadows above 5,000 meters to warm broadleaf forests at just 1,500 meters. The sanctuary serves as a vital winter habitat for about 150 endangered black-necked cranes, second only to Phobjikha Valley. Beyond the cranes, this biodiversity hotspot harbors rare wildlife including snow leopards, tigers, red pandas, and over 300 bird species. Sacred sites within the sanctuary, such as Rigsum Goempa monastery and Singye Dzong, highlight the traditional Bhutanese integration of spiritual and natural conservation. Unlike more developed conservation areas, Bumdeling offers a truly off-the-beaten-path experience where traditional villages practice sustainable agriculture and maintain ancient customs. Visitors can explore well-maintained hiking trails, participate in community-based tourism activities, and experience conservation in its most authentic form, where nature protection stems from both modern science and centuries-old Buddhist respect for all living beings.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/autumn-scarlette-dg.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/autumn-scarlette-dg.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/winter-scarlette-DG.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/th/phobjikha3.jpg",
        ],
        highlights: [
          "Remote wilderness experience away from typical tourist circuits",
          "Second largest wintering ground for black-necked cranes",
          "Exceptional biodiversity with numerous endangered species",
          "Sacred sites including ancient Buddhist meditation caves",
          "Traditional villages practicing sustainable agriculture and forestry",
        ],
        bestTimeToVisit:
          "October to April when the weather is mild and black-necked cranes are present (November-February). Spring (March-April) offers excellent birdwatching and wildflower displays.",
        howToReach:
          "Bumdeling is located in Trashiyangtse district in northeastern Bhutan. The sanctuary is approximately a 2-day drive from Thimphu, often broken up with an overnight stay in Mongar or Trashigang. The remoteness requires thorough planning with a licensed tour operator.",
      },
    ],
  },
  {
    id: 8,
    name: "Popular Places",
    description:
      "Visit Bhutan's most iconic destinations admired by visitors from around the world",
    image:
      "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/thimphu-dzong-Ben-Richards.jpg",
    items: [
      {
        id: 801,
        name: "Buddha Dordenma Statue",
        location: "Thimphu, Bhutan",
        description:
          "Massive gilded Buddha statue overlooking the capital city with spectacular views",
        fullDescription:
          "The Buddha Dordenma, one of the largest Buddha statues in the world, sits majestically upon a hillside overlooking Thimphu valley, creating an unforgettable first impression for many visitors to Bhutan. Standing 51.5 meters (169 feet) tall, this massive bronze statue is gilded in gold and houses over 125,000 smaller Buddha statues within its interior meditation hall, each made of bronze and also gilded. Completed in 2015 to celebrate the 60th anniversary of the fourth King Jigme Singye Wangchuck, the statue fulfills an ancient prophecy from the 8th century by the renowned Buddhist master Padmasambhava, who predicted a large Buddha would be built in the region to bestow blessings and peace. Beyond its religious significance, the site offers spectacular panoramic views of Thimphu valley and the surrounding Himalayan mountains. The peaceful atmosphere, beautiful landscaped gardens, and the sheer scale of the statue create a profound experience for both Buddhist pilgrims and curious travelers, making it one of Bhutan's most photographed landmarks.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/buddha-point%20by%20Amp%20Sripimanwat.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/buddha-point%20by%20Amp%20Sripimanwat.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/thimphu-dzong-Ben-Richards.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/story%20image%201.jpg",
        ],
        highlights: [
          "One of the world's largest Buddha statues at 51.5 meters tall",
          "Houses 125,000 smaller Buddha statues inside the meditation hall",
          "Spectacular panoramic views of Thimphu city and valley",
          "Beautiful gardens and peaceful environment for reflection",
          "Fulfillment of a 1,300-year-old prophecy with deep spiritual significance",
        ],
        bestTimeToVisit:
          "The statue is impressive year-round. Morning visits (8-10 AM) offer clear mountain views and perfect lighting for photography, while sunset visits provide dramatic lighting on the golden statue. October-November and March-April offer the clearest skies.",
        howToReach:
          "Located about 15 minutes' drive from downtown Thimphu. Taxis can easily take visitors to the site, or it can be included in any Thimphu sightseeing itinerary. A moderate walk up steps is required from the parking area to reach the statue.",
      },
      {
        id: 802,
        name: "Tashichho Dzong",
        location: "Thimphu, Bhutan",
        description:
          "Magnificent fortress housing the government and religious center of Bhutan",
        fullDescription:
          "Tashichho Dzong, meaning 'Fortress of the Glorious Religion,' stands as an impressive symbol of Bhutan's unique dual system of government, housing both religious and administrative centers of the kingdom. Originally built in 1641 and reconstructed in its current form in the 1960s, this massive structure dominates the northern end of Thimphu city with its whitewashed walls, golden roofs, and intricate woodwork. As the seat of the Civil Government and the Central Monastic Body, the dzong serves as the office of the King, the Throne Room, and government ministries, while also containing the summer residence of the Je Khenpo (Chief Abbot) and the main monastery. Surrounding the dzong are beautifully maintained gardens, particularly spectacular when the jacaranda trees bloom with purple flowers in spring. In the evening, the fortress is illuminated with soft lighting, creating a magical atmosphere. For visitors, exploring Tashichho Dzong offers insights into Bhutan's governance, religious practices, and architectural traditions, making it an essential stop on any Thimphu itinerary.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/thimphu-dzong-Ben-Richards.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/thimphu-dzong-Ben-Richards.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Thimphu%20tshechu2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/buddha-point%20by%20Amp%20Sripimanwat.jpg",
        ],
        highlights: [
          "Impressive architecture showcasing traditional Bhutanese design",
          "Seat of the Civil Government and Central Monastic Body",
          "Beautiful courtyards, assembly halls, and temples within the complex",
          "Meticulously maintained gardens surrounding the fortress",
          "Evening illumination creating a magical atmosphere",
        ],
        bestTimeToVisit:
          "The dzong is open to visitors after 5 PM on weekdays and throughout the day on weekends. Spring (April-May) offers beautiful blooming jacaranda trees, while October-November provides clear weather and comfortable temperatures.",
        howToReach:
          "Located at the northern end of Thimphu city, the dzong is easily accessible by taxi or as part of organized city tours. Visitors must dress respectfully with shoulders and knees covered to enter the dzong.",
      },
      {
        id: 803,
        name: "National Memorial Chorten",
        location: "Thimphu, Bhutan",
        description:
          "Sacred monument and circumambulation site for locals and visitors alike",
        fullDescription:
          "The National Memorial Chorten, with its distinctive white structure and golden spire, stands as one of Thimphu's most visible landmarks and a central part of daily religious life for local residents. Built in 1974 in memory of the Third King, Jigme Dorji Wangchuck (known as the Father of Modern Bhutan), this stupa-style monument does not contain actual remains but rather symbolizes the presence of the Buddha and serves as a memorial to world peace. Unlike typical stupas, visitors can enter the ground floor to view elaborate religious paintings and complex tantric statues representing deities that guide souls after death. The monument's most striking feature is the constant flow of people circumambulating the chorten throughout the day—elderly Bhutanese spinning prayer wheels, young professionals stopping on their way to work, monks chanting prayers, and visitors absorbing the deeply spiritual atmosphere. This living tradition provides a fascinating window into everyday Bhutanese religious practices where ancient devotion seamlessly blends with contemporary life, making it not just a monument but an active spiritual center and community gathering place.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Bhutan%20Flower%20Show2.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/Bhutan%20Flower%20Show2.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/thimphu-dzong-Ben-Richards.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/_SCH5022_V2_FINAL_RGB.jpg",
        ],
        highlights: [
          "Active spiritual site with constant flow of local worshippers",
          "Opportunity to observe daily Buddhist practices",
          "Interior shrines with complex religious artwork and statues",
          "Built in honor of the Third King of Bhutan",
          "Vibrant community atmosphere with people of all ages participating",
        ],
        bestTimeToVisit:
          "Open year-round, with early mornings (6-8 AM) offering the most authentic experience of local devotees starting their day with prayers. The chorten is particularly active during religious days according to the Bhutanese lunar calendar.",
        howToReach:
          "Centrally located in Thimphu, the Memorial Chorten is within walking distance from most hotels in the downtown area. Taxis can easily take visitors to the site, and it's included in all standard Thimphu sightseeing itineraries.",
      },
      {
        id: 804,
        name: "Rinpung Dzong",
        location: "Paro, Bhutan",
        description:
          "Iconic fortress showcasing classical Bhutanese architecture and religious importance",
        fullDescription:
          "Rinpung Dzong ('Fortress on a Heap of Jewels') stands as one of Bhutan's most iconic and photogenic monuments, its massive whitewashed walls rising dramatically above Paro valley. Built in 1644 by Zhabdrung Ngawang Namgyal on the foundation of a monastery established in 1646, this impressive fortress houses the district administrative offices and Paro's monastic body. The dzong showcases classical Bhutanese architecture at its finest, with towering exterior walls narrowing toward the top and ornately carved woodwork decorating windows, doors, and balconies, all constructed without a single nail. Inside, visitors can explore spacious courtyards, administrative offices, and the monk's quarters, while admiring spectacular murals depicting Buddhist teachings and traditions. Each spring, the dzong's courtyards come alive during the colorful Paro Tshechu festival. A covered wooden bridge (Nyamai Zampa) built in traditional cantilever style crosses the river below the dzong, adding to its picturesque setting. For many visitors, their first view of Rinpung Dzong, often framed against the backdrop of Mount Chomolhari on clear days, becomes one of the most memorable images of their Bhutan journey.",
        image:
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
        gallery: [
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/taktshang4.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/punakhadzong3.jpg",
          "https://snapsea.fra1.cdn.digitaloceanspaces.com/d8e971d9-661b-4f90-bc38-17817c258b35/thimphu-dzong-Ben-Richards.jpg",
        ],
        highlights: [
          "Spectacular example of traditional Bhutanese dzong architecture",
          "Beautiful murals, carvings, and courtyards within the complex",
          "Picturesque setting overlooking Paro valley with mountain backdrop",
          "Traditional covered wooden bridge (Nyamai Zampa)",
          "Venue for the vibrant annual Paro Tshechu festival in spring",
        ],
        bestTimeToVisit:
          "Open year-round with spring (March-May) and autumn (September-November) offering the best weather. Visit early in the morning for the best light for photography and fewer visitors. The Paro Tshechu in spring (typically March/April) provides a particularly vibrant experience.",
        howToReach:
          "Located just above Paro town, the dzong is approximately 10 minutes' drive from Paro International Airport. Visitors can walk up a short slope from the parking area to reach the entrance. Proper dress (shoulders and knees covered) is required to enter.",
      },
    ],
  },
];
