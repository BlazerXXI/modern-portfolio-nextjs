import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	text: string;
	type?: "submit" | "button" | "reset";
	className?: string;
}

const Button = (props: ButtonProps) => {
	const { text, type, className } = props;

	return (
		<div className={styles.root}>
			<button type={type} className={styles.button + " " + className}>
				{text}
			</button>
		</div>
	);
};

export default Button;
