import styled from "styled-components";
import backgroundImage from "../../../assets/background.png";
import gobhi from "../../../assets/Gobhi.png";
import moongDal from "../../../assets/moong_dal.png";
import hareCholiyan from "../../../assets/hare_choliyan.png";
import lahsun from "../../../assets/lahsun.png";
import matar from "../../../assets/Matar_ka_nimona.png";
import kalaChana from "../../../assets/kala_chana.png";
import greenImage from "../../../assets/image.png";

const RecipeContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 100px;
	background: url(${backgroundImage});
	background-size: cover;
`;

const Recipes = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
`;

const Heading = styled.h1`
	text-align: center;
	width: 80%;
	background-image: url(${greenImage});
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-top: 200px;
	text-align: center;
	font-weight: 800;
	-webkit-font-smoothing: antialiased;

	@media (max-width: 756px) {
		margin-top: 40px;
		font-size: 1.5rem;
	}
`;

const RecipeTileContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 450px;
	min-width: 300px;
	height: 450px;
	gap: 2rem;
	margin-top: 40px;
`;

const ExploreButton = styled.div`
	padding: 10px;
	background-color: #f6b71e;
	font-size: 1.3rem;
	border-radius: 5px;

	@media (max-width: 756px) {
		font-size: 1.1rem
	}
`;

const RecipeTile: React.FC<Recipe> = ({ image, url }) => {
	return (
		<RecipeTileContainer>
			<div style={{ minWidth: "200px",maxWidth: "400px" }}>
				<img alt="dummy" src={image} style={{ width: "100%" }} />
			</div>
			<ExploreButton>explore button</ExploreButton>
		</RecipeTileContainer>
	);
};

type Recipe = {
	image: any;
	url: string;
};

export const RecipesPDF = () => {
	const recipes: Recipe[] = [
		{
			image: gobhi,
			url: "",
		},
		{
			image: kalaChana,
			url: "",
		},
		{
			image: matar,
			url: "",
		},
		{
			image: moongDal,
			url: "",
		},
		{
			image: lahsun,
			url: "",
		},
		{
			image: hareCholiyan,
			url: "",
		},
	];
	return (
		<RecipeContainer>
			<Heading>
				Apni favourite dishes ko do ek naya andaaz, parampara oils ke saath
			</Heading>
			<Recipes>
				{recipes.map((recipe) => (
					<RecipeTile image={recipe.image} url={recipe.url}></RecipeTile>
				))}
			</Recipes>
		</RecipeContainer>
	);
};
