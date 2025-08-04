import { forwardRef } from "react";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div ref={ ref } className="page">
		<h1 className="text-4xl font-bold">Gay cookie</h1>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div ref={ ref } className="page">
		<p className="text-xl">Introduction · page 1</p>
	</div>
) );

export function meta() {
	return [
		{ title: "This is my welcome screen" },
		{ name: "description", content: "Welcome to my graphic-design portfolio." }
	];
}

export const loader = () => null;

const Spread = () => null;
export default Spread;