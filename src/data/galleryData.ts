// src/data/galleryData.ts

export interface PhotoCredit {
  id: number;
  image: string;
  title: string;
  location: string;
  photographer: string;
  source: string;
}

export const photoCredits: PhotoCredit[] = [
  {
    id: 1,
    image: "/public/paro-taktsang-MarcusWestberg.jpg",
    title: "Tiger's Nest Monastery",
    location: "Paro, Bhutan",
    photographer: "Marcus Westberg",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1625638332402-57211965d3c4",
    title: "Punakha Dzong",
    location: "Punakha, Bhutan",
    photographer: "Pema Gyalpo",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1609939006851-e4c4328598a9",
    title: "Dochula Pass",
    location: "Thimphu, Bhutan",
    photographer: "Karma Jigme",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1623677435560-ee1a346141b7",
    title: "Phobjikha Valley",
    location: "Wangdue, Bhutan",
    photographer: "Sonam Wangchuk",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1566553253535-2473cf16cf97",
    title: "Rural Bhutan",
    location: "Bumthang, Bhutan",
    photographer: "Tandin Dorji",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2",
    title: "Bhutanese Guide",
    location: "Thimphu, Bhutan",
    photographer: "Kinley Wangmo",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1599006934204-9e68d61ae8dd",
    title: "Prayer Flags",
    location: "Paro Valley, Bhutan",
    photographer: "Tshering Penjor",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724",
    title: "Spring Landscape",
    location: "Haa Valley, Bhutan",
    photographer: "Dorji Dema",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1558431382-27e303142255",
    title: "Traditional Architecture",
    location: "Punakha, Bhutan",
    photographer: "Tenzin Dorji",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1556759865-99c732035d5d",
    title: "Festival Dancer",
    location: "Paro, Bhutan",
    photographer: "Karma Yeshi",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1557394976-53b1eba4c016",
    title: "Mountain Village",
    location: "Laya, Bhutan",
    photographer: "Namgay Tshering",
    source: "Department of Tourism, Bhutan",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1591000849992-902c1804fb39",
    title: "Buddhism in Bhutan",
    location: "Thimphu, Bhutan",
    photographer: "Pema Dorji",
    source: "Department of Tourism, Bhutan",
  },
];
