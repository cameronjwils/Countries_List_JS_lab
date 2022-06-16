import React, {useEffect, useState} from "react";
import HeadingComponent from "../components/HeadingComponent";
import List from "../components/List";
import ListItemDetail from "../components/ListItemDetail";
import ListSelector from "../components/ListSelector";
import WorldDetails from "../components/WorldDetails";

const Container = () => {

    const[countries, setCountries] = useState([]);
    const[favouriteCountries, setFavouriteCountries] = useState([]);
    const[borderCountries, setBorderCountries] = useState([]);
    const[selectedCountry, setSelectedCountry] = useState(null);
    const[listOptions, setListOptions] = useState(['All Countries', 'Favourite Countries']);
    const[selectedList, setSelectedList] = useState(null);

    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        setSelectedList(countries);
    }, [countries]);

    const getCountries = function(){
        fetch ('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = (country) => {
      resetBorderCountries();
      setSelectedCountry(country);
      
      if(typeof(country.borders) != 'undefined' && country.borders != null){
        for (const bc of country.borders){
          const newCountry = getCountryByCode(bc);
          saveBorderCountry(newCountry);
        }
      }
    }

    const resetBorderCountries = () => {
      setBorderCountries([]);
    }

    const getCountryByCode = function (countryCode){
      return countries.filter((country) => {
        return country.cca3 === countryCode;
      });
    }

    const saveBorderCountry = (newCountry) => {
      const borderCountriesCopy = [...borderCountries];
      borderCountries.push(newCountry)
      setBorderCountries(borderCountriesCopy);
    }
    
    const onListSelected = (index) => {
      if (index == 0){
        setSelectedList(countries)
      } else if (index == 1){
        setSelectedList(favouriteCountries)
      }; 
    };

    const saveFavouriteCountry = (newCountry) => {
        if (checkFavOkToAdd(newCountry)){
          const favouriteCountriesCopy = [...favouriteCountries, newCountry];
          setFavouriteCountries(favouriteCountriesCopy);
        }
    };

    const checkFavOkToAdd = function (countryToCheck) {
      let okToAdd = true
      for (let i = 0; i < favouriteCountries.length; i++) {
        if (countryToCheck === favouriteCountries[i]){
          okToAdd = false;
        }
      }
      return okToAdd;
    };
  
    return(
        <>
            <HeadingComponent />
            <WorldDetails countries={countries}/>
            {selectedCountry ? <ListItemDetail country={selectedCountry} borderCountries={borderCountries} saveFavouriteCountry={saveFavouriteCountry}/> : null} 
            <ListSelector listOptions={listOptions} onListSelected={onListSelected}/>
            {selectedList ? <List countries={selectedList} onCountryClick={onCountryClick} /> : null}
        </>
    )
}

export default Container;

