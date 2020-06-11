import React from "react";
import "./statistics.css";

function Statistics(props) {
    const { all, done, imp, filter, onClickElement } = props;
    let progressBar = {width: ""},
        classColorBar = "progress-bar progress-bar-striped progress-bar-animated";

    if(filter === "ONLYIMPORTANT") {
        classColorBar += classColorBar + " bg-primery";
        progressBar.width = Math.floor((Number(imp) * 100) / Number(all)) + "%";
    } else {
        classColorBar += classColorBar + " bg-success";
        progressBar.width = Math.floor((Number(done) * 100) / Number(all)) + "%";
    }

    if(progressBar.width === "NaN%") {
        progressBar.width = "";
    }

    return (
        <section>
            <p className="text-right">
                <span
                    className={ `badge badge-success ${(filter === "ONLYDONE") ? "btnOn" : ""}`}
                    onClick={ () => onClickElement("FILTER", null, "ONLYDONE") }
                    role="button">

                    DONE: { done }
                </span>
                <span
                    className={`badge badge-primary ml-1 ${(filter === "ONLYIMPORTANT") ? "btnOn" : ""}`}
                    onClick={ () => onClickElement("FILTER", null, "ONLYIMPORTANT") }
                    role="button">
                    
                    IMP: { imp }
                </span>
                <span
                    className={`badge badge-dark ml-1 ${(filter === "ALLTASKS") ? "btnOn" : ""}`}
                    onClick={ () => onClickElement("FILTER", null, "ALLTASKS") }
                    role="button">
                    
                    ALL: { all }
                </span>
            </p>

            <div className="progress mb-3">
                <div
                    className={ classColorBar }
                    role="progressbar"
                    aria-valuenow={ done }
                    aria-valuemin="0"
                    aria-valuemax={ all }
                    style={ progressBar }>
                    
                    { progressBar.width }
                </div>
            </div>
        </section>
    );
}

export default Statistics;
