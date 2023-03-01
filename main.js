'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const getPrompt = () => {
    console.log();
    rl.question('input: ', (input) => {
        countDuplicates(input);
    });
  }
  
getPrompt();

const countDuplicates = (input) => {
    let charExclusion = input.replace(/[^a-zA-Z]/g, ""); // remove special characters and whitespace from string
    let cleanWord = charExclusion.toLowerCase(); //change uppercase to lowercase
    let sortedArray = cleanWord.split("").sort(); // create array and sorts string alphabetically
    const duplicates = {};

    for (let i=0; i < sortedArray.length; i++) { 
        if (duplicates[sortedArray[i]]) {
          duplicates[sortedArray[i]] += 1 
        } else {
          duplicates[sortedArray[i]] = 1 
        }
    }
    console.log(duplicates)
}