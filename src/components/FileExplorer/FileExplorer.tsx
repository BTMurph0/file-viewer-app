import logo1 from "./../../assets/icons8-folder.svg";
import logo2 from "./../../assets/icons8-file.svg";
import "./FileExplorer.css";
import { useState } from "react";

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

const FileExplorer = ({ item }: { item: Item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <li key={item.name}>
      <span className="item">
        {item.type === "folder" ? (
          <article onClick={handleClick} className="folder">
            <img src={logo1} />
            <h3>{item.name}</h3>
          </article>
        ) : (
          <article className="file">
            <img src={logo2} />
            <h3>{item.name}</h3>
          </article>
        )}
      </span>
      {isOpen && item.type === "folder" && (
        <ul>
          {(item as FolderItem).files.map((file) => (
            <FileExplorer item={file} key={file.name} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FileExplorer;
