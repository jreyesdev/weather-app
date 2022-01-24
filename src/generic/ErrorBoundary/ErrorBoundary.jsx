import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Info: ", errorInfo);
  }

  componentDidMount() {
    console.log("Componente se ha montado. Primer renderizado");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Estado previo: ", prevState);
    console.log("Estado nuevo: ", this.state);
    console.log("El componente se ha actualizado. Otro renderizado");
  }

  componentWillUnmount() {
    console.log("El componente se ha desmontado");
  }

  render() {
    return this.state.hasError ? <h1>Hubo un error</h1> : this.props.children;
  }
}

export default ErrorBoundary;
