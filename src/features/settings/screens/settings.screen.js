import React, { useContext } from "react";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatorContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatorContainer>
        <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatorContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your saved favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="black" icon="exit-run" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
