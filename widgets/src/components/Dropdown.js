import React, {useEffect, useRef, useState} from "react";

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', event => {
            if(ref.current.contains(event.target)){
                return;
            }
            console.log('Body Click!!!');
            setOpen(false);
        }, false)
    }, []);

    const toggleDropdown = event => {
        console.log('form Click!!!');
        event.stopPropagation();
        setOpen(!open);
    };

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                onClick={() => {
                    console.log('Item Click!!!');
                    onSelectedChange(option)
                }}
                className="item"
            >
                {option.label}
            </div>
        )
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={event => toggleDropdown(event)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;