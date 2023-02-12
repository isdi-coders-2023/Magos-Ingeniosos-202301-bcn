import { PhotosStructure, PhotoStructure } from "../data/types";
import PhotosContext from "../store/contexts/photos/PhotosContext";
import UiContext from "../store/contexts/ui/UiContext";
import { mockUiStore } from "./mockStore";

interface StoreStructure {
  dispatch: React.Dispatch<any>;
  photos: PhotosStructure;
  dispatchDetail: React.Dispatch<any>;
  photo: PhotoStructure;
}
interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: StoreStructure;
}

const MockContextProvider = ({
  children,
  mockStore,
}: MockContextProviderProps): JSX.Element => {
  return (
    <UiContext.Provider value={mockUiStore}>
      <PhotosContext.Provider value={mockStore}>
        {children}
      </PhotosContext.Provider>
    </UiContext.Provider>
  );
};

export default MockContextProvider;
