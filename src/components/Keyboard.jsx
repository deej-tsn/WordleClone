import KeyboardRow from "./KeyboardRow";

export default function Keyboard(props){
    const row1 = ["q","w","e","r","t","y","u","i","o","p"];
    const row2 = ["a","s","d","f","g","h","j","k","l"];
    const row3 = ["enter", "z","x","c","v","b","n","m", "back"];
    const rowsList = [row1, row2, row3];
    const rows = rowsList.map((row, index) => {
        return (
        <KeyboardRow
            key = {index}
            row = {index}
            rowLetters = {row}
            toggleLetterPressed = {props.toggleLetterPressed}
            letterPicked = {props.letterPicked}
            letterPressed = {props.letterPressed}
            keyColor = {props.keyColor}
        />
        )
    })
    return(
        <div className="w-full h-fit md:w-1/4 flex flex-col items-center justify-center">
            {rows}
        </div>
    )
}