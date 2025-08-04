import { forwardRef } from "react";

export const Left = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div ref={ ref } className="page">
		<h1 className="text-4xl font-bold">👋 Cover 2</h1>
	</div>
) );

export const Right = forwardRef<HTMLDivElement>( ( _, ref ) => (
	<div ref={ ref } className="page">
		<p className="text-xl">Introduction · page 2</p>
	</div>
) );

export function meta() {
	return [
		{ title: "This is my first page" },
		{ name: "description", content: "Welcome to my my first page" }
	];
}

export const loader = () => null;

const Spread = () => null;
export default Spread;