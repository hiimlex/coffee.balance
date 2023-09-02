import { IMakeRecipeDTO, IRecipeStepDTO } from "@/app/api";
import { CoreHeader } from "@/core/components";
import {
	StyledBackLink,
	StyledStep,
	StyledStepperViewContainer,
	StyledStepperViewRecipe,
	StyledStepperViewRecipeGrid,
	StyledStepperViewRecipeLabel,
	StyledStepperViewRecipeValue,
} from "./styles";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

interface IStepperViewProps extends IMakeRecipeDTO {}

const StepperView: React.FC<IStepperViewProps> = ({ recipe, data }) => {
	const formula = recipe.formula(data.grounds, data.ratio);

	const navigate = useNavigate();

	const getStep = (step: string, index: number): IRecipeStepDTO => {
		const { label, isTimer } = recipe.stepsObject[step];
		let replacedLabel = `${index + 1}. ${label}`;

		Object.keys(formula).forEach((key) => {
			if (label.includes(key)) {
				replacedLabel = replacedLabel.replace(key, (formula as any)[key]);
			}
		});

		return { label: replacedLabel, isTimer };
	};

	const goBack = () => {
		navigate("/");
	};

	return (
		<StyledStepperViewContainer>
			<StyledBackLink onClick={goBack}>
				<ArrowLeft size={14} className="icon" /> back
			</StyledBackLink>
			<CoreHeader />
			<StyledStepperViewRecipeGrid>
				<StyledStepperViewRecipe>
					<StyledStepperViewRecipeValue>
						{recipe.name}
					</StyledStepperViewRecipeValue>
					<StyledStepperViewRecipeLabel>recipe</StyledStepperViewRecipeLabel>
				</StyledStepperViewRecipe>
				<StyledStepperViewRecipe>
					<StyledStepperViewRecipeValue>
						{data.grounds}g/~{Number(data.grounds * data.ratio).toFixed(0)}ml
					</StyledStepperViewRecipeValue>
					<StyledStepperViewRecipeLabel>size</StyledStepperViewRecipeLabel>
				</StyledStepperViewRecipe>
				<StyledStepperViewRecipe>
					<StyledStepperViewRecipeValue>
						{recipe.minutes}m
					</StyledStepperViewRecipeValue>
					<StyledStepperViewRecipeLabel>time</StyledStepperViewRecipeLabel>
				</StyledStepperViewRecipe>
			</StyledStepperViewRecipeGrid>
			{recipe.steps.map((step, index) => {
				const stepObj = getStep(step, index);

				return (
					<StyledStep key={index} isTimer={stepObj.isTimer}>
						{stepObj.label}
					</StyledStep>
				);
			})}
		</StyledStepperViewContainer>
	);
};

export default StepperView;
