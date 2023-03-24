import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: {
    uri: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80",
  },
})`
  flex: 1;
`;

export const AccountStatusBar = styled.StatusBar.attrs({
  barStyle: "light-content",
})``;

export const AccountCover = styled.View`  
  position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
`;

export const AccountContainer = styled.View`
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
    flex: 1;
    justify-content: center;
`;


export const AuthButton = styled(Button).attrs({
  buttonColor: "#16161D",

})`
   padding: ${(props) => props.theme.space[2]};
   margin: ${(props) => props.theme.space[1]};
`;

export const LoginInput = styled(TextInput).attrs({
  autoCapitalize: "none",
})`
`;