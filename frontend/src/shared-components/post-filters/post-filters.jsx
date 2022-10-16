import React from "react";
import { Input } from "shared-components";
import styles from "./post-filters.module.scss";

function PostFilters({ changeFilterType, changeFilterText }) {
  return (
    <div className={styles.searchFilter}>
      <Input
        type="search"
        id="searchBlogs"
        name="searchBlogs"
        placeholder="Pretraži..."
        valueChangedHandler={changeFilterText}
      />
      <Input
        type="dropdown"
        id="filterBlogs"
        name="filterBlogs"
        options={["title"]}
        placeholder="Filteri"
        valueChangedHandler={changeFilterType}
      />
    </div>
  );
}

export default PostFilters;
