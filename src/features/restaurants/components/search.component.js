import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Search = () => {
    //this one only needs to know once you submit the keyword to be. Location Context only stores the keyword, once we run teh search function. Triggering a search triggers and update in the Location Context
    const { keyword, search } = useContext(LocationContext);
    //tracking local state cause the search component needs to be able to track what search keyword is being filled in
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search"
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
