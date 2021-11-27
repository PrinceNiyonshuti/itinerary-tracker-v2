/** @format */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

function ReadItinerary() {
	const { id } = useParams();

	const itenaryList = [
		{
			title: "Read React documentation",
			date: "2021-11-07",
			time: "10:24",
			description:
				"Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
			priority: true,
			id: 1,
		},
	];
	const [itenaryData, setItenaryData] =
		useState<IState["itenary"]>(itenaryList);

	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList/` + id)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryData(data);
			});
		// eslint-disable-next-line
	}, []);

	console.log(itenaryData);
	return (
		<div className="mx-5">
			{id}
			<p>Test Data</p>
		</div>
	);
}

export default ReadItinerary;
