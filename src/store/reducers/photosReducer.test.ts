import { loadPhotosActionCreator } from "../actions/loadPhotosActionCreator";
import { PhotoActionType } from "../actions/types";
import photosReducer from "../reducers/photosReducer";

const photos = [
  { url: "", tags: [], photographer: "" },
  { url: "", tags: [], photographer: "" },
  { url: "", tags: [], photographer: "" },
];
describe("Given a photosReducer function", () => {
  describe("When it receives an array of photos and no action", () => {
    test("Then it should return the same array of photos unchanged", () => {
      const defaultAction = { type: PhotoActionType.default, payload: [] };

      const result = photosReducer(photos, defaultAction);

      expect(result).toStrictEqual(photos);
    });
  });

  describe("When it receives an array of photos and a LoadPhotosAction", () => {
    test("Then it should return those photos", () => {
      const result = photosReducer(photos, loadPhotosActionCreator(photos));

      expect(result).toStrictEqual(photos);
    });
  });
});
