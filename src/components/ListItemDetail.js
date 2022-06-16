import React from "react";

const ListItemDetail = ({country, borderCountries, saveFavouriteCountry}) => {

    const handleClick = () => {
        saveFavouriteCountry(country)
    }

    const borderCountriesNodes = borderCountries.map((country, index) => {
        return <li key={index}>{country['0'].name.common}</li>
    });

    const displayBordersPop = borderCountries.reduce((population, country) => {
        return (
            population + parseInt(country['0'].population)
            )
    }, 0);

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
                Bordering Countries:
                <ul>
                    {borderCountriesNodes}
                </ul>
            </li>
            <li>
                Bordering Countries Total Population: {displayBordersPop}
            </li>
            <li>
                <button type="button" onClick={handleClick}>Add To Favourites</button>
            </li>
        </>
    )
}

export default ListItemDetail;