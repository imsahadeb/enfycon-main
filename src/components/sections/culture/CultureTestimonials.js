"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Testimonial data
const testimonialData = [
    {
        id: 1,
        quote: "Joining enfycon was the best decision of my career.",
        content: "The culture of innovation and collaboration here is incredible. Every day I'm surrounded by talented people who push me to grow. The leadership truly cares about our development and wellbeing.",
        name: "Priya Sharma",
        role: "Senior Software Engineer",
        team: "Engineering",
        location: "Bangalore",
        image: "/images/culture/steptodown.com222737.jpg"
    },
    {
        id: 2,
        quote: "A workplace where your voice truly matters.",
        content: "I've never felt more valued and heard in my professional life. The open communication culture and the emphasis on work-life balance have made this more than just a job—it's a community.",
        name: "Rajesh Kumar",
        role: "Product Manager",
        team: "Product",
        location: "Mumbai",
        image: "/images/culture/steptodown.com262912.jpg"
    },
    {
        id: 3,
        quote: "Innovation meets inclusivity at enfycon.",
        content: "The diversity of thought and backgrounds here drives amazing solutions. Leadership encourages experimentation and supports us when we take risks. It's empowering to work somewhere that invests in your ideas.",
        name: "Anita Desai",
        role: "UX Design Lead",
        team: "Design",
        location: "Delhi",
        image: "/images/culture/steptodown.com882339.jpg"
    }
];

const CultureTestimonials = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        import("wow.js").then(({ default: WOW }) => {
            new WOW().init();
        });
    }, []);

    if (!isClient) return null;

    return (
        <section className="culture-testimonials">
            <div className="culture-testimonials__container">
                <div className="culture-testimonials__slider">

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".culture-testimonials__arrow--prev",
                            nextEl: ".culture-testimonials__arrow--next",
                        }}
                        pagination={{
                            el: ".culture-testimonials__dots",
                            clickable: true,
                            bulletClass: "culture-testimonials__dot",
                            bulletActiveClass: "culture-testimonials__dot--active",
                        }}
                        className="culture-testimonials-swiper"
                    >
                        {testimonialData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="culture-testimonials__content-wrapper">
                                    {/* Left: Testimonial Content */}
                                    <div className="culture-testimonials__content">
                                        <div className="d-flex">
                                            <div className="quote-icon me-3 mt-2">
                                                <i className="tji-quote" style={{ fontSize: "40px", color: "var(--tj-color-theme-primary)", transform: "rotate(180deg)", display: "inline-block" }}></i>
                                            </div>
                                            <div className="testimonial-content-wrapper">
                                                <h3 className="culture-testimonials__quote mb-3">
                                                    {testimonial.quote}
                                                </h3>
                                                <p className="culture-testimonials__text mb-4">
                                                    {testimonial.content}
                                                </p>
                                                <div className="culture-testimonials__author">
                                                    <p className="culture-testimonials__author-name">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="culture-testimonials__author-meta">
                                                        {testimonial.role} • {testimonial.team} • {testimonial.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Portrait Image */}
                                    <div className="culture-testimonials__image-wrapper">
                                        <div className="culture-testimonials__image-container">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={900}
                                                height={1200}
                                                className="culture-testimonials__image"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows - Placed outside map but relative to slider container */}
                    <button
                        className="culture-testimonials__arrow culture-testimonials__arrow--prev"
                        aria-label="Previous testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        className="culture-testimonials__arrow culture-testimonials__arrow--next"
                        aria-label="Next testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Navigation Dots */}
                    <div className="culture-testimonials__dots"></div>
                </div>
            </div>
        </section>
    );
};

export default CultureTestimonials;
