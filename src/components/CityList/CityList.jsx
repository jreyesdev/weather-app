import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";
import ConvertUnits from "convert-units";

import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import WeatherAxios from "../../api/WeatherAxios";

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cities.forEach((c, i) => {
      getInfoCity(c, i);
    });
  }, [cities]);

  const getInfoCity = async ({ city, country, countryCode }, i) => {
    try {
      const resp = await WeatherAxios.get("/weather", {
        params: {
          q: `${city},${countryCode}`,
        },
      });
      if (resp.data.main.temp) {
        const propValue = {};
        propValue.temp = Number(
          ConvertUnits(resp.data.main.temp).from("K").to("C").toFixed(0)
        );
        propValue.icon = resp.data.weather[0].main.toLowerCase();
        setAllWeather((current) => ({
          ...current,
          [`${i}-${country}`]: propValue,
        }));
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setError((currentError) => {
        if (e.response) {
          return "Ha ocurrido un error en el servidor del clima";
        } else if (e.request) {
          return "Verifica tu conexion a internet";
        } else {
          return "Error al cargar datos";
        }
      });
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <List>
        {cities.map((e, i) => (
          <ListItem button key={`${i}-${e.country}`} onClick={onClickCity}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} md={8}>
                <CityInfo city={e.city} country={e.country} />
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
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
