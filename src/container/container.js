import React, {useEffect, useState} from "react";
import HeadingComponent from "../components/HeadingComponent";
import List from "../components/List";
import ListItemDetail from "../components/ListItemDetail";
import ListSelector from "../components/ListSelector";
import WorldDetails from "../components/WorldDetails";

const Container = () => {

    const[countries, setCountries] = useState([]);
    const[favouriteCountries, setFavouriteCountries] = useState([]);
    const[selectedCountry, setSelectedCountry] = useState(null);
    const[listOptions, setListOptions] = useState(['All Countries', 'Favourite Countries']);
    const[selectedList, setSelectedList] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    useEffect(() => {
        setSelectedList(countries);
    }, [countries])

    const getCountries = function(){
        fetch ('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = (country) => {
      setSelectedCountry(country);
    }

    const onListSelected = (index) => {
        console.log(index);
        console.log('Before');
        console.log(selectedList);
      if (index == 0){
        setSelectedList(countries)
      } else if (index == 1){
        setSelectedList(favouriteCountries)
      }; 
      console.log('After');
      console.log(selectedList);
    };

    const saveFavouriteCountry = (newCountry) => {
        if (!countries.includes(newCountry)){
            const favouriteCountriesCopy = [...favouriteCountries, newCountry];
            setFavouriteCountries(favouriteCountriesCopy)
        };
    };
    

    return(
        <>
            <HeadingComponent />
            <WorldDetails countries={countries}/>
            {selectedCountry ? <ListItemDetail country={selectedCountry} saveFavouriteCountry={saveFavouriteCountry}/> : null} 
            <ListSelector listOptions={listOptions} onListSelected={onListSelected}/>
            {selectedList ? <List countries={selectedList} onCountryClick={onCountryClick} /> : null}
        </>
    )
}

export default Container;

