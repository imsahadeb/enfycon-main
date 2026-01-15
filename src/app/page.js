import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import Features2 from "@/components/sections/features/Features2";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import Hero2 from "@/components/sections/hero/Hero2";
import Portfolios2 from "@/components/sections/portfolios/Portfolios2";
import Services2 from "@/components/sections/services/Services2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<Hero2/>
						<Features2 />
						<Brands2 />
						<About2 />
						<Services2 />
						<Portfolios2 />
						<Funfact2 />
						<Testimonials2 />
						<Faq2 type={2} />
						<Contact2 />
						<Blogs2 />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
