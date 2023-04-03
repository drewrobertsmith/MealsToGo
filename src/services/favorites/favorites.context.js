import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]); //set to empty array because we dont have favorites when we boot the app

  //adding AsyncStorage to store favorites locally on device

  //store the data
  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  //read the data
  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

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

  //load favorites everytime on the very first mount of context, load initial favorites
  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]); //user is the dependency

  //every time there is a change to favorites, save the change
  useEffect(() => {
    if (user && user.uid && favorites.length) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]); //user is the dependency along with favorites

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
