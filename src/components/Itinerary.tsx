/** @format */

import { Link } from "react-router-dom";

type itineraryProps = {
	itenaryData: {
		title: string;
		date: string;
		time: string;
		description: string;
		priority: boolean;
		id: number;
	}[];
};
function Itenarary(props: itineraryProps) {
	// Delete Itenerary
	const deleteItenary = (ItenaryId: number) => {
		fetch(`http://localhost:8000/itenaryList/` + ItenaryId, {
			method: "DELETE",
		}).then(() => {
			console.log("Itinerary Deleted");
			window.location.reload();
		});
		console.log(ItenaryId);
	};

	// Making Priority Itinerary
	const handlePriority = (itineraryUpdate: any) => {
		const { id, priority } = itineraryUpdate;

		if (priority === true) {
			const priority = false;
			const updateData = { priority };
			fetch(`http://localhost:8000/itenaryList/` + id, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updateData),
			}).then(() => {
				console.log("Itinerary Updated to non-priority");
				window.location.reload();
			});
		} else {
			const priority = true;
			const updateData = { priority };
			fetch(`http://localhost:8000/itenaryList/` + id, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updateData),
			}).then(() => {
				console.log("Itinerary Updated to priority");
				window.location.reload();
			});
		}
	};

	// Priority Class
	const getPriorityItinerary = (priority: any) => {
		let classes =
			"flex justify-between items-center bg-gray-200 mt-2 p-2 cursor-pointer transition ";
		classes += priority === true ? "border-l-4 border-green-700" : "";
		return classes;
	};

	return (
		<div>
			{props.itenaryData.map((itenary) => (
				<li
					key={itenary.id}
					onDoubleClick={() => handlePriority(itenary)}
					className={getPriorityItinerary(itenary.priority)}>
					<div className="flex ml-2">
						<div className="flex flex-col ml-2">
							<Link to={`/read/${itenary.id}`}>
								<h1 className="font-semibold text-xl">{itenary.title}</h1>
							</Link>
							<p className="font-normal text-gray-600">
								{new Date(itenary.date).toLocaleDateString("en-US", {
									weekday: "short",
								})}
								&nbsp; at &nbsp;
								{new Date(itenary.date + " " + itenary.time).toLocaleString(
									"en-US",
									{
										hour: "numeric",
										minute: "numeric",
										hour12: true,
									}
								)}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<button
							onClick={() => deleteItenary(itenary.id)}
							className="text-red-600 font-bold mr-2">
							X
						</button>
					</div>
				</li>
			))}
		</div>
	);
}

export default Itenarary;
