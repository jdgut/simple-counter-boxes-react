
const CounterAdvanced = props => {
    const placeholder = "000000";
    const clockIcon = <i className="far fa-clock"></i>;
    const boxes = [
        ...[clockIcon],
        ...placeholder.split("").slice(props.seconds.length),
        ...props.seconds.split("")
    ].map( (box, i) => <div className="box" key={i}>{box}</div>);

    return (
        <div className="container-sm" >
            <div className="d-flex justify-content-center">
                {boxes}
            </div>
        </div>
    );
}

export default CounterAdvanced;