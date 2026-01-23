"use client";
import Link from "next/link";
import { industriesData } from "@/data/industriesData";
import { footerData } from "@/data/footerData";
import { usePathname } from "next/navigation";

const Footer2 = () => {
	const pathname = usePathname();

	// Helper to determine if a link is active
	const isActive = (path) => pathname === path;

	return (
		<footer className="tj-footer-section footer-2">
			<div className="container">
				{/* Top Bar: Connect with us */}
				<div className="row">
					<div className="col-12">
						<div className="footer-top-bar">
							<div className="logo-area">
								<Link href="/">
									<img src="/images/logos/enfycon-white.png" alt="Logos" />
								</Link>
							</div>
							<div className="social-connect">
								<span className="connect-text">Connect with us</span>
								<div className="social-icons">
									{footerData.socialLinks.map((social, index) => (
										<Link key={index} href={social.link} target="_blank">
											<i className={social.icon}></i>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main Footer Area */}
				<div className="footer-main-area">
					<div className="row">
						{/* Col 1: Industries */}
						<div className="col-lg-2 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">Industries</h5>
								<ul>
									{industriesData.map((industry) => (
										<li key={industry.id}>
											<Link
												href={`/industries/${industry.id}`}
												className={isActive(`/industries/${industry.id}`) ? "active" : ""}
											>
												{industry.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Col 2: Services */}
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">Services</h5>
								<ul>
									{footerData.services.map((service, index) => (
										<li key={index}>
											<Link
												href={service.link}
												className={isActive(service.link) ? "active" : ""}
											>
												{service.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Col 3: Products */}
						<div className="col-lg-2 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">Products</h5>
								<ul>
									{footerData.products.map((product, index) => (
										<li key={index}>
											<Link
												href={product.link}
												className={isActive(product.link) ? "active" : ""}
											>
												{product.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Col 4: About Us */}
						<div className="col-lg-2 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">About Us</h5>
								<ul>
									{footerData.about.map((item, index) => (
										<li key={index}>
											<Link
												href={item.link}
												className={isActive(item.link) ? "active" : ""}
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Col 5: Other Links */}
						<div className="col-lg-3 col-md-6">
							<div className="footer-widget widget-nav-menu">
								<h5 className="title">Other Links</h5>
								<ul>
									{footerData.otherLinks.map((item, index) => (
										<li key={index}>
											<Link
												href={item.link}
												className={isActive(item.link) ? "active" : ""}
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright - kept simple */}
				<div className="tj-copyright-area-2">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area justify-content-center text-center">
								<div className="copyright-text">
									<p>
										&copy; {new Date().getFullYear()} <Link href="#" target="_blank"> enfycon</Link>. All Rights Reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer2;
