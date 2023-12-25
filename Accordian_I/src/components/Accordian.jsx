import React, { useState } from "react";
import data from "./data";

function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setMultiSelect] = useState(false);
    const [arrMultiSelect, setArrMultiSelect] = useState([]);

    function sigleSelection(item) {
        setSelected(item === selected ? null : item);
    }
    function multiSelectionHandle(item) {
        var copyArrMyltiSelect = [...arrMultiSelect];
        var findIndexofCurrentID = copyArrMyltiSelect.indexOf(item);

        if (findIndexofCurrentID == -1)
            copyArrMyltiSelect.push(item);
        else
            copyArrMyltiSelect.splice(findIndexofCurrentID, 1);

        setArrMultiSelect(copyArrMyltiSelect);
        console.log(arrMultiSelect, copyArrMyltiSelect, arrMultiSelect);

    }

    return (
        <>
            <div className="wrapper">
                <button onClick={() => setMultiSelect(!enableMultiSelect)}>Enable Multi Select Accordion</button>
                <div className="accordion">
                    {
                        data && data.length > 0 ?
                            data.map(dataItem => <div className="item">
                                <div onClick={enableMultiSelect ?
                                    () => multiSelectionHandle(dataItem.id)
                                    : () => sigleSelection(dataItem.id)
                                } className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                    {
                                        enableMultiSelect ?
                                            arrMultiSelect.indexOf(dataItem.id) !== -1 &&
                                            <div className="">{dataItem.answer}</div>

                                            : selected === dataItem.id &&
                                            <div className="">{dataItem.answer}</div>

                                    }
                                    {/* {
                                        selected === dataItem.id ?
                                            <div className="">{dataItem.answer}</div>
                                            : null
                                    } */}
                                </div>
                            </div>)
                            : <div> No Data Found</div>
                    }
                </div>
            </div >
        </>
    )
}


export default Accordian