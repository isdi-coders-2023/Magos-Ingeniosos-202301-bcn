import loadPhotoDetailActionCreator from "../../actions/photos/loadPhotoDetailActionCreator";
import { PhotoActionType } from "../../actions/photos/types";
import photoDetailReducer from "./photoDetailReducer";

const photo = {
  id: "",
  description: "",
  alt: "",
  url: "",
  tags: [],
  photographer: "",
  username: "",
};

describe("Given a photoDetailReducer function", () => {
  describe("When it receives data of one photo and no action", () => {
    test("Then it should return the same photo data unchanged", () => {
      const defaultAction = { type: PhotoActionType.default, payload: [] };

      const result = photoDetailReducer(photo, defaultAction);

      expect(result).toStrictEqual(photo);
    });
  });

  describe("When it receives data of one photo and a LoadPhotoAction", () => {
    test("Then it should return that photo", () => {
      const result = photoDetailReducer(
        photo,
        loadPhotoDetailActionCreator(photo)
      );

      expect(result).toStrictEqual(photo);
    });
  });
});
