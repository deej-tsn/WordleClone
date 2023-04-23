import Row from "./Row";


export default function Grid(props){
    const gridMemory = props.gridMemory;
    const gridColor = props.gridColor;
    const gridRow = []
    const rowMemory = []
    const rowColor = []
    const numberOfRows = 6;
    for (let index = 0; index < numberOfRows; index++) {
        rowMemory.push(gridMemory.slice((index*5), (5*index)+6));
        rowColor.push(gridColor.slice((index*5), (5*index)+6))
    }
    for (let index = 0; index < numberOfRows; index++) {
        gridRow.push(<Row
            key={index}
            index = {index}
            rowMemory = {rowMemory[index]}
            rowColor = {rowColor[index]}
            rowAnimation = {(index==props.activeRow && props.rowAnimation == true) ? "rowShake": ""}
        />
        )
    }
    return (
        <div className=" w-full aspect-square md:w-1/4 flex flex-col place-content-evenly p-2 rounded-sm">
            {gridRow}
        </div>
    )
}