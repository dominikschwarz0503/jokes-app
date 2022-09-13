import "./Button.css";

export default function Button(props: any) {
    return (
        <>
            <button className="button" onClick={props.event}>
                {props.buttonText}
            </button>
        </>
    );
}
