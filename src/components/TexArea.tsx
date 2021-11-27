/** @format */

type textProp = {
	id: string;
	rows: number;
	placeholder: string;
	refData?: any;
};

const TextArea = ({ id, rows, refData, placeholder }: textProp) => {
	return (
		<div className=" p-3 w-full">
			<textarea
				id={id}
				rows={rows}
				required
				ref={refData}
				className="border p-2 rounded w-full"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextArea;
