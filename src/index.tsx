import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import { Main } from "./components/Main/Main";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Oils } from "./Pages/Oils/Oils";
import { Foods } from "./Pages/Foods/Foods";
import { Recipes } from "./Pages/Recipes/Recipes";
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Main />} />
			<Route path="aboutus" element={<AboutUs />} />
			<Route path="oils" element={<Oils />} />
			<Route path="foods" element={<Foods />} />
			<Route path="recipes" element={<Recipes />} />
			<Route path="blogs" element={<AboutUs />} />
			<Route path="contact" element={<AboutUs />} />
		</Route>
	)
);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById("root")
);