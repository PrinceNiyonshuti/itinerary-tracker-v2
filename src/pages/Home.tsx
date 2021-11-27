/** @format */
import { Link } from "react-router-dom";
import Itinerary from "../components/Itinerary";
const Home = () => {
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
		{
			title: "Do laundry",
			date: "2021-11-07",
			time: "08:00",
			description:
				"Read the Labels. Check the care labels on your garments and linens. ...\nSort. Start by sorting the laundry by color: ...\nSort Again. Sort each pile one more time by type of fabric. ...\nPick a Detergent. ...\nPick a Water Temperature and Cycle. ...\nFinal Check. ...\nLoad the Washer. ...\nUnload the Washer.",
			priority: false,
			id: 2,
		},
		{
			title: "Go to gym",
			date: "2021-11-06",
			time: "18:00",
			description:
				"What is a gym? A gym - physical exercises and activities performed inside, often using equipment, especially when done as a subject at school. Gymnasium is a large room with equipment for exercising the body and increasing strength or a club where you can go to exercise and keep fit.",
			priority: false,
			id: 3,
		},
	];
	return (
		<div>
			<div className="w-full p-4">
				<ul>
					<Itinerary itenaryData={itenaryList} />
				</ul>
				<Link to="/all">
					<p className="font-normal text-blue-700 text-center mt-2">
						More Itineraries
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Home;
