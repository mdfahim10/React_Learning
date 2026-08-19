function PrintHello(){
    console.log("Hello! was clicked");
    console.log(event)
}
function name(){
    console.log("name was clicked");
}
function department(){
    console.log("department was clicked");
}
function handleHover(){
    console.log("handleHover was hovered");
}
function handleDoubleClick(){
    console.log("it was double clicked");
}


export default function Button(){
    return (
        <div>
            <button onClick={PrintHello}>click me!</button>
            <h1 onClick={name}>click me!</h1>
            <p onClick={department}>click me!</p>
            <h2 onMouseOver={handleHover}>Hover over me!</h2>
            <h2 onDoubleClick={handleDoubleClick}>Double click me!</h2>
        </div>
    );
}