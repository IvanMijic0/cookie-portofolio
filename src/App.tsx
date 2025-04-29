import { BookLayout } from "./layouts";
import "./App.css";

const App = () => {
	const pages = [
		<div className="p-10 text-center text-xl">📘 Welcome to the Book</div>,
		<div className="p-10 text-center text-xl">Page 1: Intro</div>,
		<div className="p-10 text-center text-xl">Page 2: Content</div>,
		<div className="p-10 text-center text-xl">Page 3: More Content</div>,
		<div className="p-10 text-center text-xl">🧾 The End</div>,
		<div/>
	];

	return (
		<div className="container">
			<BookLayout pages={ pages }/>
		</div>
	);
};

export default App;