import React from "react";
import styles from "./LoadingScreen.module.scss";
import TypewriterComponent from "typewriter-effect";

const LoadingScreen = () => {
	return (
		<div className={styles.root}>
			<div className={styles.loadingAnimationWrapper}>
				<span className={styles.loadingAnimation}></span>
			</div>
			<div className={styles.text}>
				Loading{" "}
				<TypewriterComponent
					options={{
						autoStart: true,
						loop: true,
						strings: ["..."],
						cursor: "",
						delay: 30,
						deleteSpeed: 30,
						wrapperClassName: styles.typewriter,
					}}
				/>{" "}
			</div>
		</div>
	);
};

export default LoadingScreen;
