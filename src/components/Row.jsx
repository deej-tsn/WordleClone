import Square from "./Square"

export default function Row(props){
    const rowMemory = props.rowMemory;
    const numberOfSquare = 5;
    const squareRow = [];
    for (let index = 0; index < numberOfSquare; index++) {
        squareRow.push(<Square
            key={index}
            letter = {(rowMemory[index]) ? rowMemory[index] : "" }
            squareColor = {props.rowColor[index]}
        /> 
        )
    }
    return (
        <div className=" w-full h-fit flex place-content-evenly m-[1px]">
            {squareRow}
        </div>
    )
}