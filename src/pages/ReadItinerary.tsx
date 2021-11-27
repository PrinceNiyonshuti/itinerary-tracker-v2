/** @format */

import { useParams } from "react-router-dom";

function ReadItinerary() {
	const { id } = useParams();
	return (
		<div className="mx-5">
			<div>
				<h3 className="font-bold text-2xl my-2">{id}</h3>
				<hr />
				<p className="font-normal my-2">
					<b>Day</b> :
					<br />
					<b>Time</b> :
					<br />
					<span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
						✌🏻 Priority
					</span>
				</p>

				<p className="font-normal"></p>
				<p className="font-normal text-justify my-2">Descrpiton</p>
			</div>
		</div>
	);
}

export default ReadItinerary;
