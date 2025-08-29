import { redirect } from "react-router";

export const loader = () => redirect("/homepage");

export default function NotFound() {
	return null;
}
