import { useEffect, useState } from "react";
import { Input, Select } from "../../shared-components";
import styles from "./filters.module.scss";
import { BlogsService } from "../../pages/api/blogsService";

export function BlogFilters ({ onChange }) {
	const [categoryOptions, setCategoryOptions] = useState(null);

	useEffect(() => {
		async function fetchBlogCategories () {
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
				className={styles.leftField}
				id="blogContains"
				name="blogContains"
				placeholder="Pretraži..."
				onChange={(value) => onChange({ contains: value })}
			/>
			<Select
				cla
				className={styles.rightField}
				id="blogCategory"
				name="blogCategory"
				options={categoryOptions || {}}
				placeholder="Kategorija..."
				onChange={(value) => onChange({ category: value })}
			/>
		</div>
	);
}
