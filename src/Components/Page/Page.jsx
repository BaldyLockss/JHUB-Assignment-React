import styles from "./Page.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Page = () => {
  const [force, setForce] = useState([]);
  const [county, setCounty] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://data.police.uk/api/forces")
      .then((res) => res.json())
      .then((data) => setForce(data));
  }, []);

  useEffect(() => {
    fetch(`https://data.police.uk/api/stops-force?force=${county}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [county]);

  const selectHandler = (e) => {
    setCounty(e.target.value);
  };
  console.log(force);

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
          You can see what they have acheived over the years.
          <br />
          <br />
          You can also get all their social media links.
        </p>
        <br />
        {/* <input
          onChange={(e) => inputHandler(e)}
          type="text"
          name="county"
          id="county"
          placeholder="Enter County"
        ></input>
        <div className={styles.container__btn}>
          <button>Search</button>
        </div> */}
      </div>
      <div className={styles.container__nav}>
        <nav className="nav">
          <Link to="/">
            <button>Back</button>
          </Link>
        </nav>
        <select onChange={(e) => selectHandler(e)}>
          {force.map((det) => {
            return (
              <option value={det.id} name={det.id} id={det.i}>
                {det.name}
              </option>
            );
          })}
        </select>
        <div>
          {data.map((data) => {
            return (
              <li>
                <p>{data.gender}</p>
                <p>{data.object_of_search}</p>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
