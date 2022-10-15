import React from "react";
import { Input } from "shared-components";
import styles from "./profile-filters.module.scss";

function ProfileFilters({ changeCityFilterHandler, changeTextFilterHandler, changeGenderFilterHandler }) {
  return (
    <div className={styles.wrapper}>
      <Input placeholder={"Pretraži..."} type={"search"} valueChangedHandler={changeTextFilterHandler}></Input>
      <Input placeholder={"Pol"} type={"dropdown"} valueChangedHandler={changeGenderFilterHandler}></Input>
      <Input placeholder={"Grad"} type={"dropdown"} valueChangedHandler={changeCityFilterHandler}></Input>
    </div>
  );
}

export default ProfileFilters;
