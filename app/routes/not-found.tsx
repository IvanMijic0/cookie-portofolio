import { redirect } from "react-router";

export const loader = () => redirect( "/book/homepage" );

export default function NotFound() {
	return null;
}