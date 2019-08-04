import React from "react";
import Table from "./components/tableComponent";
import Tag from "./components/tagsComponent";
import Search from "./components/searchComponent";
function App() {
  return (
    <div>
      <div className="App">
        <Table />
      </div>
      <div>
        <Tag />
      </div>
    </div>
  );
}

export default App;
