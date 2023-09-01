import React, { forwardRef } from "react";
import { ChevronDown } from "react-feather";
import { UseFormRegisterReturn } from "react-hook-form";
import {
	StyledSelect,
	StyledSelectChevron,
	StyledSelectContainer,
} from "./styles";

interface ISelectProps {
	options: { label: string; value: string }[];
	width?: React.CSSProperties["width"];
	placeholder?: string;
	selectProps?: React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	>;
	register?: UseFormRegisterReturn;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
	({ options, width, placeholder, register, selectProps }, ref) => (
		<StyledSelectContainer>
			<StyledSelect {...selectProps} style={{ width }} ref={ref} {...register}>
				{placeholder && <option value="">{placeholder}</option>}
				{options.map(({ label, value }, index) => (
					<option key={index} value={value}>
						{label}
					</option>
				))}
			</StyledSelect>
			<StyledSelectChevron>
				<ChevronDown size={14} className="icon" />
			</StyledSelectChevron>
		</StyledSelectContainer>
	)
);

export default Select;
