import OptionBox from "./OptionBox"

function SelectBox({name, className, onchange, value, text}) {
    return (
        <select name={name} onchange={onchange} className={className}>
            <OptionBox value={value} text={text}/>
        </select>
    )
}

export default SelectBox