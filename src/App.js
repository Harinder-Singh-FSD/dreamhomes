import React, { useState } from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav";
import ListRendering from "./components/ListRendering";
import Main from "./pages/Main"

function App() {
  const [list, setList] = useState([
    {
      listHeader: "Buy",
      listSubHeader: [
        {
          header: "Populer Choices",
          listItems: [
            "Ready to Move",
            "Owner Properties",
            "Budget Homes",
            "Luxury Homes",
          ],
        },
        {
          header: "Property Types",
          listItems: [
            "Flates",
            "House/Villa",
            "Plot",
            "Office Space",
            "Commercial Space",
          ],
        },
        {
          header: "Budget",
          listItems: [
            "50 Lac",
            "50 Lac to 1 cr",
            "1 cr to 1.5 cr",
            "above 1.5 cr",
          ],
        },
        {
          header: "Explore",
          listItems: ["Builders", "Localities", "Projects", "Find an Agent"],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <Header />
      {/* <Nav data={list }/> */}
      <ListRendering list={list[0]} />
      <Main/>
    </div>
  );
}

export default App;
