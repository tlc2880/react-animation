// Name: Tommy Cao
// Date: 1/13/19
// Description:  Use React Spring library and create some simple animations and transitions. 

import React from "react";

export default function Component3() {
  return (
    <div style={c3Style}>
      <h1>Component 3</h1>
      <p>
      Outdoor patio entertainment features a private swimming pool with optional heating, back yard pool lock safety gate, gas BBQ grill, dining table set for 8, Wicker conversation set, 2 matching Wicker lounge chairs, and umbrella.  There are numerous floating pool toys available for use.
      This house has programmable key-less entry.  No worry for lost key and everybody has access to the house.  The backyard features a 16'x10' red wood Gazebo holding an 8-person spa with sky light and windows.  This enclosed spa Gazebo has sitting chairs, and table.  Spa use is included in the rent.  Optional pool heating is $15 - $25/day for heating the pool up to 83F.
      </p>
    </div>
  );
}

const c3Style = {
  background: "skyblue",
  color: "white",
  padding: "1.5rem 1.5rem 5rem 1.5rem"
};