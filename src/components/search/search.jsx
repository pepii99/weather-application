import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';

const CustomStyle = {
  option: (base, state) => ({
    ...base,
    backgroundColor: 'black',
  }),

  inputcontainer: (base, state) => ({
    ...base,
    backgroundColor: 'white',
    color: 'transparent',
  }),

  placeholder: (base, state) => ({
    ...base,

    color: 'white',
  }),

  singleValue: (base, state) => ({
    ...base,

    color: 'white',
  }),
  valueContainer: (base, state) => ({
    ...base,
    backgroundColor: 'transparent',
    color: 'red',
  }),

  input: (base, state) => ({
    ...base,
    color: 'white',
  }),
};

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    return await fetch(
      `${GEO_API_URL}cities?minPopulation=200000&sort=population&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude}, ${city.longitude}`,
              label: `${city.name}, ${city.region}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={CustomStyle}
      className='react-select-container'
      classNamePrefix='react-select'
    />
  );
};

export default Search;
