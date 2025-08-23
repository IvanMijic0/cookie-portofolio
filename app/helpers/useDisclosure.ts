import { useCallback, useState } from "react";

type DisclosureControls = {
	open: () => void;
	close: () => void;
	toggle: () => void;
};

const useDisclosure = (initial = false): [boolean, DisclosureControls] => {
	const [opened, setOpened] = useState<boolean>(initial);
	const open = useCallback(() => setOpened(true), []);
	const close = useCallback(() => setOpened(false), []);
	const toggle = useCallback(() => setOpened(o => !o), []);
	return [opened, { open, close, toggle }];
};

export default useDisclosure;
