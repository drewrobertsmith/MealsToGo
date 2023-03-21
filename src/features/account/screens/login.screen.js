import React, { useState, useContext } from "react";
import { TextInput } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  AccountBackground,
  AccountContainer,
  AccountStatusBar,
  AuthButton,
  LoginInput,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const { onLogin } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <AccountStatusBar />
      <AccountBackground>
        <AccountContainer
          style={{
          }}
        >
          <LoginInput
            label="Email"
            autoCapitalize="none"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />
          <LoginInput
            label="password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry
          />
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
