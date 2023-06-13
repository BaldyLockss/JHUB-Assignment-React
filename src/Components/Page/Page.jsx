import styles from "./Page.module.css";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__background}></div>
      <div className={styles.container__image}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Badge_of_the_Metropolitan_Police_Service_%28Elizabeth_II%29.svg/800px-Badge_of_the_Metropolitan_Police_Service_%28Elizabeth_II%29.svg.png"
          alt="logo"
        />
      </div>
      <div className={styles.container__main}>
        <p>
          Here you can find information on your local Police force.
          <br />
          <br />
          You can see what they have acheived over the years
          <br />
          <br />
          You can also get all their social media links
        </p>
        <br />
        <input
          type="text"
          name="county"
          id="county"
          placeholder="Enter County"
        ></input>
      </div>
      <div className={styles.container__nav}>
        <nav className="nav">
          <Link to="/">
            <button>Back</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Page;
