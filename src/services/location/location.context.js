import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

//creates the context
export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("Chicago");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //on search, set the keyword lowercased + grab location from service based on keyword, transform the result, set the location to result
    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    useEffect(() => {
        if (!keyword.length) {
            return;
        }
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }, [keyword]);

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
