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
	max-width: 800px;
	margin: 0 auto;
`;

const Heading = styled.h2`
	font-size: 2.5rem;
	font-weight: bold;
	margin-bottom: 20px;
`;

const Subheading = styled.p`
	font-size: 1.5rem;
	font-style: italic;
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
