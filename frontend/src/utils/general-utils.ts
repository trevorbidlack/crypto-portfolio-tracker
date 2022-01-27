// These functions are mostly adapted from various online sources.

const getRandomInteger = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDouble = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};

const formatNumber = (num: number, digits: number) => {
	const lookup = [
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'k' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'B' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'Q' },
		{ value: 1e18, symbol: 'S' },
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var item = lookup
		.slice()
		.reverse()
		.find(function (item) {
			return num >= item.value;
		});
	return item
		? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
		: '0';
};

const addCommas = (num: string | number) => {
	return (
		Object.prototype.toString.call(num) === '[object String]' //is string?
			? parseFloat(num as string)
			: num
	).toLocaleString();
};

const countDecimals = (x: string) => {
	return x.split('.').length == 2 ? x.split('.')[1].length || 0 : 0;
};

const GeneralUtils = {
	getRandomInteger,
	getRandomDouble,
	formatNumber,
	addCommas,
	countDecimals,
};

export default GeneralUtils;
