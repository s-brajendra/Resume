import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Passionate Blockchain Enthusiast",
              "MERN Stack Developer",
              "Effective Problem Solver",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 60,
          }}
        />
      )
}

export default Type