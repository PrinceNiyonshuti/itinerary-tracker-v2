/** @format */
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<div className="w-full p-4">
				<ul>
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
