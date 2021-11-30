/** @format */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Itenarary from "../components/Itinerary";

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
	const [itenaryData, setItenaryData] = useState<IState["itenary"]>([]);

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
			{itenaryData ? (
				<p>Data Available </p>
			) : (
				<p>No details available</p>
			)}
			<p>Test Data</p>
		</div>
	);
}

export default ReadItinerary;
