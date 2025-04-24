import File from "../File/File";
import logo from "./../../assets/icons8-folder.svg";
import "./FileExplorer.css";
import data from "../../data/data.json";
import { useState } from "react";

const FileExplorer = ({ items = data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      {items.map((item, i) => {
        if (item.type === "folder") {
          return (
            <div key={i}>
              <article onClick={handleClick} className="folder">
                <img src={logo} />
                <h3>{item.name}</h3>
              </article>
              {isOpen && item.files && (
                <div>
                  <FileExplorer items={item.files} />
                </div>
              )}
            </div>
          );
        }

        return <File item={item} key={i} />;
      })}
    </>
  );
};

export default FileExplorer;
