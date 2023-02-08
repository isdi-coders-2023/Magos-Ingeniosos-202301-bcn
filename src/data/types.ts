interface PhotoTag {
  title: string;
}

interface PhotoData {
  urls: {
    regular: string;
  };
  tags: PhotoTag[];
  user: {
    name: string;
  };
}

export interface PhotoDataList {
  results: PhotoData[];
}

export interface PhotoStructure {
  url: string;
  tags: string[];
  photographer: string;
}

export type PhotosData = PhotoData[];

export type PhotosStructure = PhotoStructure[];
