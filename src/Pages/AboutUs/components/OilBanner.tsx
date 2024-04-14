import React from "react";
import styled from "styled-components";
import onion from "../../../assets/onion.png";

const SectionContainer = styled.section`
	background-size: cover;
	background-position: center;
	color: #fff;
	text-align: center;
	padding: 100px; /* Increased padding for increased height */

	@media (max-width: 500px) {
		padding: 50px 0 0 0;
	}
`;

export const ProductImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export const ImageContainer = styled.div`
	position: absolute;
	left: 0;
	width: 100px;
	height: 300px;
	z-index: -10;

	@media (max-width: 756px) {
		width: 50px;
	}
`;

// Styled component for the image
const StyledImage = styled.img`
	width: 100%;
	height: 100%; /* Spread the image all over the container */
	object-fit: cover; /* Ensure the image covers the entire container */
`;

interface OilBannerProps {
	image: any;
}

export const OilBanner: React.FC<OilBannerProps> = ({ image }) => {
	return (
		<SectionContainer>
			<ImageContainer>
				<ProductImage
					style={{ translate: "-50% -40%" }}
					src={onion}></ProductImage>
			</ImageContainer>
			<StyledImage src={image} />
		</SectionContainer>
	);
};
