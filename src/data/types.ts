interface PhotoTag {
  title: string;
}

export interface PhotoData {
  results: [
    {
      urls: {
        regular: string;
      };
      tags: PhotoTag[];
      user: {
        name: string;
      };
    }
  ];
}

export interface Photo {
  url: string;
  tags: string[];
  photographer: string;
}

export type PhotosData = PhotoData[];

export type Photos = Photo[];
