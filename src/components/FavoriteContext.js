// import React, { createContext, useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToFavorites, removeFromFavorites } from '../redux/favorite/favoritesSlice';

// const FavoriteContext = createContext();

// export const useFavorite = () => useContext(FavoriteContext);

// export const FavoriteProvider = ({ children }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector(state => state.favorites);

//   const addToFavoritesHandler = (product) => {
//     dispatch(addToFavorites(product));
//   };

//   const removeFromFavoritesHandler = (productId) => {
//     dispatch(removeFromFavorites(productId));
//   };

//   return (
//     <FavoriteContext.Provider value={{ favorites, addToFavorites: addToFavoritesHandler, removeFromFavorites: removeFromFavoritesHandler }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };









// ===================================
import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((product) => product.id !== productId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};