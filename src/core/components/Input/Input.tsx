import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import {
	StyledInput,
	StyledInputGroup,
	StyledInputPrefix,
	StyledInputSuffix,
} from "./styles";

interface IInputProps {
	prefix?: string;
	suffix?: string;
	width?: React.CSSProperties["width"];
	inputProps?: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
	register?: UseFormRegisterReturn;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ prefix, suffix, width, inputProps, register }, ref) => (
		<StyledInputGroup style={{ width }}>
			{prefix && <StyledInputPrefix>{prefix}</StyledInputPrefix>}
			<StyledInput
				{...inputProps}
				style={{ ...inputProps?.style, width }}
				ref={ref}
				className={prefix ? "with-prefix" : ""}
				{...register}
			/>
			{suffix && <StyledInputSuffix>{suffix}</StyledInputSuffix>}
		</StyledInputGroup>
	)
);

export default Input;
