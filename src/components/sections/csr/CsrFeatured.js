"use client";

const CsrFeatured = ({ data }) => {
    return (
        <section className="csr-featured-section section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="sec-heading text-center">
                           
                            <h3 className="sec-title text-uppercase wow fadeInUp" data-wow-delay=".4s">
                                {data.title}
                            </h3>
                            <p className="desc wow fadeInUp" data-wow-delay=".5s">{data.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    {data.items.map((item, idx) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                            <div className="csr-featured-item">
                                <div className="icon-box" style={{ color: item.color }}>
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <h5 className="title">{item.title}</h5>
                                    <p className="desc">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CsrFeatured;
