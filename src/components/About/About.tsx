import styled from 'styled-components';
import aboutImage from '../../assets/about.png';
import { ContentShow } from "../ContentShow";

const AboutSection = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	margin: auto;
	overflow: hidden;
	padding: 50px 20px;
	color: white;
	font-family: Arial, sans-serif;
`;


const Content = styled.div`
	display: flex;
	align-self: flex-end;
	align-items: center;
	background-color: #ffa500;
	justify-content: flex-end;
	border-radius: 500px 20px 20px 500px;
	margin-right: 0px;
	@media (max-width: 756px) {
		flex-direction: column;
		border-radius: 500px 500px 20px 20px;
		align-self: center;
	}
`;

const Text = styled.div`
	max-width: 500px;
	min-width: none;
	padding: 10px;
`;

const Heading = styled.h2`
	margin-bottom: 10px;
	color: #fffff;
`;

const Paragraph = styled.p`
	line-height: 1.6;
`;

const ImageContainer = styled.div`
	width: 300px;
	min-width: 300px;
	padding: 10px;
	border-radius: 100%;
`;

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-radius: 10px;
`;

const LearnMoreButton = styled.a`
	display: inline-block;
	padding: 10px 20px;
	margin-top: 20px;
	background-color: white;
	color: #daa520; /* Gold color */
	text-decoration: none;
	transition: background-color 0.3s;

	&:hover {
		background-color: #f1c40f;
	}
`;

export function About() {
	const headingContent =
		"Parampara cooking oils truly connote 'Swad ke Rishtey'. A fusion of taste and tradition, with the goodness of uncompromising quality, it is a rich legacy that has been passed down through generations. Parampara cooking oils enhance the flavours of foodand add a delicious dimension to your cooking. Across generations, across cultures, across cuisines, Parampara is here to foster and nurture relationships that last.";
	return (
		<AboutSection id="about">
			<ContentShow
				heading="A fusion of taste and tradition"
				content={headingContent}
			/>
			<Content>
				<ImageContainer>
					<StyledImage src={aboutImage} alt="Delicious dish" />
				</ImageContainer>
				<Text>
					<Heading>Transcending time and taste to create new bonds</Heading>
					<Paragraph>
						Whether a shared meal or preparing for one; everyday khana or exotic
						dishes, Parampara is at the heart of it all. Also, food is that one
						ingredient that encourages us to celebrate shared stories,
						togetherness and joy. And helping food achieve all this is the oil
						in which it is prepared, an oil that is made for the home
						masterchefs - Parampara.
					</Paragraph>
					<LearnMoreButton href="#learn-more">Learn More</LearnMoreButton>
				</Text>
			</Content>
		</AboutSection>
	);
};

