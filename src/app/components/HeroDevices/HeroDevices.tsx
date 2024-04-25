import Image from "next/image";
import React from "react";

interface HeroDevicesProps {
	img: string;
	alt: string;
	width: number;
	height: number;
}

const HeroDevices = (props: HeroDevicesProps) => {
	const { img, alt, width, height } = props;

	return (
		<div>
			<Image src={img} alt={alt} width={width} height={height} />
		</div>
	);
};

export default HeroDevices;
