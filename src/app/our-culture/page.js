import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import EnfyconLife from "@/components/sections/culture/EnfyconLife";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { constructMetadata } from "@/libs/seo";

export const metadata = constructMetadata({
	title: "Our Culture - enfycon",
	description: "Discover the culture that drives innovation at enfycon.",
});

export default function OurCulture() {
	return (
		<div>
			<BackToTop />
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Our Culture"} text={"Our Culture"} />

						{/* Enfycon Life Section */}
						<EnfyconLife />

					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
