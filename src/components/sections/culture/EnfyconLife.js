"use client";
import Image from "next/image";
import { useEffect } from "react";

const EnfyconLife = () => {
    useEffect(() => {
        import("wow.js").then(({ default: WOW }) => {
            new WOW().init();
        });
    }, []);

    return (
        <section className="enfycon-life">
            <div className="enfycon-life__wrapper">
                {/* Image Collage - Full Width */}
                <div className="enfycon-life__gallery">
                    {/* Large image - Left */}
                    <div className="enfycon-life__image-item enfycon-life__image-item--large wow fadeIn" data-wow-delay="0.2s">
                        <Image
                            src="/images/culture/steptodown.com222737.jpg"
                            alt="Team collaboration at Enfycon"
                            width={600}
                            height={400}
                            className="enfycon-life__image"
                        />
                    </div>

                    {/* Medium image - Center Bottom */}
                    <div className="enfycon-life__image-item enfycon-life__image-item--medium wow fadeIn" data-wow-delay="0.3s">
                        <Image
                            src="/images/culture/steptodown.com262912.jpg"
                            alt="Enfycon culture moment"
                            width={400}
                            height={350}
                            className="enfycon-life__image"
                        />
                    </div>

                    {/* Small image - Top Right */}
                    <div className="enfycon-life__image-item enfycon-life__image-item--small wow fadeIn" data-wow-delay="0.4s">
                        <Image
                            src="/images/culture/steptodown.com882339.jpg"
                            alt="Team celebration"
                            width={350}
                            height={280}
                            className="enfycon-life__image"
                        />
                    </div>
                </div>

                {/* Hashtag - Bottom Left Overlay */}
                <div className="enfycon-life__hashtag-wrapper wow fadeInUp" data-wow-delay="0.5s">
                    <h2 className="enfycon-life__hashtag">#enfyconLife</h2>
                </div>
            </div>
        </section>
    );
};

export default EnfyconLife;
