/** @format */
import React, { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TexArea";

const AddItenary = () => {
	// Form variables
	const itenaryTitle = useRef<HTMLInputElement>(null);
	const itenaryDate = useRef<HTMLInputElement>(null);
	const itenaryTime = useRef<HTMLInputElement>(null);
	const itenaryDescription = useRef<HTMLInputElement>(null);
	const itenaryForm = useRef<HTMLFormElement>(null);

	const newItenary = () => {
		// event.preventDefault();

		const title = itenaryTitle.current?.value;
		const date = itenaryDate.current?.value;
		const time = itenaryTime.current?.value;
		const description = itenaryDescription.current?.value;
		const priority = false;

		const itinerary = { title, date, time, description, priority };
		console.log(itinerary);

		fetch("http://localhost:8000/itenaryList", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(itinerary),
		}).then(() => {
			console.log("New Itinerary added");
			window.location.reload();
		});

		// itenaryForm.current?.reset();
	};

	return (
		<div>
			<h3 className="font-bold text-lg mb-1 mx-5">New Itenary</h3>
			<form onSubmit={newItenary} ref={itenaryForm}>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<Input
							type={"text"}
							refData={itenaryTitle}
							id={"title"}
							placeholder={"Itinerary Title"}
						/>

						<Input
							type={"date"}
							refData={itenaryDate}
							id={"date"}
							placeholder={""}
						/>

						<Input
							type={"time"}
							refData={itenaryTime}
							id={"time"}
							placeholder={""}
						/>

						<TextArea
							id={"description"}
							refData={itenaryDescription}
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
