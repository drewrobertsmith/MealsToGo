import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); //set to empty array because we dont have favorites when we boot the app

  //take in restaurant we want to add, set favorites of the current favorites [...favorites] + new restaurant
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  //take in the restaurant we want to remove, filer through favorites, check restaurant by placeID against other restaurants placeID in favorite, if placeID matches, do not add
  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  return (
    //provide provider with value(s) its going to provide externally
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
