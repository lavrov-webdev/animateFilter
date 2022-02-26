import React from "react";
import styled from "styled-components";
import { Checkbox } from "rsuite";

const Label = styled.label`
	position: relative;
	cursor: pointer;
	display: flex;
	justify-content: flex-start;
	align-items: center;
  border-radius: 5px;
  padding-right: 10px;
  background-color: ${p => p.checked ? 'var(--semi-light)' : ''};
  transition: all .3s;
  font-weight: 600;
`;

const CustomCheckbox = (props) => {
	const { checked, text, onChange, style } = props;

	return (
		<Label checked={checked} style={style}>
			<Checkbox checked={checked} onChange={onChange} defaultChecked>
				{text}
			</Checkbox>
		</Label>
	);
};

export default CustomCheckbox;
