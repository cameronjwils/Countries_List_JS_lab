import React from "react";

const WorldDetails = ({countries}) => {

    const displayWorldDetails = countries.reduce((population, country) => {
        return (
            population + parseInt(country.population)
            )
    }, 0);


    return(
        <>
            <h2>
                World Details
            </h2>
            <p>World Population: {displayWorldDetails}</p>
        </>
    )
}

export default WorldDetails;