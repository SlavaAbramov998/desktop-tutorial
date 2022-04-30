const result1 = document.querySelector("#result1Exercise");

function sumArray(numbers) {
	let a = 0;
	numbers.forEach(function(numb) {
		a += numb;
	});
	return a;
}

result1.textContent = sumArray([4, 6, 16, 73, 5]);

const result2 = document.querySelector("#result2Exercise");

function getAboveZero(numbers) {
	return numbers.filter(function(numb) {
		return numb > 0;
	});
}

result2.textContent = getAboveZero([1, -3, -2, 4, 10]);

const find = document.querySelector("#inputFind");
const result3 = document.querySelector("#result3Exercise");

function getPonies(ponies, xpony) {
	let x = ponies.find(function (pony) {
        return pony === xpony;
    });
    if (x === xpony) {
    	return x;
    } else {
    	return "false";
    }
}

find.addEventListener("input", () => {
	result3.textContent = getPonies(["TwilightSparkle", "RainbowDash", "AppleJack", "Rarity", "Pinkie Pie", "Fluttershy"], find.value);
}); 

const findtx = document.querySelector("#inputFindtx");
const result4 = document.querySelector("#result4Exercise");

function isTxIncluded(bk, tx) {
    return bk.includes(tx);
}

findtx.addEventListener("input", () => {
	result4.textContent = isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], findtx.value);
}); 

const result5 = document.querySelector("#result5Exercise");

function getSizes(strings) {
    return strings.map(function (element) {
        return element.length;
    });
}

result5.textContent = getSizes(["Moscow", "Coding", "School"]);

const result6 = document.querySelector("#result6Exercise");

function getWithSpaces(strings) {
    let array = [];
    array.push(strings.join(" "));
    array.push(strings.join("").length);

    return array;
}

result6.textContent = getWithSpaces(["Moscow", "never", "sleep"]);

const result7 = document.querySelector("#result7Exercise");

function getEpisodes({title, episodes}) {
    const anime = {
        title: title,
        episodes: episodes
    };

    return "Аниме " + anime.title + " включает " + anime.episodes + " серий";
}

result7.textContent = getEpisodes({title: "Code Geass", episodes: 25});

const number = document.querySelector("#inputNumber")
const result8 = document.querySelector("#result8Exercise");

function triple(x) {
    return x * 3;
};

number.addEventListener("input", () => {
	result8.textContent = triple(number.value);
}); 

const result9 = document.querySelector("#result9Exercise");

function getAvgGlucose(arr) {
    let sum = 0;
    arr.forEach(function (el) {
        sum += el;
    });

    let mid = sum / arr.length;
    return mid.toFixed(1);
};

result9.textContent = getAvgGlucose([5.4, 8.1, 6.3, 4.9]);