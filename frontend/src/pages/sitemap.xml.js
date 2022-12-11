import { ENV } from "../config/env";
import { BlogsService } from "./api/blogsService";
import { DonationsService } from "./api/donationsService";
import { mainNavItems } from "../config/navigation";

export async function getServerSideProps({ res }) {
	const blogIDs = await getBlogIds(10);
	const donationIDs = await getDonationIds(10);
	const sitemap = generateSiteMap(blogIDs, donationIDs);

	// Send the XML to the browser:
	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

async function getBlogIds() {
	try {
		const response = await BlogsService.getPublishedBlogs(10, 1);
		return response.data.items.map(blog => blog.id);
	} catch (error) {
		return [];
	}
}

async function getDonationIds() {
	try {
		const response = await DonationsService.getDonations(10, 1);
		return response.data.items.map(donation => donation.id);
	} catch (error) {
		return [];
	}
}

function generateSiteMap(blogIDs, donationIDs) {
	const mainPagesSiteMapRows = generateMainPagesSiteMapRows();
	const blogsSiteMapRows = generateResourceSiteMapRows("blogs", blogIDs);
	const donationsSiteMapRows = generateResourceSiteMapRows("donations", donationIDs);

	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${mainPagesSiteMapRows}
     	${blogsSiteMapRows}
     	${donationsSiteMapRows}
   </urlset>
 `;
}

function generateMainPagesSiteMapRows() {
	return mainNavItems.map(item => {
		return `
			<url>
       	<loc>${ENV.BASE_URL}/${item.pathname}</loc>
     	</url>
		`;
	});
}

function generateResourceSiteMapRows(path, IDs) {
	return IDs.map(id => {
		return `
	     <url>
	         <loc>${ENV.BASE_URL}/${path}/${id}</loc>
	     </url>
	   `;
	}).join("");
}

export default function SiteMap() {
	// getServerSideProps will do the heavy lifting
}
