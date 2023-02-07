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

export interface Photo {
  url: string;
  tags: string[];
  photographer: string;
}

export type PhotosData = PhotoData[];

export type Photos = Photo[];
