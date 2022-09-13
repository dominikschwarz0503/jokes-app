import React from "react";
import MaterialButton from "@mui/material/Button";
import "./Button.css";

export default function Button(props: any) {
    return (
        <>
            <button className="button" onClick={props.event}>
                Get those dad jokes!
            </button>
        </>
    );
}
