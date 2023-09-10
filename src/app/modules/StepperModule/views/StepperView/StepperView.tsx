import { IMakeRecipeDTO, IRecipeStepDTO } from "@/app/api";
import { CoreHeader } from "@/core/components";
import {
	StyledBackLink,
	StyledModalContainer,
	StyledModalContent,
	StyledStep,
	StyledStepperViewContainer,
	StyledStepperViewRecipe,
	StyledStepperViewRecipeGrid,
	StyledStepperViewRecipeLabel,
	StyledStepperViewRecipeValue,
	StyledTipModal,
} from "./styles";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import { MouseEvent, useState } from "react";

interface IStepperViewProps extends IMakeRecipeDTO {}

const StepperView: React.FC<IStepperViewProps> = ({ recipe, data }) => {
	const formula = recipe.formula(data.grounds, data.ratio);
	const [showModal, setShowModal] = useState(false);

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

	const handleShowModal = (event: MouseEvent) => {
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}

		setShowModal((curr) => !curr);
	};

	const stopPropagation = (event: MouseEvent) => {
		event.stopPropagation();
	};

	return (
		<>
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
							1:{data.ratio}
						</StyledStepperViewRecipeValue>
						<StyledStepperViewRecipeLabel>ratio</StyledStepperViewRecipeLabel>
					</StyledStepperViewRecipe>
					<StyledStepperViewRecipe>
						<StyledStepperViewRecipeValue>
							{recipe.minutes}m
						</StyledStepperViewRecipeValue>
						<StyledStepperViewRecipeLabel>time</StyledStepperViewRecipeLabel>
					</StyledStepperViewRecipe>
					<StyledStepperViewRecipe>
						<StyledStepperViewRecipeValue>
							{recipe.recommendedGrindSize}
						</StyledStepperViewRecipeValue>
						<StyledStepperViewRecipeLabel>grind</StyledStepperViewRecipeLabel>
					</StyledStepperViewRecipe>

					<StyledStepperViewRecipe
						onClick={handleShowModal}
						style={{
							cursor: "pointer",
						}}
					>
						<StyledStepperViewRecipeValue>?</StyledStepperViewRecipeValue>
						<StyledStepperViewRecipeLabel>tip</StyledStepperViewRecipeLabel>
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

			{showModal && (
				<StyledModalContainer>
					<StyledModalContent onClick={handleShowModal}>
						<StyledTipModal onClick={stopPropagation}>
							{recipe.tip}
						</StyledTipModal>
					</StyledModalContent>
				</StyledModalContainer>
			)}
		</>
	);
};

export default StepperView;
