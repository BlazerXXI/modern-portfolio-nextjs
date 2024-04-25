import React from "react";
import styles from "./Header.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
	return (
		<header className={styles.root}>
			<div className={"container"}>
				<NavigationBar />
			</div>
		</header>
	);
};

export default Header;
