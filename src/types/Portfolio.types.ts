export interface Portfolio {
  title: string;
  description: string;
  mediaCollection: string[];
  items: string[];
  learnings: string;
  awards: string;
  video: string;
  videoCover: string[];
}

export interface Clientlogo {
  clientLogos: object;
}


export interface PortfolioData {
  porfolios: Portfolio,
  clientLogos: Clientlogo
}
