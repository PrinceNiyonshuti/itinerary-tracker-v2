/** @format */

import { useState, useEffect } from "react";
import Itinerary from "../components/Itinerary";

// Type | Interface
type IState = {
	itenary: {
		title: string;
		date: string;
		time: string;
		description: string;
		priority: boolean;
		id: number;
	}[];
};
function AllItinerary() {
	const itenaries = [
		{
			title: "Read React documentation",
			date: "2021-11-07",
			time: "10:24",
			description:
				"Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
			priority: true,
			id: 1,
		}
	];
	// Retrieve all Itenerary
	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryAllData(data);
			});
	}, []);

	const [itenaryAllData, setItenaryAllData] = useState<IState["itenary"]>(itenaries);

	return (
		<div>
			<div className="w-full p-4">
				<ul>
					<Itinerary itenaryData={itenaryAllData} />
				</ul>
			</div>
		</div>
	);
}

export default AllItinerary;
