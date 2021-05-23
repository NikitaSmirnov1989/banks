import React from "react";
import "./RadioSelect.css";

export function RadioSelect({value, onChange, options, titleRadio}){
    function handleChange(event){
        const {value} = event.target;
        if (value === "all") {
            onChange(Object.keys(options.map(x => x.id)));
        } else {
            onChange([value]);
        }
    }
    return <div className="radioSelect">
        <p className="radioSelect__title">{titleRadio}</p>
        <label key="all" className="typeObject">
            <span>Все</span>
            <input 
                name="object" 
                type="radio" 
                value="all"
                checked={value.length === options.length}
                onChange={handleChange}
            />
        </label>
        {options.map(object=>{
            return (
                <label key={object.id} className="typeObject">
                    <span>{object.title}</span>
                    <input 
                        name="object" 
                        type="radio" 
                        value={object.id}
                        checked={value.length === 1 && value[0] === object.id}
                        onChange={handleChange}
                    />
                </label>
            );
        })}
    </div>
}