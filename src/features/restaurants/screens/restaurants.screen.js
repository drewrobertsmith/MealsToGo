import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";

import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const LoadingWheel = styled(ActivityIndicator)`
  color: ${(props) => props.theme.colors.brand.primary};
`;

const LoadingContainer = styled.View`
  paddingtop: ${(props) => props.theme.space[5]};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading && (
        <LoadingContainer>
          <LoadingWheel size={50} animating={true} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            //TODO: change out the touchable opacity to pressable API so there isnt a weird box underlay
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
    </SafeArea>
  );
};
