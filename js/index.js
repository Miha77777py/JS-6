// 1
let counter1 = 1;

while (counter1 <= 10) {
    console.log(counter1);
    counter1++;
}

// 2
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}

// 3
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// 4
const numbers1 = [1, 2, 3, 4, 5];
let counter2 = 0;

while (counter2 < numbers1.length) {
    console.log(numbers1[counter2]);
    counter2++;
}

// 5
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 9, 10];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === 7) {
        break;
    }

    console.log(numbers2[i])
}

// 6
const n = 12;

for (let i = 1; i < n; i++) {
    console.log(i);
}

// 7
let counter3 = 1;

while (counter3 <= 20) {
    if (counter3 % 3 === 0) {
        counter3++;
        continue;
    }

    console.log(counter3);
    counter3++;
}