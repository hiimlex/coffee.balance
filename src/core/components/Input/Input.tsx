import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput, StyledInputGroup, StyledInputSuffix } from "./styles";

interface IInputProps {
	suffix?: string;
	width?: React.CSSProperties["width"];
	inputProps?: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
	register?: UseFormRegisterReturn;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ suffix, width, inputProps, register }, ref) => (
		<StyledInputGroup style={{ width }}>
			<StyledInput
				{...inputProps}
				style={{ ...inputProps?.style, width }}
				ref={ref}
				{...register}
			/>
			{suffix && <StyledInputSuffix>{suffix}</StyledInputSuffix>}
		</StyledInputGroup>
	)
);

export default Input;
