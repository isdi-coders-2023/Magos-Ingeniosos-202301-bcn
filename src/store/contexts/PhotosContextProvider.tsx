import PhotosContext from "./PhotosContext";

interface PhotosContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhotosContextProvider = ({
  children,
}: PhotosContextProviderProps): JSX.Element => {
  return <PhotosContext.Provider value={{}}>{children}</PhotosContext.Provider>;
};

export default PhotosContextProvider;
