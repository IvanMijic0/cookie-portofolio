export const BASE_URL =
	typeof import.meta !== "undefined" && import.meta.env?.VITE_BASE_URL
		? import.meta.env.VITE_BASE_URL
		: "https://www.amnakolic.com";
