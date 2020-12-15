import React, {useState, useEffect} from 'react'

const PriorityButtons = (props) => {

    return (
        <div className="priority-buttons">
            <div className="ui buttons">
                <button className="ui green button" onClick={props.priorityL} >low</button>
                <div className="or"></div>
                <button className="ui yellow button" onClick={props.priorityM} >medium</button>
                <div className="or"></div>
                <button className="ui red button" onClick={props.priorityH} >high</button>
            </div>

        </div>
    );

}

export default PriorityButtons