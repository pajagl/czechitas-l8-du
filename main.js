// tady je místo pro náš program

// 1 Catering

const justFood = (kolikLidi) => {
	return `catering od Just Food pro ${kolikLidi} lidí za ${Math.round(
		kolikLidi * 100
	)} Kč`
}
const yourMama = (koliktLidi) => {
	return `catering od Your Mama pro ${kolikLidi} lidí za ${Math.round(
		pocetLidi * 500
	)} Kč`
}
const flavourHaven = (kolikLidi) => {
	return `catering od Flavour Haven pro ${kolikLidi} lidí za ${Math.round(
		kolikLidi * 1000
	)} Kč`
}

const createEvent = (nazevUdalosti, pocetLidi, catering) => {
	return `Událost ${nazevUdalosti} s ${catering(pocetLidi)}`
}

document.body.innerHTML += createEvent(
	'Inaugurace prezidenta',
	100,
	flavourHaven
)