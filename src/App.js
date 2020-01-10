// Name: Tommy Cao
// Date: 1/13/19
// Description:  Use React Spring library and create some simple animations and transitions. 

import React from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring/renderprops";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

//import "./styles.css";

class App extends React.Component {
  state = {
    showComponent3: false
  };

  toggle = e => this.setState({ showComponent3: !this.state.showComponent3 });

  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default  App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);