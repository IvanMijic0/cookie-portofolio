import { useEffect, useMemo, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { DownUp, StarToDown, UpToStar } from "~/assets";

type State = "star" | "down" | "up";
type Props = { state: State; className?: string; size?: number };

const TRANSITIONS = {
	"star->down": { data: StarToDown, reverse: false },
	"up->star": { data: UpToStar, reverse: false },
	"down->up": { data: DownUp, reverse: false },
} as const;

const AnimatedBookmarkIcon = ({ state, className, size = 70 }: Props) => {
	const prev = useRef<State>(state);
	const lottieRef = useRef<LottieRefCurrentProps>(null);

	const key = `${prev.current}->${state}` as keyof typeof TRANSITIONS;
	const conf = TRANSITIONS[key];

	const staticPose = useMemo(() => {
		const m: Record<State, { data: any; end: boolean }> = {
			star: { data: UpToStar, end: true },
			down: { data: StarToDown, end: true },
			up: { data: DownUp, end: true },
		};
		return m[state];
	}, [state]);

	useEffect(() => {
		prev.current = state;
	}, [state]);

	useEffect(() => {
		if (!conf || !lottieRef.current) return;
		const p = lottieRef.current;
		p.stop();
		p.setDirection(conf.reverse ? -1 : 1);
		const frames = p.getDuration(true);
		if (frames != null) {
			conf.reverse ? p.goToAndPlay(frames, true) : p.goToAndPlay(0, true);
		}
	}, [conf?.data, conf?.reverse]);

	if (conf && prev.current !== state) {
		return (
			<Lottie
				key={key}
				lottieRef={lottieRef}
				animationData={conf.data}
				autoplay
				loop={false}
				className={className}
				style={{ width: size, height: size, display: "inline-block" }}
			/>
		);
	}

	return (
		<Lottie
			key={`static-${state}`}
			lottieRef={lottieRef}
			animationData={staticPose.data}
			autoplay={false}
			loop={false}
			className={className}
			style={{ width: size, height: size, display: "inline-block" }}
			onDOMLoaded={() => {
				const p = lottieRef.current;
				if (!p) return;
				const frames = p.getDuration(true);
				if (frames == null) return;
				p.goToAndStop(staticPose.end ? frames : 0, true);
			}}
		/>
	);
}

export default AnimatedBookmarkIcon;
