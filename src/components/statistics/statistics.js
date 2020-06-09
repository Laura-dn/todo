import React from "react";
import "./statistics.css";

function Statistics(props) {
    const { all, done, imp, onClickElement } = props;
    let barStyle = {width: ""};

    barStyle.width = Math.floor((Number(done) * 100) / Number(all)) + "%";

    if(barStyle.width === "NaN%") {
        barStyle.width = "";
    }

    return (
        <section>
            <p className="text-right">
                <span
                    className="badge badge-success"
                    onClick={ () => onClickElement("ONLYDONE") }>

                    DONE: { done }
                </span>
                <span
                    className="badge ml-1 badge-primary"
                    onClick={ () => onClickElement("ONLYIMPORTANT") }>
                    
                    IMP: { imp }
                </span>
                <span
                    className="badge badge-dark ml-1"
                    onClick={ () => onClickElement("ALLTASKS") }>
                    
                    ALL: { all }
                </span>
            </p>

            <div className="progress mb-3">
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    role="progressbar"
                    aria-valuenow={ done }
                    aria-valuemin="0"
                    aria-valuemax={ all }
                    style={ barStyle }>
                    
                    { barStyle.width }
                </div>
            </div>
        </section>
    );
}

export default Statistics;
