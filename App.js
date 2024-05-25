import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpilled before it reaches the JS) - Parcel - Babel

// JSX => React.createElement => Object => HTMLELement(render)

const elem = <span>Its Element</span>

const Title = () => (
    <h1 id="heading">
    React using JSX {elem}
    </h1>
);


const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title></Title>
        <Title />
        <h1 className="heading">React Funcitonal Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)