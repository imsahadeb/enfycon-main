"use client";

import Image from "next/image";

const ImageFeatureGrid = ({ title, items, gridClass = "image-feature-grid" }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className={`image-feature-section wow fadeInUp`} data-wow-delay=".3s">
            {title && <h2 className="section-title text-center mb-5">{title}</h2>}
            <div className={gridClass}>
                {items.map((item, idx) => (
                    <div className="image-feature-card" key={idx}>
                        <div className="image-wrapper">
                            {item.image &&
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={250}
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                            }
                        </div>
                        <div className="accent-bar" style={{ backgroundColor: item.color || 'var(--tj-color-theme-primary)' }}></div>
                        <div className="content">
                            <h4 className="title">{item.title}</h4>
                            <p className="desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageFeatureGrid;
