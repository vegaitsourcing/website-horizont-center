import { useEffect, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./../../styles/filters.module.scss";
import BlogsService from "../../pages/api/blogsService";

export function BlogFilters({ onChange }) {
  const [categoryOptions, setCategoryOptions] = useState(null);

  useEffect(() => {
    async function fetchBlogCategories() {
      const response = await BlogsService.getAllBlogCategories();
      return response.data;
    }

    if (categoryOptions === null) {
      fetchBlogCategories().then((blogCategories) => {
        const options = blogCategories.reduce((prev, curr) => ({ ...prev, [curr.name]: curr.name }), {});
        setCategoryOptions(options);
      });
    }
  }, [categoryOptions]);

  return (
    <div className={styles.filters}>
      <Input
        withSearchIcon
        id="blogContains"
        name="blogContains"
        placeholder="Pretraži..."
        valueChangedHandler={(value) => onChange({ contains: value })}
      />
      <Select
        id="blogCategory"
        name="blogCategory"
        options={categoryOptions || {}}
        placeholder="Kategorija..."
        valueChangedHandler={(value) => onChange({ category: value })}
      />
    </div>
  );
}
