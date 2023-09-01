import {
	CoreButton,
	CoreHeader,
	CoreInput,
	CoreSelect,
} from "@/core/components";
import { StyledMainViewContainer, StyledMainViewForm } from "./styles";
import { useForm } from "react-hook-form";

const MainView: React.FC = () => {
	const { register, getValues } = useForm({
		mode: "all",
		defaultValues: {
			method: "",
			grounds: "",
			ratio: "",
		},
	});

	const handleGenerate = () => {
		console.log("generate", getValues());
	};

	return (
		<StyledMainViewContainer>
			<CoreHeader />

			<StyledMainViewForm>
				<CoreInput
					inputProps={{
						type: "text",
						placeholder: "coffee grounds",
					}}
					width="100%"
					suffix="g"
					register={register("grounds", { required: true })}
				/>
				<CoreInput
					inputProps={{
						type: "text",
						placeholder: "ratio",
					}}
					width="100%"
					suffix="g:ml"
					register={register("ratio", { required: true })}
				/>
				<CoreSelect
					placeholder="method"
					options={[
						{
							label: "v60",
							value: "v60",
						},
					]}
					width="100%"
					register={register("method", { required: true })}
				/>

				<CoreButton variant="primary" onClick={handleGenerate}>
					generate
				</CoreButton>
			</StyledMainViewForm>
		</StyledMainViewContainer>
	);
};

export default MainView;
