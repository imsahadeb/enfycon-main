import React from 'react';

const ApproachSection = ({ approach }) => {
    if (!approach) return null;

    const { title, desc, items } = approach;

    return (
        <section className="approach-section section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-head text-center mb-5">
                            <h2 className="section-title">{title}</h2>
                            <p className="desc">{desc}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {items?.map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={index}>
                            <div className="approach-card text-center">
                                <div className="icon-box mb-4">
                                    <i className={`icon ${item.icon}`}></i>
                                </div>
                                <h3 className="title mb-3">{item.title}</h3>
                                <p className="desc mb-0">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApproachSection;
