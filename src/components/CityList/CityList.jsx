import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";

const CityList = ({ cities }) => {
  return (
    <ul>
      {cities.map((e, i) => (
        <li key={i}>
          <CityInfo city={e.city} country={e.country} />
          <Weather temp={e.temp} icon="sunny" />
        </li>
      ))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
