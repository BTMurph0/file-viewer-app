import folderIcon from "./../../assets/icons8-folder.svg";
import fileIcon from "./../../assets/icons8-file.svg";
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

function FileExplorer({ item }: { item: Item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <li key={item.name}>
      <span className="item">
        {item.type === "folder" ? (
          <article onClick={handleClick} className="folder">
            <img src={folderIcon} />
            <h3>{item.name}</h3>
          </article>
        ) : (
          <article className="file">
            <img src={fileIcon} />
            <h3>{item.name}</h3>
            <p>{item.added}</p>
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
}

export default FileExplorer;
