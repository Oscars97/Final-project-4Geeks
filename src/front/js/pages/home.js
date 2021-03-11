import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
// este link es para crear el link de los botones
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.users);
	return (
		<div className="text-center mt-5">
			<h1>Connect4Devs</h1>
			<Link to="/register">
				<button>Register</button>
			</Link>
		</div>
	);
};
