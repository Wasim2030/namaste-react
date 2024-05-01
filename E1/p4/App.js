// how to create nested element

{
  /* 

<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
  </div>
</div>

*/
}

// try = create sibling of h1
// try = create div with id="parent2"

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm a h1 tag")
  )
);
console.log("🚀 ~ parent:", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
