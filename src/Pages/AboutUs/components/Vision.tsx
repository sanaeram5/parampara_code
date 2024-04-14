import styled from "styled-components";

const VisionContainer = styled.div`
	width: 100%;
	display: flex;
	padding-top: 20px;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px 0;
`;
const VisionTile = styled.div`
	display: flex;
	width: 350px;
	max-width: 400px;
	height: 250px;
	flex-direction: column;
	justify-content: start;
	padding-top: 50px;
	align-items: center;

	@media (max-width: 756px) {
		width: 300px;
		height: 200px;
	}
`;

const Heading = styled.div`
	color: white;
	font-size: 2.8rem;

	@media (max-width: 756px) {
		font-size: 1.8rem;
	}
`;

const Desc = styled.div`
	color: white;
	font-size: 1.1rem;

	@media (max-width: 756px) {
		font-size: 1rem;
	}
`;

type VisionType = {
	heading: string;
	icon: string;
	content: string[];
	color: string;
};

const visionArray: VisionType[] = [
	{
		icon: "",
		heading: "Vision",
		content: [
			"To offer products that derive their",
			"goodness from nature-sourced",
			"ingredients to enrich the lives of all",
			"those who use them",
		],
		color: "#8abd26",
	},
	{
		icon: "",
		heading: "Mission",
		content: [
			" Overcoming nutritional challenges",
			"through our innovations to offer",
			"solutions that are truly nutritious",
			"and enjoyable for everyone",
		],
		color: "#f5af0f",
	},
	{
		icon: "",
		heading: "Core values",
		content: ["Multi-faceted", "Ingenious", "Innovative"],
		color: "#63b35e",
	},
];

const VisionCard: React.FC<VisionType> = ({
	icon,
	heading,
	content,
	color,
}) => {
	return (
		<>
			<VisionTile style={{ backgroundColor: color }}>
				<div className="icon"></div>
				<Heading>{heading}</Heading>
				<div
					style={{
						width: "80px",
						height: "2px",
						backgroundColor: "white",
						margin: "15px",
					}}
				/>
				{content.map((item) => (
					<Desc>{item}</Desc>
				))}
			</VisionTile>
		</>
	);
};

export const Vision = () => {
	return (
		<VisionContainer>
			{visionArray.map((vision: VisionType) => (
				<VisionCard
					content={vision.content}
					heading={vision.heading}
					icon={vision.icon}
					color={vision.color}
				/>
			))}
		</VisionContainer>
	);
};
