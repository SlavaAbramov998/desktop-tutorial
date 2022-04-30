const age1 = document.querySelector("#inputAge1");
const result1 = document.querySelector("#result1Exercise");

function getAge(age) {
	let x = Number.parseInt(age, 10);
	return x + 1;
}

age1.addEventListener("input", () => { result1.textContent = getAge(age1.value) });

const a = document.querySelector("#inputa");
const b = document.querySelector("#inputb");
const result2 = document.querySelector("#result2Exercise");

function getReminder(a, b) {
	return a % b;
}

a.addEventListener("input", () => { result2.textContent = getReminder(a.value, b.value) });
b.addEventListener("input", () => { result2.textContent = getReminder(a.value, b.value) });

const age2 = document.querySelector("#inputAge2");
const result3 = document.querySelector("#result3Exercise");

function faceControl(age) {
	let x = Number.parseInt(age, 10);
    if (x >= 18)
        return "Welcome";
    else
        return "Отказ";
}

age2.addEventListener("input", () => { result3.textContent = faceControl(age2.value) });

const age3 = document.querySelector("#inputAge3");
const result4 = document.querySelector("#result4Exercise");

function getNextAge(age) {
    if (age === "") {
    	return 0;
    } else {
    	let x = Number.parseInt(age, 10);
    	return x + 1;
    }
}

age3.addEventListener("input", () => { result4.textContent = getNextAge(age3.value) });

const height = document.querySelector("#inputHeight");
const result5 = document.querySelector("#result5Exercise");

function canRide(height) {
	return height >= 140;
}

height.addEventListener("input", () => { result5.textContent = canRide(height.value) });