import React from 'react';
import styled from "styled-components";

const SectionContainer = styled.section`
	background-size: cover;
	background-position: center;
	color: #fff;
	text-align: center;
	padding: 200px 0; /* Increased padding for increased height */
`;

const TextContainer = styled.div`
	transform: rotate(-5deg); /* Center the text */
	text-align: center;
	color: white;
	transform-origin: center;
`;

const Heading = styled.h2`
	-webkit-text-stroke: 5px white;
	text-wrap: nowrap;
	-webkit-text-fill-color: transparent;
	font-size: 2.5rem; /* Increase font size */
	font-weight: bold; /* Make the text bold */
	letter-spacing: 2px; /* Add letter spacing */

	@media (max-width: 756px) {
		font-size: 1.5rem;
		-webkit-text-stroke: 3px white;
	}
		margin-bottom: 20px;
`;

const Subheading = styled.p`
	font-size: 1.5rem;
`;

interface BannerProps {
	image: any;
	text?: string;
}

export const Banner: React.FC<BannerProps> = ({ image, text }) => {
	return (
		<SectionContainer
			style={{
				backgroundImage: `url(${image})`,
			}}>
			{text && (
				<TextContainer>
					<Heading>{text}</Heading>
				</TextContainer>
			)}
		</SectionContainer>
	);
};
