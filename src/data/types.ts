interface PhotoTag {
  title: string;
}

export interface PhotoData {
  id: string;
  description: string;
  alt_description: string;
  urls: {
    small: string;
  };
  tags: PhotoTag[];
  user: {
    username: string;
    name: string;
  };
}

export interface PhotoDataList {
  results: PhotoData[];
}

export interface PhotoStructure {
  id: string;
  description: string;
  alt: string;
  url: string;
  tags: string[];
  username: string;
  photographer: string;
}

export type PhotosData = PhotoData[];

export type PhotosStructure = PhotoStructure[];
