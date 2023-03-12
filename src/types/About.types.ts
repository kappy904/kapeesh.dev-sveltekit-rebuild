export interface Hobby {
  imagesCollection: any[];
  items: any[];
  images?: string[] | undefined;
  name: string;
  title: string;
  blurb: string;
  lInk: string;
  json: string[];
  hobbies: string[];
}

export interface Youtube {
  title: string;
  description: string;
  videoUrl: string;
}

export interface AboutData {
  youtube: Youtube,
  hobby: Hobby,
  hobbie: Hobby
}
