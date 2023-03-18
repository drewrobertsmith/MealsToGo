import React from "react";
import { View, Text } from "react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AccountStatusBar,
  AuthButton,
} from "../components/account.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <>
      <AccountStatusBar />
      <AccountBackground>
        <AccountCover />
        <SafeArea
          style={{
            justifyContent: "center",
          }}
        >
          <AccountContainer>
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </AuthButton>
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </AuthButton>
          </AccountContainer>
        </SafeArea>
      </AccountBackground>
    </>
  );
};
