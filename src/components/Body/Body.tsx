import FileExplorer from "../FileExplorer/FileExplorer";
import items from "../../data/data";

type FileItem = {
  name: string;
  type: string;
  added: string;
};

type FolderItem = {
  name: string;
  type: "folder";
  files: Item[];
};

type Item = FileItem | FolderItem;

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
