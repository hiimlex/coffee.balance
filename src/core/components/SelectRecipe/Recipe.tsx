import { IRecipeDTO } from "@/app/api";
import { RecipesService } from "@/app/api/services";
import { StyledRecipesGrid } from "@/app/modules/BalanceModule/views/MainView/styles";
import { StyledRecipe, StyledRecipesField, StyledRecipesLabel } from "./styles";

interface ISelectRecipeProps {
	onSelectRecipe: (recipe: IRecipeDTO) => void;
	selectedRecipeName?: string;
}

const SelectRecipe: React.FC<ISelectRecipeProps> = ({
	onSelectRecipe,
	selectedRecipeName,
}) => {
	return (
		<StyledRecipesField>
			<StyledRecipesLabel>pour-over recipe</StyledRecipesLabel>
			<StyledRecipesGrid>
				{RecipesService.all.map((recipe, index) => (
					<StyledRecipe
						key={index}
						onClick={() => onSelectRecipe(recipe)}
						selected={selectedRecipeName === recipe.name}
					>
						{recipe.name}
					</StyledRecipe>
				))}
			</StyledRecipesGrid>
		</StyledRecipesField>
	);
};

export default SelectRecipe;
