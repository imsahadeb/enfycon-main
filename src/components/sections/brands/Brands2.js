import BrandSlider1 from "@/components/shared/brands/BrandSlider1";

const Brands2 = () => {
	return (
		<section className="tj-client-section section-top-gap">
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						{/* <div
							className="client-content style-2 wow fadeIn"
							data-wow-delay=".3s"
						>
							<h5 className="sec-title">
								Join Over <span className="client-numbers">1000+</span>{" "}
								Companies with enfycon Here
							</h5>
							<p className="sec-subtitle">
								enfycon is among a select group of IT solutions providers that have successfully delivered first-of-its-kind projects for both government institutions and private enterprises. We specialize in GovTech solutions and end-to-end digital transformation, helping organizations modernize, scale, and operate more efficiently.

Our technology expertise spans multiple sectors, including mining and allied services, government and public services, agriculture and allied services, industry and trade facilitation, education, healthcare, and tourism, enabling us to deliver impactful, scalable, and future-ready solutions.
							</p>
						</div> */}
						<h3 className="text-center semibold	">
							Excellence in Innovation. Impact in Execution.
						</h3>
						<p className="sec-subtitle">
							enfycon is among a select group of IT solutions providers that have successfully delivered first-of-its-kind projects for both government institutions and private enterprises. We specialize in GovTech solutions and end-to-end digital transformation, helping organizations modernize, scale, and operate more efficiently.

Our technology expertise spans multiple sectors, including mining and allied services, government and public services, agriculture and allied services, industry and trade facilitation, education, healthcare, and tourism, enabling us to deliver impactful, scalable, and future-ready solutions.
							</p>
						<BrandSlider1 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands2;
