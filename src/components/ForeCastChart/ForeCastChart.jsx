import React from "react";
import PropTypes from "prop-types";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const ForeCastChart = ({ data }) => {
  return (
    <ResponsiveContainer height={300} width={"95%"}>
      <LineChart margin={{ top: 20, left: 5, bottom: 20 }} data={data}>
        <XAxis dataKey="dayHour" />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        <Legend />
        <Line dataKey="max" type="monotone" stroke="#FF0000" />
        <Line dataKey="min" type="monotone" stroke="#0000FF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

ForeCastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ForeCastChart;
