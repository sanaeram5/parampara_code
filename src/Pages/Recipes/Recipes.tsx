import { Hero } from "../../components/Hero/Hero";
import { Container } from "../../components/Main/styles";
import Kitchen from "../../assets/new.png";
import { RecipesPDF } from "./components/RecipesPDF";
import { ClickHere } from "./components/ClickHere";


export const Recipes = () => {
	return (
		<>
			<Container>
				<Hero image={Kitchen}>
					<ClickHere/>
				</Hero>
				<RecipesPDF/>
			</Container>
		</>
	);
};
