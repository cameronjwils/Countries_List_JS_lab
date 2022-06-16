import React from "react";

const ListItemDetail = ({country, saveFavouriteCountry}) => {

    const handleClick = () => {
        saveFavouriteCountry(country)
    }

    return(
        <>
        <h2>Country Details</h2>
            <li>
                Country Name: {country.name.common}
            </li>
            <li>
                Country Population: {country.population}
            </li>
            <li>
                Country Flag: <img src = {country.flags.png} alt= {country.name.common} height = '25'></img>
            </li>
            <li>
                <button type="button" onClick={handleClick}>Add To Favourites</button>
            </li>
        </>
    )
}

export default ListItemDetail;