interface PhotoTag {
  title: string;
}

interface PhotoData {
  id: string;
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
  id: string;
  url: string;
  tags: string[];
  photographer: string;
}

export type PhotosData = PhotoData[];

export type PhotosStructure = PhotoStructure[];
