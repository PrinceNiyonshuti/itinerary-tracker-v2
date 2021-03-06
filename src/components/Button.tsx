/** @format */
type buttonProps = {
	name: string
};
const Button = (props: buttonProps) => {
	return (
		<div>
			<button className="px-4 py-1 bg-green-700 text-white rounded font-light hover:bg-green-900">
				{props.name}
			</button>
		</div>
	);
};
export default Button;
