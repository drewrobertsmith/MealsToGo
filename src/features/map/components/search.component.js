import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 1;
  top: ${(props) => props.theme.space[4]};
  width: 100%;
`;

//this one only needs to know once you submit the keyword to be. Location Context only stores the keyword, once we run teh search function. Triggering a search triggers and update in the Location Context
//tracking local state cause the search component needs to be able to track what search keyword is being filled in
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
