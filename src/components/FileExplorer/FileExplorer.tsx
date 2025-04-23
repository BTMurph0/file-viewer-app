import File from "../File/File";
import logo from "./../../assets/icons8-folder.svg";
import "./FileExplorer.css";
import data from "../../data/data.json";

const FileExplorer = ({ items = data }) => {
  return (
    <>
      {items.map((item, i) => {
        if (item.type === "folder") {
          return (
            <div key={i}>
              <article className="folder">
                <img src={logo} />
                <h3>{item.name}</h3>
              </article>
              {item.files && (
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
