import React from "react";
import "./statistics.css";

function Statistics(props) {
  const { all, done, imp, onClickElement } = props;
  const barStyle = { paddingLeft: "" };

  barStyle.paddingLeft = (Number(done) * 100) / Number(all) + "%";

  return (
    <section>
      <p className="text-right">
        <span
          className="badge badge-success statisticsDone"
          onClick={() => onClickElement("ONLYDONE")}
        >
          DONE: {done}
        </span>
        <span
          className="badge ml-1 badge-primary statisticsImportant"
          onClick={() => onClickElement("ONLYIMPORTANT")}
        >
          IMP: {imp}
        </span>
        <span
          className="badge badge-dark ml-1"
          onClick={() => onClickElement("ALLTASKS")}
        >
          ALL: {all}
        </span>
      </p>

      <div className="progress mb-3">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          aria-valuenow={done}
          aria-valuemin="0"
          aria-valuemax={all}
          style={barStyle}
        />
      </div>
    </section>
  );
}

export default Statistics;