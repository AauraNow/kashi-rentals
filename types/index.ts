export interface Location {
  name: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  popularRoutes: {
    destination: string;
    distance: string;
    time: string;
  }[];
  landmarks: {
    name: string;
    distance: string;
  }[];
  whyRentHere: string[];
  idealFor: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  keywords: string[];
}

export interface Vehicle {
  name: string;
  type: 'scooty' | 'bike';
  pricePerDay: number;
  image?: string;
  features: string[];
}

export interface Pricing {
  duration: string;
  scootyPrice: number;
  bikePrice: number;
  deposit: number;
}
