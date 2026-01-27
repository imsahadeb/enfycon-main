"use client";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ item, setCurrentItem }) => {
    const { addProductToCart } = useCartContext();
    const { addProductToWishlist } = useWishlistContext();
    const {
        id,
        title,
        price,
        previousPrice,
        img,
        reviews,
        status,
        category,
        discount,
        slug,
    } = item;
    const isStockOut = status === "Sold" ? true : false;
    const isNew = status === "New" ? true : false;
    return (
        <div className="col">
            <div className="tj-shop-item">
                <div className="tj-shop-item-top">
                    <div className="tj-shop-item-image">
                        <Link href={`/product/${slug ? slug : id}`}>
                            <Image
                                src={img ? img : "/images/product/product-1.webp"}
                                alt={title}
                                width={300}
                                height={300}
                            />
                        </Link>
                    </div>
                    <div className="tj-shop-item-content">
                        <div className="tj-shop-item-content-left">
                            {/* <div className="tj-rating-area">
								<div className="tj-rating-icon">
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-regular fa-star"></i>
								</div>
								<div className="tj-rating-points">
									<p>({reviews} Reviews)</p>
								</div>
							</div> */}
                            <h5 className="tj-shop-item-title">
                                <Link href={`/product/${slug ? slug : id}`}>{title}</Link>
                            </h5>
                            <div className="tj-shop-item-price-area">
                                <span className="price-amount amount">
                                    <span className="currency-symbol">$</span>
                                    {price?.toFixed(2)}
                                </span>
                                {previousPrice ? (
                                    <del>
                                        <span className="price-amount amount">
                                            <span className="currency-symbol">$</span>
                                            {previousPrice?.toFixed(2)}
                                        </span>
                                    </del>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="tj-shop-item-content-right">
                            <div className="tj-shop-item-action">
                                <ul>
                                    <li>
                                        <button
                                            type="button"
                                            className="tj-transparent-btn"
                                            onClick={() =>
                                                addProductToCart({
                                                    id,
                                                    title,
                                                    price,
                                                    quantity: 1,
                                                    img,
                                                })
                                            }
                                        >
                                            <i className="fal fa-shopping-cart"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="tj-transparent-btn"
                                            onClick={() =>
                                                addProductToWishlist({ ...item, quantity: 1 })
                                            }
                                        >
                                            <i className="fal fa-heart"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="tj-transparent-btn modal-active-btn"
                                            onClick={() => setCurrentItem(item)}
                                        >
                                            <i className="fal fa-eye"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {discount ? (
                        <div className="tj-shop-item-badge">
                            <span className="badge-text">{discount}% Off</span>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
