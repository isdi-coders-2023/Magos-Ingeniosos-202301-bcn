import loadPhotoActionCreator from "../../actions/photos/loadPhotoActionCreator";
import { PhotoActionType } from "../../actions/photos/types";
import photoReducer from "./photoReducer";

const photo = {
  id: "",
  description: "",
  alt: "",
  url: "",
  tags: [],
  photographer: "",
  username: "",
};

describe("Given a photoReducer function", () => {
  describe("When it receives data of one photo and no action", () => {
    test("Then it should return the same photo data unchanged", () => {
      const defaultAction = { type: PhotoActionType.default, payload: [] };

      const result = photoReducer(photo, defaultAction);

      expect(result).toStrictEqual(photo);
    });
  });

  describe("When it receives data of one photo and a LoadPhotoAction", () => {
    test("Then it should return that photo", () => {
      const result = photoReducer(photo, loadPhotoActionCreator(photo));

      expect(result).toStrictEqual(photo);
    });
  });
});
