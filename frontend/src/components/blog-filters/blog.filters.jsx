import { useEffect, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./blog.filters.module.scss";
import BlogsService from "../../pages/api/blogsService";

export function BlogFilters({ onChange }) {

	const [contains, setContains] = useState(null);
	const [category, setCategory] = useState(null);
	const [categoryOptions, setCategoryOptions] = useState(null);

	function applyContainsFilter(contains) {
		setContains(contains);
		onChange(1, contains, category);
	}

	function applyCategoryFilter(category) {
		setCategory(category);
		onChange(1, contains, category);
	}

	useEffect(() => {
		async function fetchBlogCategories() {
			const response = await BlogsService.getAllBlogCategories();
			return response.data;
		}

		if (categoryOptions === null) {
			fetchBlogCategories().then(blogCategories => {
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
				onChange={applyContainsFilter}
			/>
			<Select
				id="blogCategory"
				name="blogCategory"
				options={categoryOptions || {}}
				placeholder="Kategorija..."
				onChange={applyCategoryFilter}
			/>
		</div>
	);
}
