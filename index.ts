#! /usr/bin/env node 
import inquirer from "inquirer";
const answers:{
    Sentence:string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");

// Print the array of words to console.

console.log(words);

// Print the word count of the sentence to the console 

console.log(`YOUR SENTENCE WORD COUNT IS ${words.length}`);