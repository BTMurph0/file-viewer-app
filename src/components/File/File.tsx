import logo from './../../assets/icons8-file.svg'
import "./File.css"

const File = ({item}) => {
  return (
    <>
      <article className="file">
        <img src={logo} />
        <h3>{item.name}</h3>
      </article>
    </>
  );
};

export default File;
