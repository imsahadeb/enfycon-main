"use client";

import Image from "next/image";

const IndustrySplitSection = ({ item }) => {
    if (!item) return null;
    const { title, desc, image } = item;

    return (
        <div className="industry-split-section wow fadeInUp" data-wow-delay=".3s">
            <div className="split-wrapper">
                <div className="image-box">
                    {image && <Image src={image} alt={title} width={800} height={600} />}
                </div>
                <div className="content-box">
                    <div className="title-block">
                        <h3 className="title">{title}</h3>
                    </div>
                    <div className="desc-block">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustrySplitSection;
