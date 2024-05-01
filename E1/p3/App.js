// const heading1 = React.createElement("h1", {}, "Hello world from react");
// {} this object above is used to give attributes
const heading1 = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react"
);
console.log("🚀 ~ heading1:", heading1); // it is an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1); // we are passing here a react elemt e.g. heading1 e.g a js object

// the work of root.render fn is to take this object and create that h1 tag and put that inside that root element
