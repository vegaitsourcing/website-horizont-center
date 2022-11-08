export function hex2rgba(hex, alpha = 1) {
	const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
}

export function createResourceCardSecondaryTag({ name, color }) {
	return {
		name,
		style: {
			color: color,
			backgroundColor: hex2rgba(color, 0.2),
		},
	};
}
