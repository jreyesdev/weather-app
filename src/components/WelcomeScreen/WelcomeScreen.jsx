import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as Three from "three";

const WelcomeScreen = ({ children }) => {
  const refDiv = useRef(null);
  const [vanta, setVanta] = useState(false);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE: Three,
          el: refDiv.current,
        })
      );
    }
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  return (
    <div className="full" ref={refDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WelcomeScreen;
