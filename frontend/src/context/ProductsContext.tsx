import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
  useState,
} from "react";
import api from "../services/api";

type ProductsProviderProps = {
  children: ReactNode;
};

type ProductsContext = {
  isLoading: boolean;
  movieProductItems: any;
};

const ProductsContext = createContext({} as ProductsContext);

export function useProducts() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [movieProductItems, setMovieProductItems] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = useCallback(() => {
    setIsLoading(true);

    api
      .get("/products")
      .then((response) => {
        setMovieProductItems(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    let loaded = false;

    !loaded && getMovies();

    return () => {
      loaded = true;
    };
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        movieProductItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
