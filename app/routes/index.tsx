import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function IndexRoute() {
	const navigate = useNavigate();

	useEffect( () => {
		const isLargeScreen = window.innerWidth >= 1024;
		if (isLargeScreen) {
			navigate( "/book" );
		} else {
			navigate( "/some-other-mobile-landing" );
		}
	}, [navigate] );

	return null;
}