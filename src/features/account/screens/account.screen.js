import React from "react";
import { View } from "react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AccountStatusBar,
  AuthButton,
} from "../components/account.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <>
      <AccountStatusBar />
      <AccountBackground>
        <AccountCover />
        <AccountContainer>
          <AuthButton
            icon="email"
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
      </AccountBackground>
    </>
  );
};
