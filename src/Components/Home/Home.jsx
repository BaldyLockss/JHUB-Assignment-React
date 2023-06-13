import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.container}>
      <p className={style.container__quote1}>"Protect and Serve!"</p>
      <div className={style.container__background}></div>
      <nav className={style.container__nav}>
        <Link to="/Page">
          <button className="page_btn">Enter</button>
        </Link>
      </nav>
      <div className={style.container__image}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Badge_of_the_Metropolitan_Police_Service_%28Elizabeth_II%29.svg/800px-Badge_of_the_Metropolitan_Police_Service_%28Elizabeth_II%29.svg.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Home;
