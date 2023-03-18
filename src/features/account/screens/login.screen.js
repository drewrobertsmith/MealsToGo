import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  AccountBackground,
  AccountStatusBar,
} from "../components/account.styles";

export const LoginScreen = () => {
  return (
    <>
      <AccountStatusBar />
      <AccountBackground>
        <SafeArea>
          <Text
            style={{
              color: "white",
              fontSize: 30,
            }}
          >
            Login Screen
          </Text>
        </SafeArea>
      </AccountBackground>
    </>
  );
};
