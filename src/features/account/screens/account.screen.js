import React from "react";
import { View, Text } from "react-native";
import {
  AccountBackground,
  AccountStatusBar,
} from "../components/account.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { StatusBar } from "react-native";

export const AccountScreen = () => {
  return (
    <>
      <AccountStatusBar />
      <AccountBackground>
        <SafeArea>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Account Screen!!
          </Text>
        </SafeArea>
      </AccountBackground>
    </>
  );
};
