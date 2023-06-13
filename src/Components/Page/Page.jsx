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
          Here you can see what people in your area have been stopped for.
          <br />
          <br />
          It will show you their ETNICITY, GENDER and CRIME.
        </p>
      </div>
      <div className={styles.container__options}>
        <select onChange={(e) => selectHandler(e)}>
          {force.map((det) => {
            return (
              <option
                key={Math.random()}
                value={det.id}
                name={det.id}
                id={det.i}
              >
                {det.name}
              </option>
            );
          })}
        </select>
        <div className={styles.container__scrollbox}>
          <table className={styles.container__table}>
            <tbody>
              {data.length < 1 ? (
                <tr>
                  <td>No Data</td>
                </tr>
              ) : (
                data.map((item) => {
                  return (
                    <tr key={Math.random()}>
                      <td>{item?.officer_defined_ethnicity}</td>
                      <td> {item?.gender}</td>
                      <td> {item?.object_of_search}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
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
