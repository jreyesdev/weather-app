import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};

const prop = undefined;

export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <h1>{prop.hola}</h1>
  </ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <h1>Sin Error</h1>
  </ErrorBoundary>
);
