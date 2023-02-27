import React, { useContext } from "react";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";

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
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <LoadingWheel size={50} animating={true} />
        </LoadingContainer>
      )}
      <Pressable onPress={() => navigation.navigate("Restaurant Detail")}>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </Pressable>
    </SafeArea>
  );
};
