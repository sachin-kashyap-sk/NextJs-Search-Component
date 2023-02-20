import React, { useState } from "react";
import classes from "../styles/search.module.css";
export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function index({ data }) {
  const [value, setValue] = useState();
  return (
    <div className={classes.searchContainer}>
      <div className={classes.header}>
        <p className={classes.textHeader}>Search Component in Next Js</p>
      </div>
      <div className={classes.innerContainer}>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={classes.input}
          placeholder="Search"
        />
        {data &&
          data
            .filter((val) => val.title.includes(value))
            .map((val, key) => {
              return (
                <p className={classes.title} key={key}>
                  {val.title}
                </p>
              );
            })}
      </div>
    </div>
  );
}
