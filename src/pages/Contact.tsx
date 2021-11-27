/** @format */

import React, { useContext } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TexArea";

function Contact() {

	return (
		<div className="mx-5">
			<h3 className="font-bold text-center text-lg mb-1 ">Contact Us</h3>
			<p className="font-normal text-center">
				For more details , don't hesitate to reach to us
			</p>
			<form >
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<Input
							type={"text"}
							id={"userNames"}
							placeholder={"Your Names"}
						/>
						<Input
							type={"email"}
							id={"email"}
							placeholder={"Your E-mail"}
						/>
						<Input
							type={"text"}
							id={"subject"}
							placeholder={"Your Subject"}
						/>
						<TextArea
							id={"description"}
							rows={5}
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
		</div>
	);
}

export default Contact;
