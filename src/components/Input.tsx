/** @format */
type inputProp = {
	type: string;
	id: string;
	placeholder: string;
	refData?: any;
};

const Input = ({ type, id, refData, placeholder }:inputProp) => {
	return (
		<div className=" p-3 w-full">
			<input
				type={type}
				id={id}
				required
				ref={refData}
				className="border p-2 rounded w-full"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
