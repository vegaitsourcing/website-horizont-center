import { useCallback, useEffect, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./blog.filters.module.scss";
import BlogsService from "../../pages/api/blogsService";

export function BlogFilters({ onChange }) {
  const [filters, setFilters] = useState({
    contains: null,
    category: null,
  });
  const [categoryOptions, setCategoryOptions] = useState(null);

  const applyFilters = useCallback(
    (newFilters) => {
      const updatedFilters = { ...filters, ...newFilters };
      setFilters(updatedFilters);
      onChange(1, updatedFilters.contains, updatedFilters.category);
    },
    [filters, onChange]
  );

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
        valueChangedHandler={(value) => applyFilters({ contains: value })}
      />
      <Select
        id="blogCategory"
        name="blogCategory"
        options={categoryOptions || {}}
        placeholder="Kategorija..."
        valueChangedHandler={(value) => applyFilters({ category: value })}
      />
    </div>
  );
}
