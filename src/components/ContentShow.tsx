import styled from "styled-components";
import soyaChunk from "../assets/orange.jpg";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1.5rem;
	margin: 50px 0;
	color: black;
`;

const Heading = styled.div`
	font-size: 3rem;
	background-image: url(${soyaChunk});
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-align: center;
	font-weight: 800;
`;

const Content = styled.div`
	padding: 10px 100px;
	font-size: 1.2rem;

	@media (max-width: 756px) {
		padding: 20px 0 0 0;
		font-size: 1rem;
	}
`;

interface ContentShowProps {
	heading: string;
	content: string;
}

export const ContentShow: React.FC<ContentShowProps> = ({
	heading,
	content,
}) => {
	return (
		<Container>
			<Heading style={{fontSize: heading.length > 10 ? "2rem":"3rem"}}>{heading}</Heading>
			<Content>{content}</Content>
		</Container>
	);
};
