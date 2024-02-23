
export default function Rule({allOperators, json, setJson, handleChange, index}){
    // console.log('allOperators ',allOperators);
    return (
        <form>
            {/* <label for="rules">Rules: </label>
            <input type="text" name="rules" placeholder="rules"/><br/> */}
            <select name="operand" onChange={(e)=>handleChange(e, index)}>
                <option>First Name</option>
                <option>Last Name</option>
                <option>Age</option>
                <option>Is Musician?</option>
                <option>Also Plays</option>
                <option>Gender</option>
                <option>Height</option>
            </select> &nbsp;
            <select name="operator" onChange={(e)=>handleChange(e, index)}>
                {
                allOperators.map((ope, i)=> {
                    return <option key={i}>{ope}</option>
                })
                }
            </select> &nbsp;
            <input type="text" name="value" placeholder="value" onChange={(e)=>handleChange(e, index)}/>
        </form>
    )
}