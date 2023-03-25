import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AccountStatusBar,
  AuthButton,
  LoginTitle,
  RegisterInput,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = () => {
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <>
      <AccountStatusBar />
      <AccountBackground>
        <AccountCover />
        <AccountContainer>
          <LoginTitle>Sign Up</LoginTitle>
          <RegisterInput
            label="Your email"
            textContentType="emailAddress"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <RegisterInput
            label="Your password"
            value={password}
            onChangeText={setPassword}
            textContentType="password"
            secureTextEntry
          />
          <RegisterInput
            label="Re-enter password"
            value={repeatedPassword}
            onChangeText={setRepeatedPassword}
            textContentType="password"
            secureTextEntry
          />
          {error && (
            <Spacer position="top" size="large">
              <ErrorContainer>
                <Text variant="error">{error}</Text>
              </ErrorContainer>
            </Spacer>
          )}
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
