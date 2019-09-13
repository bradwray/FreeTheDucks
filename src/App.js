import React from "react";
import ReactDOM from "react-dom";
import babyDucks from "./babyDucks.gif";
import DoorOne from "./DoorOne.js";
import DoorTwo from "./DoorTwo.js";
import DoorThree from "./DoorThree.js";
import DecToBinary from "./DecToBinary.js";
import HexQuiz from "./HexQuiz";
import Colors from "./Colors";
import HexToBinary from "./HexToBinary";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  ducks: {
    position: "relative",
    marginRight: "auto",
    width: "100%"
  }
};

class App extends React.Component {
  state = {
    //wrap each one of these in a generic door component that can generate a random background
    //this will help decrease code duplication
    door: [
      {
        time: 2400,
        open: false,
        puzzle: <HexQuiz />
      },
      {
        time: 1000,
        open: false,
        puzzle: <DecToBinary />
      },
      {
        time: 700,
        open: false,
        puzzle: <HexToBinary />
      }
    ],
    developing: true
  };

  componentWillMount = () => {};

  render = styles => {
    const { classes } = this.props;
    return (
      <div>
        {/**/}
        <img className={classes.ducks} src={babyDucks} />
        <DoorThree openTime={this.state.door[1].time} />
        <DoorTwo openTime={this.state.door[2].time} />
        <DoorOne openTime={this.state.door[0].time} />
      </div>
    );
  };
}
export default withStyles(styles)(App);
