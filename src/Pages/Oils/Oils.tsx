import MenWomen from "../../assets/MenWomen.png";
import { Contact } from "../../components/Contact/Contact";
import { ContentShow } from "../../components/ContentShow";
import { Hero } from "../../components/Hero/Hero";
import { Container } from "../../components/Main/styles";
import { OilTypes } from "./components/OilTypes";
import { PointList } from "./components/PointList";
import corriandar from "../../assets/CORRIANDER.png";
import onion from "../../assets/onion.png";
import styled from "styled-components";
import Product1 from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";

export const ProductImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export const ImageContainer = styled.div`
	position: absolute;
	width: 200px;
	height: 300px;
	z-index: -10;
`;

export const OilProductImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export const OilImageContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 60%;
	width: 200px;
	z-index: 1000;

	@media (max-width: 756px) {
		width: 100px;
		top: 57%;
	}
	@media (min-width: 1000px) {
		width: 300px;
		top: 57%;
	}
`;

export const Oils = () => {
	const oilContentData =
		"Parampara oils are a premium everyday cooking medium that are representive of our'Farm to table' philosophy, particularly the Mustard oil where our high yield seeds are used by farmers for a bumper crop. While this ensures profits for them, it also guarantees a certain pureness of the finished product for our customers, Extremely versatile, all Parampara oils can be used every day for medium to high temperature cooking, frying, sauteing, and much more.";
	const thoughts = [
		"Supply chain transparency",
		"Water & waste reduction",
		"Fortune's world's most admired companies",
		"Ethisphere's world's most ethical companies",
	];
	return (
		<>
			<Container>
				<Hero image={MenWomen}>
					<OilImageContainer>
						<OilProductImage
							style={{ translate: "0 0" }}
							src={Product1}></OilProductImage>
					</OilImageContainer>
					<OilImageContainer>
						<OilProductImage
							style={{ translate: "-100% 0" }}
							src={Product2}></OilProductImage>
					</OilImageContainer>
					<ImageContainer style={{ left: "0" }}>
						<ProductImage
							style={{ translate: "-20% -40%" }}
							src={corriandar}></ProductImage>
					</ImageContainer>
					<ImageContainer style={{ right: "0" }}>
						<ProductImage
							style={{ translate: "0% 300%", transform: " scaleX(-1)" }}
							src={onion}></ProductImage>
					</ImageContainer>
				</Hero>
				<ContentShow heading="Oils" content={oilContentData} />
				<OilTypes />
				<PointList />
				<Contact thoughts={thoughts}></Contact>
			</Container>
		</>
	);
};
