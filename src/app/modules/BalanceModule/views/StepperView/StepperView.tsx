import { IRecipeStepDTO } from "@/app/api";
import { CoreHeader } from "@/core/components";
import {
	AppDispatch,
	RECIPE_MAKER_LOCALSTORAGE_KEY,
	RootState,
	changeStep,
} from "@/core/store";
import { MouseEvent, useState } from "react";
import { ArrowLeft } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
	StyledBackLink,
	StyledModalContainer,
	StyledModalContent,
	StyledModalWrapper,
	StyledStep,
	StyledStepperViewContainer,
	StyledStepperViewRecipe,
	StyledStepperViewRecipeGrid,
	StyledStepperViewRecipeLabel,
	StyledStepperViewRecipeValue,
	StyledTipModal,
} from "./styles";

const StepperView: React.FC = () => {
	const { recipe, data } = useSelector((state: RootState) => state.recipeMaker);
	const [showModal, setShowModal] = useState(false);
	const dispath = useDispatch<AppDispatch>();

	if (!recipe || !data) {
		return <div>no recipe :(</div>;
	}

	const formula = recipe.formula(data.grounds, data.ratio);

	const getStep = (step: any, index: number): IRecipeStepDTO => {
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
		localStorage.setItem(RECIPE_MAKER_LOCALSTORAGE_KEY, "");
		dispath(changeStep("balance"));
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
						<StyledTipModal
							onClick={stopPropagation}
							dangerouslySetInnerHTML={{ __html: recipe.tip }}
						></StyledTipModal>
					</StyledModalContent>
				</StyledModalContainer>
			)}
		</>
	);
};

export default StepperView;
