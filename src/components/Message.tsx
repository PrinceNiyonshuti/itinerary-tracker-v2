/** @format */

// Type | Interface
type messageProps = {
	contactData: {
		username: string;
		email: string;
		description: string;
		id: number;
	}[];
};

const Message = (props: messageProps) => {
	console.log(props.contactData);
	return (
		<div>
			{props.contactData.map((message) => (
				<li
					key={message.id}
					className="flex justify-between items-center border-b-2 border-green-200 mt-2 p-2 cursor-pointer transition">
					<div className="flex ml-2">
						<div className="flex flex-col ml-2">
							<p className="font-semibold text-xl">From : {message.username}</p>
							<span className="text-sm">@{message.email}</span>
							<p className=" font-normal text-justify">
								{message.description.length > 120
									? message.description.slice(0, 120) + "..."
                                    : message.description
                                }
							</p>
						</div>
					</div>
				</li>
			))}
		</div>
	);
};

export default Message;
