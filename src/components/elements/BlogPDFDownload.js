"use client";
import { useState, useCallback } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const BlogPDFDownload = ({ blogTitle, className }) => {
    const [loading, setLoading] = useState(false);

    const handleDownload = useCallback(async () => {
        console.log("Starting PDF generation for:", blogTitle);
        const element = document.getElementById("blog-content-area");
        console.log("Target element found:", !!element);

        if (!element) {
            console.error("Critical: 'blog-content-area' element not found in DOM.");
            alert("Error: Could not find blog content to generate PDF.");
            return;
        }

        setLoading(true);
        try {
            // Scroll to top to ensure html2canvas captures everything
            window.scrollTo(0, 0);
            // Small delay to allow scroll and rendering to stabilize
            await new Promise(resolve => setTimeout(resolve, 800));

            console.log("Starting html2canvas capture...");
            const canvas = await html2canvas(element, {
                scale: 1,
                useCORS: true,
                logging: true,
                allowTaint: true,
                background: "#ffffff"
            });
            console.log("Canvas captured. Dimensions:", canvas.width, "x", canvas.height);

            const imgData = canvas.toDataURL("image/jpeg", 0.7);

            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgProps = pdf.getImageProperties(imgData);
            const imageHeight = (imgProps.height * pdfWidth) / imgProps.width;

            console.log("PDF dimensions calculated. Generating pages...");

            let heightLeft = imageHeight;
            let position = 0;

            // Add first page
            pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, imageHeight);
            heightLeft -= pdfHeight;

            // Add subsequent pages
            while (heightLeft >= 0) {
                position = heightLeft - imageHeight;
                pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, position, pdfWidth, imageHeight);
                heightLeft -= pdfHeight;
            }

            const filename = `${(blogTitle || "blog").replace(/[^a-z0-9]/gi, '_').substring(0, 30)}.pdf`;
            console.log("Saving PDF as:", filename);
            pdf.save(filename);
            console.log("PDF save initiated.");

        } catch (error) {
            console.error("PDF generation failed with error:", error);
            alert("Failed to generate PDF. Check console for details.");
        } finally {
            setLoading(false);
        }
    }, [blogTitle]);

    return (
        <button
            onClick={handleDownload}
            disabled={loading}
            className={className || `btn-download ${loading ? "loading" : ""}`}
            style={{
                background: "transparent",
                border: "none",
                color: "inherit", // Inherit color from class if possible, or default to white logic
                padding: "0",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
            }}
        >
            <i className="flaticon-download"></i>
            <span>{loading ? "Generating..." : "Download"}</span>
        </button>
    );
};

export default BlogPDFDownload;
