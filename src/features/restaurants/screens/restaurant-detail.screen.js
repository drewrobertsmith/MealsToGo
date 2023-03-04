import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={handlePress}
        >
          <List.Item
            title="Burrito"
            description="Elit incididunt duis esse elit."
          />
          <List.Item
            title="Sandwich"
            description="Quis duis ipsum sit ea sit dolore officia ut elit."
          />
          <List.Item
            title="French Toast"
            description="Qui esse dolore qui incididunt sint dolor."
          />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={handlePress}
        >
          <List.Item
            title="Buffalo Chicken"
            description="Esse exercitation veniam ea consequat sunt."
          />
          <List.Item
            title="Truffle BLT"
            description="Minim velit ullamco ad veniam ad enim qui proident eu."
          />
          <List.Item
            title="Rosemary Fries"
            description="Veniam excepteur adipisicing eiusmod sint deserunt duis elit aliqua consequat nulla sunt nisi."
          />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-steak" />}
          onPress={handlePress}
        >
          <List.Item
            title="Steak"
            description="Lorem deserunt quis amet voluptate excepteur cupidatat voluptate tempor ex sit enim."
          />
          <List.Item
            title="Potatoes"
            description="Laborum aliquip laborum commodo occaecat eiusmod Lorem qui."
          />
          <List.Item
            title="Fried Chicken"
            description="Do et duis esse anim sint commodo anim deserunt ex sint nisi."
          />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={handlePress}
        >
          <List.Item title="Old Fashioned" />
          <List.Item title="Liquid Death" />
          <List.Item title="Milk" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
