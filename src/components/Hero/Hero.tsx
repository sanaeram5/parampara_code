import React, { ReactNode } from "react";
import styled from "styled-components";

// Styled component for the hero section
const HeroSection = styled.div`
	width: 100%;
	// aspect-ratio: 2/1;
	position: relative; /* Position relative to allow absolute positioning of text */

	@media (max-width: 500px) {
		aspect-ratio: 1;
	}
`;

// Styled component for the image
const HeroImageStyled = styled.img`
	width: 100%;
	height: 100%; /* Spread the image all over the container */
	object-fit: cover; /* Ensure the image covers the entire container */
`;

interface HeroProps {
	image: any;
	children?: ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ image, children }) => {
	return (
		<HeroSection>
			<HeroImageStyled src={image} alt="Hero Image" />
			{children}
		</HeroSection>
	);
};
