
import "bootstrap";

const Counter = ( props ) => {
    const max = 6;
    const totalZeros = max - props.seconds.length;
    const clock = <i className="far fa-clock"></i>;
    let displayCounterValue = "";

    for(let i=0; i < totalZeros; i++)
        displayCounterValue += "0";

    displayCounterValue += props.seconds;

    let boxes = displayCounterValue.split("");
    boxes.unshift(clock);
    const htmlString = boxes.map( (box, index) => <div className="box" key={index}>{box}</div> );
    return (
        <div className="container-sm" >
            <div className="d-flex justify-content-center">
                {htmlString}
            </div>
        </div>
    );
}

export default Counter;