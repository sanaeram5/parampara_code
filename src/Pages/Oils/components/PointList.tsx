import styled from "styled-components";

type Point = {
	heading: string;
	desc: string;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 50px 60px;
	font-size: 1.5rem;
	gap: 5px;
	
	@media (max-width: 756px) {
		font-size: 1.2rem;
	}
`;

const Heading = styled.span`
	font-weight: bold;
`;

export const PointList = () => {
	const healthBenifits: Point[] = [
		{
			heading: "Heart Health",
			desc: "Peanut oil has monounsaturated and polyunsaturated fats that are knownto be good for heart health",
		},
		{
			heading: "Rich in Antioxidants",
			desc: "It's rich in vitamin E, which is a powerful antioxidant, helping your cells from damage.",
		},
		{
			heading: "Vitamin K",
			desc: "Groundnut oil has Vitamin K, which is important for blood clotting and bone health",
		},
		{
			heading: "Digestive Health",
			desc: "It's got fiber that helps in the digestive process",
		},
	];

	return (
		<Container>
			{healthBenifits.map((benifit: Point, index) => (
				<div>
					<Heading>{`${index + 1}. ${benifit.heading} : `}</Heading>
					<span>{benifit.desc}</span>
				</div>
			))}
		</Container>
	);
};
