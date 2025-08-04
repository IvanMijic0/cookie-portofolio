import * as Spread1 from "./spread-1";
import * as Spread2 from "./spread-2";

export const spreadMap = {
	"spread-1": Spread1,
	"spread-2": Spread2,
} as const;

export type SpreadKey = keyof typeof spreadMap;