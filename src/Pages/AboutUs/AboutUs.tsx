import KitchenImage from "../../assets/Kitchen.png";
import Rangeshot from "../../assets/Rangeshot.png";
import { Contact } from "../../components/Contact/Contact";
import { Hero } from "../../components/Hero/Hero";
import { Container } from "../../components/Main/styles";
import { ContentShow } from "../../components/ContentShow";
import { OilBanner } from "./components/OilBanner";
import { Vision } from "./components/Vision";
import corriandar from "../../assets/CORRIANDER.png";
import styled from "styled-components";

export const ProductImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export const ImageContainer = styled.div`
	position: absolute;
	left: 0;
	width: 200px;
	height: 300px;
	z-index: -10;
`;

export const AboutUs = () => {
	const aboutUsContentData =
		"Parampara is an offering from ADM(Archer Daniels Midland), an American conglomerate, rated amongst the top Fortune 500 companies. ADM is a global leader in nutrition, utilizing the power and provisions of nature to create ingredients and solutions that generate safe , healthy, and sustainable nutrition for people around the world. ADM helps to bring nutitional solutions to those who need them. From our vast portfolio of ingredients that can satisfy tastes and fulfill nutritional needs to our ability to innovate full formula, consumer-relevant, science-based nutition solutions proactively or through co-creation with customers. And through our years of involvement in the nutritional world, we have also created capabilities to sustainably manage and add value to every part of the global nutrition supply chain through operational proficiency with a worldwide footprint.With over 75 years of experience, ADM utilises its deep industry knowledge, market insights, and innovation expertise to create solutions for today and tomorrow";

	const thoughts = [
		"Supply chain transparency",
		"Water & waste reduction",
		"Fortune's world's most admired companies",
		"Ethisphere's world's most ethical companies",
	];
	return (
		<>
			<Container>
				<Hero image={KitchenImage}>
					<ImageContainer>
						<ProductImage
							style={{ translate: "-20% -40%" }}
							src={corriandar}></ProductImage>
					</ImageContainer>
				</Hero>
				<ContentShow heading="About us" content={aboutUsContentData} />
				<Vision />
				<OilBanner image={Rangeshot}></OilBanner>
				<Contact thoughts={thoughts}></Contact>
			</Container>
		</>
	);
};
