import FileExplorer from "../FileExplorer/FileExplorer";
import items from "../../data/data";

function Body() {
  return (
    <ul>
      {items.map((item) => (
        <FileExplorer item={item} key={item.name} />
      ))}
    </ul>
  );
}

export default Body;
