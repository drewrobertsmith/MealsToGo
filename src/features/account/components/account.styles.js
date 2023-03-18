import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: {
    uri: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80",
  },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountStatusBar = styled.StatusBar.attrs({
  barStyle: "light-content",
})``;
