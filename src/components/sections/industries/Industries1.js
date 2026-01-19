"use client";
import IndustryCard from "@/components/shared/cards/IndustryCard";

const Industries1 = () => {
    const industries = [
        {
            id: "healthcare",
            title: "HEALTHCARE",
            icon: "fa-solid fa-heart-pulse",
            bgColor: "#8B5CF6", // Vibrant purple
        },
        {
            id: "legal",
            title: "LEGAL",
            icon: "fa-solid fa-scale-balanced",
            bgColor: "#1E40AF", // Deep blue
        },
        {
            id: "finance",
            title: "FINANCE",
            icon: "fa-solid fa-chart-line",
            bgColor: "#10B981", // Emerald green
        },
        {
            id: "banking",
            title: "BANKING",
            icon: "fa-solid fa-building-columns",
            bgColor: "#0891B2", // Teal
        },
        {
            id: "manufacturing",
            title: "MANUFACTURING",
            icon: "fa-solid fa-industry",
            bgColor: "#F97316", // Vibrant orange
        },
        {
            id: "human-resources",
            title: "HUMAN RESOURCES",
            icon: "fa-solid fa-users",
            bgColor: "#EC4899", // Vibrant pink/magenta
        },
    ];

    return (
        <section className="industry-section section-gap bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading sec-heading-center mb-5">
                            <h2 className="sec-title title-anim">
                                Industries We Serve
                            </h2>
                            <p className="sec-desc mt-3 text-muted">
                                Business isn't one size fits all. Every industry requires a custom solution.<br />
                                Learn more about how we've helped businesses in your industry by clicking below.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center g-4">
                    {industries.map((industry, idx) => (
                        <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <IndustryCard industry={industry} idx={idx} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries1;
