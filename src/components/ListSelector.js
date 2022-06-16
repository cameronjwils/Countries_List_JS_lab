import React from "react";

const ListSelector = ({listOptions, onListSelected}) => {

    const populateList = listOptions.map((option, index) => {
      return <option value={index} key={index}>{option}</option>
    })

    const handleChange = (event) => {
        onListSelected(event.target.value);
    }

    return(
        <>
            <select id="select" onChange={handleChange}>
                <option disabled value=''>Select a List</option>
                {populateList}
            </select>
        </>
    )
}

export default ListSelector;