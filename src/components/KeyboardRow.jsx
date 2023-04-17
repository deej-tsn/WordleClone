import KeyboardKey from "./KeyboardKey"

export default function KeyboardRow(props){
    const letters = props.rowLetters.map((letter, index) => {
        return(
            <KeyboardKey
                key = {index}
                row = {props.row}
                index = {index}
                letter = {letter}
                bg_color = {props.keyColor[letter]}
                toggleLetterPressed = {props.toggleLetterPressed}
                letterPicked = {props.letterPicked}
                letterPressed = {props.letterPressed}
            />
        )
    })
    return(
        <div className=" w-full h-fit flex justify-center items-center">
            {letters}
        </div>
    )
}