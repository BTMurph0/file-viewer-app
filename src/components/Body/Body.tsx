import FileExplorer from "../FileExplorer/FileExplorer";
import items from "../../data/data";
import { useState } from "react";

function Body() {
  const [sortedItems, setSortedItems] = useState(items);

  function sortItems() {
    const copiedItems = structuredClone(sortedItems);
    copiedItems.sort((a, b) => a.name.localeCompare(b.name));
    setSortedItems(copiedItems);
  }

  return (
    <>
      <label>Sort by:</label>
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => {
          if (e.target.value === "name") {
            sortItems();
          }
        }}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="name">Name</option>
      </select>
      <ul>
        {sortedItems.map((item, i) => (
          <FileExplorer item={item} key={i} />
        ))}
      </ul>
    </>
  );
}

export default Body;
