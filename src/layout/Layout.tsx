/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import AddItenary from "../pages/AddItinerary";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Footer from "./Footer";
import Title from "./Title";

function Layout() {
	return (
		<div className="">
			<div className="flex items-center justify-center w-screen mt-10 ">
				<div className="w-2/4 font-bold border shadow-lg p-4">
					<Title />
					<Routes>
						<Route path="*" element={<Home />} />
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/add" element={<AddItenary />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
