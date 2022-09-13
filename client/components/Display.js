import React, { Component } from "react";

import SplitFlapDisplay from "react-split-flap-display";
import { FlapDisplay, Presets } from "react-split-flap-effect";

class Display extends Component {
  render() {
    return (
      <FlapDisplay
        chars={Presets.ALPHANUM + ",!"}
        length={12}
        value={"DZ San Diego"}
      />
    );
  }
}

export default Display;
