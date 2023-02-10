import { loadPhotosActionCreator } from "./loadPhotosActionCreator";

const photos = [
  { id: "", alt: "", url: "", tags: [], photographer: "" },
  { id: "", alt: "", url: "", tags: [], photographer: "" },
  { id: "", alt: "", url: "", tags: [], photographer: "" },
];

describe("Given a loadPhotosActionCreator function", () => {
  describe("When it receives an array of photos data", () => {
    test("Then it should return an action object with property 'type'", () => {
      const result = loadPhotosActionCreator(photos);

      expect(result).toHaveProperty("type");
    });

    test("Then it should return an action object with property 'payload'", () => {
      const result = loadPhotosActionCreator(photos);

      expect(result).toHaveProperty("payload");
    });
  });
});
