
const Counter = ( props ) => {

    const placeholder = "000000";
    const clockIcon = <i className="far fa-clock"></i>;

    let boxes = placeholder
                    .split("")
                    .slice(props.seconds.length)
                    .join("") + props.seconds;

    let counter = boxes.split("");
    counter.unshift(clockIcon);

    const divBoxes = counter.map( (box, i) => <div className="box" key={i}>{box}</div> );
    
    return (
        <div className="container-sm" >
            <div className="d-flex justify-content-center">
                { divBoxes }
            </div>
        </div>
    );

}


export default Counter;