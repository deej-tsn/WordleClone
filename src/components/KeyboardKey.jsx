export default function KeyboardKey(props){
    function letterClicked(){
        props.toggleLetterPressed(!props.letterPressed);
        props.letterPicked(props.letter);
    }
    if(props.letter === "enter"){
        console.log(props);
    }

    return (
        <div className={` transition-transform ${(props.letter.length == 1) ? "w-[10%] aspect-[0.75]" : "w-fit md:max-h-10 lg:h-12" }  ${(props.bg_color)? props.bg_color : "bg-black"} flex justify-center items-center text-white p-1 m-[1px] rounded-sm noselect md:hover:scale-110`} 
            onClick={letterClicked}>
            {props.letter}
        </div>
    )
}