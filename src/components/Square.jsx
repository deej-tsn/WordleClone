export default function Square(props){
    return (
        <div className={`w-[20%] aspect-square border-gray-400 border m-[1px] text-white ${(props.squareColor) ? props.squareColor : "bg-black" } flex items-center justify-center noselect`}>
            {props.letter.toUpperCase()}
        </div>
    )
}