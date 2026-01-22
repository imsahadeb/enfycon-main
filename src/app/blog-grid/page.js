import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeaderSpace from "@/components/shared/others/HeaderSpace";


export default function BlogGrid() {
	return (
		<div>
			<BackToTop />
			<Header/>
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Blog Grid"} text={"Blog Grid"} />
						<BlogsGridPrimary />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

