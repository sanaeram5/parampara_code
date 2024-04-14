import { Contact } from "../../components/Contact/Contact";
import { ContentShow } from "../../components/ContentShow";
import { Hero } from "../../components/Hero/Hero";
import { Container } from "../../components/Main/styles";
import SoyaChunkImage from "../../assets/soya_chunk.png";
import styled from "styled-components";
import soy1 from "../../assets/soya-1.png";
import soy2 from "../../assets/soya-2.png";
import soy3 from "../../assets/soya-3.png";
import soy4 from "../../assets/soya-4.png";

export const ProductImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;

	@media (max-width: 756px) {
	}
`;
export const ImageContainer = styled.div`
	position: absolute;
	right: 0;
	width: 200px;
	height: 300px;

	@media (max-width: 756px) {
		width: 80px;
		top: 120%;
	}
`;
export const SideImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;

	@media (max-width: 756px) {
	}
`;
export const SideImageContainer = styled.div`
	position: absolute;
	right: 0;
	width: 100px;
	z-index: -10;

	@media (max-width: 756px) {
		width: 80px;
		top: 100%;
	}
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
	position: absolute;
	width: 70%;
	top: 50%; /* Position at the vertical center */
	left: 50%; /* Position at the horizontal center */
	transform: translate(-50%, -50%) rotate(-20deg); /* Center the text */
	text-align: center;
	color: white;
	transform-origin: center;
`;

// Styled component for the title
const Title = styled.h1`
	-webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
	font-size: 6rem; /* Increase font size */
	margin-bottom: 0.5rem; /* Reduce margin bottom */
	font-weight: bold; /* Make the text bold */
	letter-spacing: 2px; /* Add letter spacing */

	@media (max-width: 756px) {
		font-size: 2rem;
		-webkit-text-stroke: 2px white;
	}
`;

export const Foods = () => {
	const foodContent =
		"Under our Healthfit brand, we are now foraying into other products such as soy chunks. Assuring you of best quality and nutrition, Soy chunks can be mixed with anything as an extender or they can be cooked as a standalone dish. Available in two different variants, they are available as Healthfit Soya chunks and Healthfit Mini Soya Chunks.";

	const flavourContent = "Soyabean, green and brown pulses like moong, arhar and others are rich in proteins. They are the most easily available source of nutrition for millions of people in the country. Our offerings in this category are sourced responsibly and packaged to ensure that our customers get the best out of them"
	const thoughts = [
		"Supply chain transparency",
		"Water & waste reduction",
		"Fortune's world's most admired companies",
		"Ethisphere's world's most ethical companies",
	];
	return (
		<>
			<Container style={{ overflow: "hidden" }}>
				<Hero image={SoyaChunkImage}>
					<>
						<TextOverlay>
							<Title>Power packed with nutrition</Title>
						</TextOverlay>
						<ImageContainer>
							<ProductImage
								style={{ translate: "-30% -110%" }}
								src={soy1}></ProductImage>
						</ImageContainer>
						<ImageContainer>
							<ProductImage
								style={{ translate: "-110% -105%" }}
								src={soy2}></ProductImage>
						</ImageContainer>
					</>
				</Hero>
				<SideImageContainer style={{ left: 0, translate: "-25% -0%" }}>
					<SideImage src={soy3} />
				</SideImageContainer>
				<SideImageContainer style={{ translate: "0% 150%" }}>
					<SideImage src={soy4} />
				</SideImageContainer>
				<ContentShow heading="Foods" content={foodContent} />
				<ContentShow
					heading="Protein-rich, flabourful"
					content={flavourContent}
				/>
				<Contact thoughts={thoughts}></Contact>
			</Container>
		</>
	);
};
