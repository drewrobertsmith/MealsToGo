import React, { useContext } from "react";

import { FadeInView } from "../../../components/animations/fade.animation";
import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

//TODO export the restaurantlist flat list in a new screen to cut down on the duplicated code

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <FlatList
      data={favorites}
      contentContainerStyle={{
        padding: 16,
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Restaurant Detail", {
                restaurant: item,
              })
            }
          >
            <FadeInView>
              <RestaurantInfoCard restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  );
};
