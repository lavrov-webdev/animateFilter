import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h4`
	font-weight: bold;
	margin-bottom: 5px;
	cursor: pointer;
	display: inline-block;
	padding: 0 0.7rem;
	border-radius: 5px;
	transition: all 0.8s;
	background-color: ${(props) =>
		props.isOpen ? "white !important" : "rgba(255, 255, 255, 0)"};
	color: ${(props) => (props.isOpen ? "var(--dark)" : "var(--white)")};

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;
const AnimateArrow = styled(motion.div)`
	display: inline-block;
	margin-left: 5px;
`;
const Content = styled(motion.div)`
	overflow: hidden;
`;

const Accordion = (props) => {
	const { title, children, isOpenDefault = false } = props;

	const [isOpen, setIsOpen] = React.useState(isOpenDefault);

	const toggleIsOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div>
			<SectionTitle isOpen={isOpen} onClick={toggleIsOpen}>
				{title}
			</SectionTitle>
			<AnimatePresence initial={false}>
				<Content
					key="content"
					initial="collapsed"
					exit="collapsed"
					animate={isOpen ? "open" : "collapsed"}
					variants={{
						open: { height: "auto" },
						collapsed: { height: 0 },
					}}
					transition={{ duration: 0.8 }}
				>
					{children}
				</Content>
			</AnimatePresence>
		</div>
	);
};

export default Accordion;
