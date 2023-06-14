import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./backToTop.css";

const BackToTop = () => {
	const [backToTopBtn, scrolled] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 100) {
				scrolled(true);
			} else {
				scrolled(false);
			}
		};
	}, []);

	const top = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="backToTopContainer">
			{backToTopBtn && (
				<button id="topBtn" onClick={top}>
					<FaArrowUp /> Top
				</button>
			)}
		</div>
	);
};

export default BackToTop;
