import img from "./img/1.webp";
import "./Content.css";
const Content = () => {
  const imgStyle = {
    with: "300px",
  };
  return (
    <div className="content">
      <h2>react js</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
        libero?
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2023/06/05/08/39/flower-8041698__340.jpg"
        alt=""
      />
      <img style={imgStyle} src={img} alt="" />
      <p className="par1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta
        numquam assumenda ex earum! Enim, tempora, dolore obcaecati autem
        impedit aperiam accusamus, adipisci molestias accusantium et consequatur
        qui animi quod.
      </p>
    </div>
  );
};

export default Content;
