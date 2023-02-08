import { Photos } from "../data/types";
import PhotosContext from "../store/contexts/PhotosContext";

interface StoreStructure {
  dispatch: React.Dispatch<any>;
  photos: Photos;
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
    <PhotosContext.Provider value={mockStore}>
      {children}
    </PhotosContext.Provider>
  );
};

export default MockContextProvider;
