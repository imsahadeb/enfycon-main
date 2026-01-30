
import GET_POSTS_QUERY, { GET_LATEST_POST_QUERY } from "@/libs/blogQueries";
import BlogFeed from "@/components/sections/blogs/BlogFeed";
import { siteConfig } from "@/config/siteConfig";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Header from "@/components/layout/header/Header";
import Footer2 from "@/components/layout/footer/Footer2";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import LatestBlogHero from "@/components/sections/blogs/LatestBlogHero";

async function getInitialPosts(category = null) {
	const endpoint = siteConfig.blogApiUrl + "/graphql";

	try {
		// Prepare variables for initial posts query
		const variables = {
			first: 15,
			after: null,
			categoryName: category || null
		};

		// Fetch both latest post and initial paginated posts in parallel
		const [latestRes, initialRes] = await Promise.all([
			fetch(endpoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query: GET_LATEST_POST_QUERY }),
				next: { revalidate: 60 },
			}),
			fetch(endpoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: GET_POSTS_QUERY,
					variables: variables,
				}),
				next: { revalidate: 60 },
			})
		]);

		if (!latestRes.ok || !initialRes.ok) {
			throw new Error("Failed to fetch posts");
		}

		const latestJson = await latestRes.json();
		const initialJson = await initialRes.json();

		return {
			latestPost: latestJson.data?.posts?.nodes?.[0] || null,
			posts: initialJson.data?.posts
		};

	} catch (error) {
		console.error("Error fetching blog data:", error);
		return null;
	}
}

export const metadata = {
	title: "Blogs - Enfycon",
	description: "Explore our latest insights and news",
};

export default async function BlogPage(props) {
	const searchParams = await props.searchParams;
	const category = searchParams?.category || null;

	const data = await getInitialPosts(category);
	const latestPost = data?.latestPost;
	console.log("SERVER LOG: latestPost", JSON.stringify(latestPost ? "Found" : "Null"));

	const postsData = data?.posts;

	if (!postsData) {
		return (
			<div className="container mt-5">
				<p>Failed to load blogs. Please try again later.</p>
			</div>
		);
	}

	const { edges, pageInfo } = postsData;

	// Map initial posts to the format expected by BlogCard1
	const initialPosts = edges.map(({ node }) => {
		const date = new Date(node.date);
		return {
			id: node.slug,
			featuredImage: node.featuredImage?.node?.sourceUrl || null,
			title: node.title || "",
			desc: node.excerpt || "",
			author: node.author?.node?.name || "enfycon",
			day: date.getDate(),
			month: date.toLocaleString("en-US", { month: "short" }),
			year: date.getFullYear(),
			category: node.categories?.nodes[0]?.name || "Technology",
		};
	});

	return (
		<div>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<LatestBlogHero post={latestPost} />

						<section className="tj-blog-section section-gap pt-4">
							<div className="container">
								<div className="row mb-4">
									<div className="col-12">
										<h3 className="section-title">Latest Articles</h3>
									</div>
								</div>
								<BlogFeed
									initialPosts={initialPosts}
									initialPageInfo={pageInfo}
									category={category}
								/>
							</div>
						</section>
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
