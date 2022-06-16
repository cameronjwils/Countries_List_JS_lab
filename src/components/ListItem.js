import React from "react";

const ListItem = ({country, onCountryClick}) => {

    const handleClick = (event) => {
        event.preventDefault()
        onCountryClick(country);
    }

    return(
        <>
            <li onClick={handleClick}>
                {country.name.common}
            </li>
        </>
    )
}

export default ListItem;