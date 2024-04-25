import React from "react";
import s from "./PhotographyContainer.module.scss";
import Image from "next/image";

interface PhotographyContainerProps {
	img: string;
}

const PhotographyContainer = (props: PhotographyContainerProps) => {
	const { img } = props;

	return (
		<div className={s.photographyContainer}>
			<Image className={s.img} src={img} alt="avatar" width={300} height={300} />
			<div className={s.turn}></div>
		</div>
	);
};

export default PhotographyContainer;
