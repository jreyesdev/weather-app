import React, { useContext } from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";

import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import useCityList from "../../hooks/useCityList";
import { WeatherContext } from "../../contexts/WeatherContext";

const CityList = ({ onClickCity }) => {
  const cities = useContext(WeatherContext);
  const { allWeather, error, loading, setError } = useCityList(cities);

  return (
    <>
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <List>
        {cities.map((e, i) => (
          <ListItem
            button
            key={`${i}-${e.country}`}
            onClick={() => onClickCity(e)}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={8}>
                <CityInfo city={e.city} countryCode={e.countryCode} />
              </Grid>
              <Grid item xs={12} md={4}>
                {allWeather[`${i}-${e.country}`] ? (
                  <Weather
                    temp={allWeather[`${i}-${e.country}`]["temp"]}
                    icon={allWeather[`${i}-${e.country}`]["icon"]}
                  />
                ) : loading ? (
                  <LoadingCities />
                ) : (
                  "Sin datos"
                )}
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </>
  );
};

function LoadingCities() {
  return (
    <Grid container justifyContent="left" alignItems="center">
      <Skeleton
        variant="circular"
        width={80}
        height={80}
        style={{ marginRight: "20px" }}
      />
      <Skeleton variant="rectangular" width={80} height={80} />
    </Grid>
  );
}

CityList.propTypes = {
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
