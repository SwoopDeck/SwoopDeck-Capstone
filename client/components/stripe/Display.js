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
      // <SplitFlapDisplay
      //   background="#000000"
      //   borderColor="#dddddd"
      //   borderWidth="1px"
      //   characterSet={[
      //     "A",
      //     "B",
      //     "C",
      //     "D",
      //     "E",
      //     "F",
      //     "G",
      //     "H",
      //     "I",
      //     "J",
      //     "K",
      //     "L",
      //     "M",
      //     "N",
      //     "O",
      //     "P",
      //     "Q",
      //     "R",
      //     "S",
      //     "T",
      //     "U",
      //     "V",
      //     "W",
      //     "X",
      //     "Y",
      //     "Z",
      //   ]}
      //   characterWidth="1em"
      //   fontSize="2em"
      //   minLength={7}
      //   padDirection="left"
      //   step={200}
      //   textColor="#dddddd"
      //   value="TRENTON"
      //   withSound={true}
      // />
    );
  }
}

export default Display;