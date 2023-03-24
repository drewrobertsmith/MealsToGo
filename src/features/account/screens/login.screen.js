import React, { useState, useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import Toast from "react-native-root-toast";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AccountStatusBar,
  AuthButton,
  LoginInput,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component"
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";

export const LoginScreen = () => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(error);




  return (
    <>
      <AccountStatusBar />
      <AccountBackground>
        <AccountCover>
          <AccountContainer>
            <LoginInput
              label="Email"
              textContentType="emailAddress"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <LoginInput
              label="password"
              value={password}
              onChangeText={setPassword}
              textContentType="password"
              secureTextEntry
              secure
            />
            {error && (
              <Spacer position="top" size="large">
                <Text variant="error">{error}</Text>
              </Spacer>
            )}
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          </AccountContainer>

        </AccountCover>
      </AccountBackground>
    </>
  );
};
