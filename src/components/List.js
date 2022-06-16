import React from "react";
import ListItem from "./ListItem";

const List = ({countries, onCountryClick}) => {
    
    const countryNodes = countries.map((country, index) => {
        return <ListItem country={country} key={index} onCountryClick={onCountryClick}/>
    });

    return(
        <>
            <h3>
                List
            </h3>
            {countryNodes}
        </>
    )
}

export default List;