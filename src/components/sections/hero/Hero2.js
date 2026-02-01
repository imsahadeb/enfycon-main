import Link from "next/link";
import { heroSlides } from "@/data/hero";
import HeroSlider from "./HeroSlider";

const Hero2 = () => {
	return (
		<section className="tj-slider-section">
			<HeroSlider slides={heroSlides} />
			<div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
				<span
					className="circle-text"
					style={{ backgroundImage: "url('/images/hero/circle-text.webp')" }}
				></span>
				<Link className="circle-icon" href="/services">
					<i className="tji-arrow-down-big"></i>
				</Link>
			</div>
		</section>
	);
};

export default Hero2;
