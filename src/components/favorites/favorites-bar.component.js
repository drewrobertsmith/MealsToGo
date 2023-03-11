import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding-left: ${(props) => props.theme.space[3]};
`;
const FavoritesItemView = styled.View`
  margin-right: ${(props) => props.theme.space[2]};
`;
const EmptyFavoritesStateText = styled.Text`
  padding-left: ${(props) => props.theme.space[3]};
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return (
      <EmptyFavoritesStateText>
        Add a restaurant by tapping the heart icon!
      </EmptyFavoritesStateText>
    );
  }

  return (
    <FavoritesWrapper>
      <Text variant="caption">Favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <FavoritesItemView key={key}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("Restaurant Detail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </FavoritesItemView>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
