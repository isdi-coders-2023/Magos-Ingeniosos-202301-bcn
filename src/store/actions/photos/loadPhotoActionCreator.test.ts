import loadPhotoActionCreator from "./loadPhotoActionCreator";

const photo = {
  id: "",
  description: "",
  alt: "",
  url: "",
  tags: [],
  photographer: "",
  username: "",
};

describe("Given a loadPhotoActionCreator function", () => {
  describe("When it receives data of one photo", () => {
    test("Then it should return an action object with property 'type'", () => {
      const result = loadPhotoActionCreator(photo);

      expect(result).toHaveProperty("type");
    });

    test("Then it should return an action object with property 'payload'", () => {
      const result = loadPhotoActionCreator(photo);

      expect(result).toHaveProperty("payload");
    });
  });
});
