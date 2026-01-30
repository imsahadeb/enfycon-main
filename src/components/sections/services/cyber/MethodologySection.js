import React from 'react';

const MethodologySection = ({ methodology }) => {
    if (!methodology) return null;

    const { title, desc, items } = methodology;

    // Split items into two columns
    const half = Math.ceil(items.length / 2);
    const col1 = items.slice(0, half);
    const col2 = items.slice(half);

    return (
        <section className="methodology-section section-gap bg-gray-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="methodology-content pe-lg-5">
                            <h2 className="title text-3xl font-bold mb-4">{title}</h2>
                            <p className="desc text-lg mb-0">{desc}</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <ul className="list-unstyled methodology-list">
                                    {col1.map((item, index) => (
                                        <li key={index} className="mb-3 d-flex align-items-center">
                                            <span className="bullet-point me-3"></span>
                                            <span className="text-secondary fw-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled methodology-list">
                                    {col2.map((item, index) => (
                                        <li key={index} className="mb-3 d-flex align-items-center">
                                            <span className="bullet-point me-3"></span>
                                            <span className="text-secondary fw-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;
