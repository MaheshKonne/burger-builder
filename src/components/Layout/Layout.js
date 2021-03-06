import React from "react";
import Aux from "../../hoc/aux";
import classes from "./Layout.css";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const Layout = props => {
	return (
		<Aux>
			<BurgerBuilder></BurgerBuilder>
			<h1>Layout Header</h1>
			<content>Layout content goes here.............</content>
			<main className={classes.content}>
				{props.children}
			</main>
		</Aux>
	);
};

export default Layout;
