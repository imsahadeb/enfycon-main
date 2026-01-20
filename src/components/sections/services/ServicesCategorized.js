"use client";
import ServiceCard7 from "@/components/shared/cards/ServiceCard7";
import { serviceCategories } from "@/data/servicesData";
import { useState } from "react";

const ServicesCategorized = () => {

    // State for pagination per category
    const [categoryPages, setCategoryPages] = useState(
        serviceCategories.reduce((acc, category) => {
            acc[category.id] = 1;
            return acc;
        }, {})
    );

    const servicesPerPage = 3;

    const handlePageChange = (categoryId, pageNumber) => {
        setCategoryPages((prev) => ({
            ...prev,
            [categoryId]: pageNumber,
        }));
    };

    return (
        <div className="tj-service-section service-4 section-gap">
            <div className="container">
                {serviceCategories.map((category, categoryIdx) => {
                    const currentPage = categoryPages[category.id] || 1;
                    const totalPages = Math.ceil(
                        category.services.length / servicesPerPage
                    );
                    const startIndex = (currentPage - 1) * servicesPerPage;
                    const endIndex = startIndex + servicesPerPage;
                    const currentServices = category.services.slice(startIndex, endIndex);

                    return (
                        <div
                            key={category.id}
                            className={`service-category-section ${categoryIdx > 0 ? "mt-5 pt-5" : ""
                                }`}
                        >
                            {/* Category Header */}
                            <div className="row mb-4">
                                <div className="col-12">
                                    <div className="category-header">
                                        <h2 className="category-title mb-3">{category.title}</h2>
                                        <p className="category-desc text-muted" style={{ maxWidth: "800px" }}>
                                            {category.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Cards */}
                            <div className="row row-gap-4 mb-4">
                                {currentServices.map((service, idx) => (
                                    <div key={service.id} className="col-lg-4 col-md-6">
                                        <ServiceCard7 service={service} idx={idx} />
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center gap-2 mt-3">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                                (pageNum) => (
                                                    <button
                                                        key={pageNum}
                                                        onClick={() => handlePageChange(category.id, pageNum)}
                                                        className={`btn btn-sm ${currentPage === pageNum
                                                            ? "btn-primary"
                                                            : "btn-outline-secondary"
                                                            }`}
                                                        style={{
                                                            minWidth: "40px",
                                                            height: "40px",
                                                            borderRadius: "6px",
                                                        }}
                                                    >
                                                        {pageNum}
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServicesCategorized;
