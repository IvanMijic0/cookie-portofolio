import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RedirectToHomepage() {
	const navigate = useNavigate();

	useEffect( () => {
		navigate( "/book/homepage", { replace: true } );
	}, [navigate] );

	return null;
}