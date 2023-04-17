export default function KeyboardKey(props){
    function letterClicked(){
        props.toggleLetterPressed(!props.letterPressed);
        props.letterPicked(props.letter);
    }

    return (
        <div className={` transition-transform ${(props.letter.length == 1) ? "w-[10%] aspect-[0.75]" : "w-fit h-full" }  ${props.bg_color} flex justify-center items-center text-white p-1 m-[1px] rounded-sm noselect md:hover:scale-110`} 
            onClick={letterClicked}>
            {props.letter}
        </div>
    )
}