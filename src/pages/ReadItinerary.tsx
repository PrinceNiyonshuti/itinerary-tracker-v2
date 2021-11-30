/** @format */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Type | Interface
type IState = {
	title: string;
	date: string;
	time: string;
	description: string;
	priority: boolean;
	id: number;
};

function ReadItinerary() {
	const { id } = useParams();
	const [details, setDetails] = useState<IState>();

	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList/` + id)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setDetails(data);
			});
		// eslint-disable-next-line
	}, []);
	return (
		<div className="mx-5">
			{details ? (
				<div>
					<h3 className="font-bold text-2xl my-2">{details.title}</h3>
					<hr />
					<p className="font-normal my-2">
						<b>Day</b> :{" "}
						{new Date(details.date).toLocaleDateString("en-US", {
							weekday: "long",
						})}
						<br />
						<b>Time</b> : {details.time}
						<br />
						{details.priority ? (
							<span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
								✌🏻 Priority
							</span>
						) : (
							""
						)}
					</p>

					<p className="font-normal"></p>
					<p className="font-normal text-justify my-2">{details.description}</p>
				</div>
			) : (
				<p>No details available</p>
			)}
		</div>
	);
}

export default ReadItinerary;
