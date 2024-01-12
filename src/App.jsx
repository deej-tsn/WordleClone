import { useEffect, useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import dataHandler from './handlers/dataHandler'


var a = 97;
var charArray = {};
for (var i = 0; i<26; i++)
    charArray[String.fromCharCode(a + i)] = "bg-gray-400";


function App(props) {
	const word = props.word;
	const wordArray = word.split("");
	const [gridMemory, updateGridMemory] = useState([]);
	const [gridColor,updateGridColor] = useState([]);
	const [letterPressed, toggleLetterPressed] = useState(false);
	const [newLetter, letterPicked] = useState("");
	const [activeRow, interateActiveRow] = useState(1);
	const [keyColor, updateKeywordColor] = useState(charArray);
	const [applyRowAnimation, toggleRowAnimation] = useState(false);


	function evalRow(){
		const inputtedWord = gridMemory.slice((activeRow-1)*5, activeRow*5);
		const gridColorPostEnter = gridColor.slice(0,-5);
		const newKeyColor = keyColor;
		if(dataHandler.includes(inputtedWord.join(""))){
			const error = "bg-black";
			const colors = [error, error, error, error,error];
			for (let index = 0; index < 5; index++) {
				if (inputtedWord[index] === wordArray[index]) {
					colors[index] = "bg-green-400";
					newKeyColor[inputtedWord[index]] = "bg-green-400";
					
				}
				else if(wordArray.includes(inputtedWord[index])){
					colors[index] = "bg-orange-400";
					newKeyColor[inputtedWord[index]] = "bg-green-400";
				}
				else{
					newKeyColor[inputtedWord[index]] = "bg-black";
				}
			}
			updateGridColor([...gridColorPostEnter, ...colors])
			updateKeywordColor(newKeyColor)
			return true;
		}
		toggleRowAnimation(true);
		return false;

	}

	useEffect(() => {
		toggleRowAnimation(false);
		let newGridMemory = gridMemory;
		let newGridColor = gridColor;
		if(activeRow == 7){
			console.log(`unlucky the word was ${word}`);
		}
		if(newLetter){
			if (newLetter == "←") {
				if (newGridMemory.length > (activeRow-1)*5) {
					newGridMemory = newGridMemory.slice(0,-1);
					newGridColor = newGridColor.slice(0,-1);
				}
			}
			else{
				if(newGridMemory.length == activeRow*5 && newLetter == "enter"){
					
					if(evalRow()){
						if(activeRow == 6){
							console.log("Done");
							console.log(word);
							return;
						}
						else{
							interateActiveRow(activeRow+1);
							return;
						}
					} else {
						console.log("Not a word");
					}
					
					
			}
			else if(newGridMemory.length < activeRow*5 && newLetter != "enter"){
				newGridMemory = [...gridMemory, newLetter];
				newGridColor = [...gridColor, "bg-gray-400"]
			}
			}
			updateGridMemory(newGridMemory);
			updateGridColor(newGridColor);
		}
		
		},[letterPressed]
	);

	return (
		<div className=" w-full h-full flex justify-center items-center bg-black">
		<div className='w-full md:w-10/12 lg:w-4/5 h-fit flex flex-col justify-center items-center'>
			<Grid 
				gridMemory = {gridMemory}
				gridColor = {gridColor}
				activeRow = {activeRow-1}
				rowAnimation = {applyRowAnimation}
			/>
			<Keyboard
				letterPressed = {letterPressed}
				toggleLetterPressed = {toggleLetterPressed}
				letterPicked = {letterPicked}
				keyColor = {keyColor}
			/>
		</div>
		
		</div>
	)
}

export default App
