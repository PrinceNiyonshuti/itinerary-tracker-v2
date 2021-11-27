/** @format */

import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TexArea";

const AddItenary = () => {
	return (
		<div>
			<h3 className="font-bold text-lg mb-1 mx-5">New Itenary</h3>
			<form>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<Input type={"text"} id={"title"} placeholder={"Itinerary Title"} />

						<Input type={"date"} id={"date"} placeholder={""} />

						<Input type={"time"} id={"time"} placeholder={""} />

						<TextArea
							id={"description"}
							rows={3}
							placeholder={"Write something..."}
						/>

						<div className="flex justify-between mx-3">
							<div>
								<Button name="New Itenary" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddItenary;
