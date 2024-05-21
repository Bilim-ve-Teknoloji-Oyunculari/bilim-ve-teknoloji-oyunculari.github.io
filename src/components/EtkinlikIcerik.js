import React from "react";

function EtkinlikIcerik(props) {
    return (
        <div className="section">
            <div className="container">
                {props.paragraphs.map((paragraph, index) => {
                    return <h5 className="description" key={index}>
                        {paragraph.map((row, index) => {
                            return <a key={index}>{row}<br/></a>
                        })}
                    </h5>
                })}
            </div>
        </div>
    );
}

export default EtkinlikIcerik;