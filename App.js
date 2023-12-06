const heading = React.createElement("div", { id: "rjt" }, [
  React.createElement("h1", { id: "rjt1" }, "Hello from Rajat"),
  React.createElement("h2", { id: "rjt2" }, "hey bro"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

     <script>
    const heading = document.createElement("h1");
    heading.innerHTML = "Hey Rajat from JavaScript";
    
    const root = document.getElementById("root");
    root.appendChild(heading);
        </script> 