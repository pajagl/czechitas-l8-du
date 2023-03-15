// tady je místo pro náš program

// 1 Výplata
const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days)
}

const taxed = (salary, taxPercentage) => {
    return Math.round(salary * ((100 - taxPercentage)) / 100)
}

const wage = 500
const hours = 6
const days = 20
const beforeTaxation = salary(wage, hours, days)
const afterTaxation = taxed(beforeTaxation, 15)

document.body.innerHTML = `
<p>Wage: ${wage} Kč </p>
<p>Hours: ${hours}</p>
<p>Days: ${days}</p>
<p>Before taxation: ${beforeTaxation} Kč</p>
<p>After taxation: ${afterTaxation} Kč</p>
`

// 2 Kalkulačka
const calculate = (number1, operation, number2) => {
    if (operation === "+") {
        return number1 + number2
    }
    if (operation === "-") {
        return number1 - number2 
    }
    if (operation === "*") {
        return number1 * number2
    }
    if (operation === "/") {
            return number1 / number2
    } else {
        return false;
    }
}
