export default {
	"*.{js,jsx,ts,tsx}": ["eslint --quiet --fix"],
	"*.{json,js,ts,jsx,tsx,html}": ["prettier --write --ignore-unknown"],
	"*.{ts,tsx}": [() => "tsc --noEmit"],
}

