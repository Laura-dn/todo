import React from 'react';
import './statistics.css';

function Statistics(props) {
    const { all, done, imp } = props;
    const barStyle = {paddingLeft: ""};

    barStyle.paddingLeft = Number(done) * 100 / Number(all) + "%";

    return (
        <section>
            <p className="text-right">
                <span className="badge badge-success">DONE: { done }</span>
                <span className="badge ml-1 statisticsImportant">IMP: { imp }</span>
                <span className="badge badge-dark ml-1">ALL: { all }</span>
            </p>

            <div className="progress mb-3">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                     role="progressbar" 
                     aria-valuenow={ done * 100 / all } 
                     aria-valuemin="0" 
                     aria-valuemax="100" 
                     style={ barStyle }>
                </div>
            </div>
        </section>
    );
}

export default Statistics;
