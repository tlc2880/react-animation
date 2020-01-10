// Name: Tommy Cao
// Date: 1/13/19
// Description:  Use React Spring library and create some simple animations and transitions. 

import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
    return (
        <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        > 
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
            The house is in a quiet neighborhood and is close to freeways, restaurants, convenience stores, and a lot more.  It's been available for vacation rent since 2013 with many satisfied customers.
            The dining room has a dining table set that can seat 8.  The family room has a new sectional sofa that can convert to a full sleeping bed, fireplace, and entertainment system.
            The living room has sofa convertible into king bed, recliner chair, and fireplace.
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
    background: "steelblue",
    color: "white",
    padding: "1.5rem"
};

const counter = {
    background: "#333",
    textAlign: "center",
    width: "100px",
    borderRadius: "50%",
    margin: "1rem auto"
  };