/** @format */
import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";
import TextArea from "../components/TexArea";

// Type | Interface
type contactState = {
	message: {
		username: string;
		email: string;
		description: string;
		id: number;
	}[];
};

function Contact() {
	// Defailt data

	const messageData = [
		{
			username: "Debby ",
			email: "debby@gmail.com",
			description:
				"Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
			id: 1,
		},
	];

	const [contactData, setContactData] =
		useState<contactState["message"]>(messageData);

	// Contact Form variables
	const contactForm = useRef<HTMLFormElement>(null);
	const contactNames = useRef<HTMLInputElement>(null);
	const contactEmail = useRef<HTMLInputElement>(null);
	const contactSubject = useRef<HTMLInputElement>(null);
	const contactMessage = useRef<HTMLInputElement>(null);

	// Function to send message
	const SendMessage = () => {
		// Assigning Form Data
		const username = contactNames.current?.value;
		const email = contactEmail.current?.value;
		const subject = contactSubject.current?.value;
		const description = contactMessage.current?.value;

		const contactData = { username, email, subject, description };

		// Posting Contact Message Data to Json file
		fetch("http://localhost:8000/messageList/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(contactData),
		}).then(() => {
			console.log("New Message Sent");
			alert(`Dear ${username} , Your Message Is Sent Successfully`);
			window.location.reload();
		});

		// contactForm.current?.reset();
	};

	// Retrieve all Message list
	useEffect(() => {
		fetch(`http://localhost:8000/messageList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setContactData(data);
			});
	}, []);

	return (
		<div className="mx-5">
			<h3 className="font-bold text-center text-lg mb-1 ">Contact Us</h3>
			<p className="font-normal text-center">
				For more details , don't hesitate to reach to us
			</p>
			<form onSubmit={SendMessage} ref={contactForm}>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<Input
							type={"text"}
							id={"username"}
							refData={contactNames}
							placeholder={"Your Names"}
						/>
						<Input
							type={"email"}
							id={"email"}
							refData={contactEmail}
							placeholder={"Your E-mail"}
						/>
						<Input
							type={"text"}
							id={"subject"}
							refData={contactSubject}
							placeholder={"Your Subject"}
						/>
						<TextArea
							id={"description"}
							rows={5}
							refData={contactMessage}
							placeholder={"Your Message to share with us ..."}
						/>
						<div className="flex justify-between mx-3">
							<div>
								<Button name="Send Message" />
							</div>
						</div>
					</div>
				</div>
			</form>
			<h3 className="font-bold text-2lg my-2">Recent Messages</h3>
			<Message contactData={contactData} />
		</div>
	);
}

export default Contact;
