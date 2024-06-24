import React from "react";
import "../../styles/home.css";
import { Registro } from "./Registro";


export const Home = () => {

	return (
		<div className="d-flex justify-content-center mt-5 ">
			<div className="col-4">
				<Registro></Registro>
			</div>
		</div>
	);
};
