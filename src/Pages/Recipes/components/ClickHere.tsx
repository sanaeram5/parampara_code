import styled from "styled-components";

// Styled component for the text overlay
const TextOverlay = styled.div`
	position: absolute;
	bottom: 5%; /* Position at the vertical center */
	left: 50%; /* Position at the horizontal center */
	transform: translate(-50%, -50%) rotate(-10deg); /* Center the text */
	text-align: center;
	color: white;
	transform-origin: center;

	@media (max-width: 756px) {
		font-size: 1rem;
		-webkit-text-stroke: 3px white;
	}
`;

// Styled component for the title
const Title = styled.h1`
	-webkit-text-stroke: 5px white;
	text-wrap: nowrap;
	-webkit-text-fill-color: transparent;
	font-size: 5rem; /* Increase font size */
	margin-bottom: 0.5rem; /* Reduce margin bottom */
	font-weight: bold; /* Make the text bold */
	letter-spacing: 2px; /* Add letter spacing */

	@media (max-width: 756px) {
		font-size: 2rem;
		-webkit-text-stroke: 2px white;
	}

	@media (max-width: 550px) {
		font-size: 1.5rem;
		-webkit-text-stroke: 1px white;
	}
`;

const Desc = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const DescText = styled.div`
	font-size: 2rem;

	@media (max-width: 756px) {
		font-size: 1rem;
		-webkit-text-stroke: 1px white;
	}

	@media (max-width: 550px) {
		font-size: 0.8rem;
		-webkit-text-stroke: 0.8px white;
	}
`;

const Line = styled.div`
	width: 150px;
	height: 5px;
	background-color: white;
	margin: 15px;

	@media (max-width: 756px) {
		width: 100px;
		height: 3px;
	}
`;
export const ClickHere = () => {
	return (
		<TextOverlay>
			<Title>Click here to download</Title>
			<Desc>
				<Line />
				<DescText>
					our receipe e-book to try out a variety of lip smacking receipes
				</DescText>
				<Line />
			</Desc>
		</TextOverlay>
	);
};
