import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Text } from "../typography/text.component";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px
    align-items: center;
`;

//Android needs a webview to render the image rather than just a view on the callout
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

//check if on android
const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  //if on android show webview, otherwise view cuz android madness
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
