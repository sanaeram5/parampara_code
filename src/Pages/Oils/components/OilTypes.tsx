import styled from "styled-components";
import Product1 from "../../../assets/product2.png";
import Product2 from "../../../assets/product1.png";
import Product3 from "../../../assets/GROUNDNUT.png";

const OilTypeContainer = styled.div`
	width: 80%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
const OilTypeTile = styled.div`
	display: flex;
	width: 400px;
	height: 400px;
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 50px;
	align-items: center;
	background: #f0efeb;
	padding: 30px 20px;
	color: #000000;
	gap:20px;
	border-radius: 15px;
`;

const ProductContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ImageContainer = styled.div`
	width: 50%;
	aspect: auto;
`;

const StyledImage = styled.img`
	width: 85%;
	height: 90%;
	object-fit: contain;
`;

type OilType = {
	heading: string[];
	image: string;
	content: string;
	color: string;
};

const oilTypesArray: OilType[] = [
	{
		image: Product1,
		content:
			"Parampara Refined Soyabean Oil contains Omega 6 PUFA & amp; Omega 3 PUFA in appropriate proportions that help in maintaining normal blood cholesterol levels, besides tocopherols which are natural antioxidants",
		heading: ["Parampara", "Refined", "Soyabean Oil"],
		color: "#86b755",
	},
	{
		image: Product2,
		content:
			"Parampara Kachi Ghani Mustard Oil contains Omega 3 PUFA that contributes towards maintaining blood cholesterol levels. All our oils are fortified with Vitamins A &amp; D, further ensuring that food cooked not only tastes great, but is nutritious too.",
		heading: ["Parampara", "Kachi Ghani", "Mustard Oil"],
		color: "#db0d1a",
	},
	{
		image: Product3,
		content:
			"More natural, more flavourful,Parampara Filtered Groundnut Oil has a more nutty peanut taste and nutrients, it's made by pressing the peanutes slowly the old-fashioned way",
		heading: ["Parampara", "Filtered", "Groundnut Oil"],
		color: "#7f4a33",
	},
	{
		image: Product3,
		content:
			"More natural, more flavourful,Parampara Filtered Groundnut Oil has a more nutty peanut taste and nutrients, it's made by pressing the peanutes slowly the old-fashioned way",
		heading: ["Parampara", "Filtered", "Groundnut Oil"],
		color: "#7f4a33",
	},
];

const OilTypeCard: React.FC<OilType> = ({ image, heading, content, color }) => {
	return (
		<>
			<OilTypeTile>
				<ProductContainer className="product">
					<div>
						{heading.map((item) => (
							<div
								style={{ color: color, fontSize: "1.5rem", fontWeight: "800" }}>
								{item}
							</div>
						))}
					</div>
					<ImageContainer>
						<StyledImage src={image} />
					</ImageContainer>
				</ProductContainer>
				<div style={{ fontSize: "1rem" }}>{content}</div>
			</OilTypeTile>
		</>
	);
};

export const OilTypes = () => {
	return (
		<div style={{display:"flex",justifyContent:"center"}}>
			<OilTypeContainer>
			{oilTypesArray.map((OilType: OilType) => (
				<OilTypeCard
					content={OilType.content}
					heading={OilType.heading}
					image={OilType.image}
					color={OilType.color}
				/>
			))}
		</OilTypeContainer>
		</div>
		
	);
};
