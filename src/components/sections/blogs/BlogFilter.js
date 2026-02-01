"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const BlogFilter = ({ categories = [], authors = [], initialCategory = "", initialAuthor = "", onFilter, isParentLoading }) => {
    // const router = useRouter(); // Handled by parent
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedAuthor, setSelectedAuthor] = useState(initialAuthor);
    // const [isPending, setIsPending] = useState(false); // Handled by parent

    const handleFilter = () => {
        if (onFilter) {
            onFilter(selectedCategory, selectedAuthor);
        }
    };

    return (
        <>
            <div className="row mb-4 align-items-center mt-5">
                <div className="col-lg-6 mb-3 mb-lg-0">
                    <h3 className="section-title mb-0">Latest Blog Post</h3>
                </div>
                <div className="col-lg-6">
                    <div className="d-flex gap-3 justify-content-lg-end align-items-center flex-wrap">
                        {/* Category Filter */}
                        <div className="position-relative" style={{ minWidth: "200px" }}>
                            <select
                                className="form-select rounded-0 border-0 border-bottom"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                style={{ backgroundColor: "transparent", boxShadow: "none" }}
                            >
                                <option value="">All Categories</option>
                                {categories.map((cat) => (
                                    <option key={cat.slug} value={cat.slug}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Author Filter */}
                        <div className="position-relative" style={{ minWidth: "150px" }}>
                            <select
                                className="form-select rounded-0 border-0 border-bottom"
                                value={selectedAuthor}
                                onChange={(e) => setSelectedAuthor(e.target.value)}
                                style={{ backgroundColor: "transparent", boxShadow: "none" }}
                            >
                                <option value="">Choose Author</option>
                                {authors.map((auth) => (
                                    <option key={auth.slug} value={auth.slug}>
                                        {auth.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Filter Button */}
                        <button
                            className="btn btn-dark rounded-1 px-4 d-flex align-items-center gap-2"
                            onClick={handleFilter}
                            disabled={isParentLoading}
                            style={{ backgroundColor: "#555" }}
                        >
                            <i className="flaticon-filter"></i>
                            {isParentLoading ? "Filtering..." : "Filter by"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12">
                    <hr className="light-separator" style={{ borderColor: 'rgba(0,0,0,0.1)', margin: 0 }} />
                </div>
            </div>
        </>
    );
};

export default BlogFilter;
