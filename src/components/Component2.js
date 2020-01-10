// Name: Tommy Cao
// Date: 1/13/19
// Description:  Use React Spring library and create some simple animations and transitions. 

import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
              The kitchen has all the appliances, utensils, dishes, etc., large refrigerator, dishwasher, microwave, and oven, and range.  The master bedroom has 5-piece Cal king bed set, 32' satellite DVR LED TV, love seat sofa, and a ceiling fan.  Bedroom #2 has queen bed set, satellite DVR cable LED TV, and ceiling fan.  Bedroom #3 has 5-piece king bed set, satellite DVR LED TV and ceiling fan.  Bedroom #4 has two sets of bunk beds (twin/full) and satellite DVR LED TV.  Bedroom #5 has 4-piece cal king bed set and satellite DVR LED TV.
              Two of the bathrooms have tubs and one is shower only.  The pool bathroom has a toilet.  This house features central air conditioning and heating.  There are 3 sofa beds as well as 2 queen air mattresses available for use.
              The first indoor great entertainment system is in the Family Room which features anew  55” LED HDTV with HD satellite DVR, Netflix and Blu-ray player.
              The second indoor entertainment system is in the garage 58 in. plasma HDTV, satellite DVR, Netflix (500 movies and TV shows streaming on high speed broadband), and Blu-ray/DVD player.  Seating includes sectional sofa.  In addition, there is an 8 foot slate billiard table.   Also included is free use of Xbox 360 video game.
              There 2 Pac-n-Play, 2 large strollers, 2 high chairs, and other baby items available for use at the house.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default Component2;
