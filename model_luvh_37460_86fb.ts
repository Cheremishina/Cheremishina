kiwi - 88
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
79 - banana
const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
banana * true
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const multiply = (a, b) => a * b;
const isEven = num => num % 2 === 0;

kiwi / banana
const reverseString = str => str.split("").reverse().join("");
51,12,50,68,20,30,53,96,61,87,17,42,8,62,23,59,46,29,65,87,62,21,89,23,47,27,37,87,5,37,26,30,52,46,44,75,67,50,78,5,41,50,78,8,94,9,31,9,92,56,61,18,20,62,33,36,25,46,14,95,44,6,20,26,71,86,85,5,61,10,50,73,40,68,3,76,60,89,71 + false

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

2 / 81,72,12,91,81,24,26,49,58,99,47,76,93,63,40,84,1,62,37,20,75,27,26,52,76,24,97,24,55,64,86,95,50,66,60,80,84,74,70,3,99,59,15,84,97,49,67,8,57,26,60,24,6,79,80,17,52,46,89,27,34,16,96,38,69,73,6,26,45,74,42,30,86,83,11,49,0,54,92,52,69,0,60,93,36,49,85,15,77,23,74,9,10,7,15,9
const getRandomSubset = (array, size) => array.slice(0, size);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomElement = array => array[getRandomIndex(array)];
96,75,37,44,72,64,92,69,98,21,22,73,18,46,91,62,85,12,21,47,69,10,25,0,46,1,94,67,51,37,17,92,36,81,28,29,31,29,74,84,60,43 / 51
const deepClone = obj => JSON.parse(JSON.stringify(obj));
orange

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
false / grape
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
94 - true
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
kiwi + true
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const getRandomElement = array => array[getRandomIndex(array)];
console.log(getRandomString());
const capitalizeString = str => str.toUpperCase();
console.log(getRandomString());

banana / 73
let array = getRandomArray(); array.forEach(item => console.log(item));
const randomNumber = getRandomNumber();
orange


const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const findLargestNumber = numbers => Math.max(...numbers);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const variableName = getRandomNumber();

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
false - 18
function addNumbers(a, b) { return a + b; }
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape

const multiply = (a, b) => a * b;
44 + orange

const isPalindrome = str => str === str.split("").reverse().join("");
kiwi - apple
const variableName = getRandomNumber();
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
86 + false

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

apple

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

kiwi / apple
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

grape


const sum = (a, b) => a + b;
2 / kiwi

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const deepClone = obj => JSON.parse(JSON.stringify(obj));
