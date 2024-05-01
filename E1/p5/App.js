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
