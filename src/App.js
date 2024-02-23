
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Group from './components/group';
import Rule from './components/rule';

function App() {
  const [formElements, setFormElements] = useState([]);
  const [rules, setRules] = useState([]);
  const [json, setJson] = useState([]);
  const allOperators = useRef(["starts-with", "ends-with", "contains", "exact-match", "regex", "not-contains", "=", ">", ">=", "<", "<=", "!=", "true", "false"])
  const ruleIndex = useRef(0);
  // console.log('ruleIndex ',ruleIndex.current);
  const [jsonIsUpdated, setJsonIsUpdated] = useState(false);
  const [formData, setFormData] = useState({operand: 'First Name', operator: 'starts-with', value: '', index: ''});
  // const [fields, setFields] = useState();
  // const stringOperators = useRef(["starts-with", "ends-with", "contains", "exact-match", "regex", "not-contains"]);
  // const numberOperators = useRef(["=", ">", ">=", "<", "<=", "!="]);
  // const booleanOperators = useRef(["true", "false"]);
  // console.log('allOperators from App ',allOperators.current);

  function handleRuleClick(e){
    e.preventDefault();    
    setRules([...rules, <Rule allOperators={allOperators.current}
                              json={json}
                              setJson={setJson}
                              handleChange={handleChange}
                              index={ruleIndex.current}/>]);

    setJson([...json,{operand: 'First Name', operator:'starts-with', value:''}]);
    // console.log('json ',json);
    ruleIndex.current++;
  }

  function handleGroupClick(e){
    e.preventDefault();
    setFormElements([...formElements, <Group allOperators={allOperators.current}/>])
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("json ",json);
    setFormData({operand: 'First Name', operator: 'starts-with', value: '', index: ''});
  }

  useEffect(()=>{
    // console.log('json from useEffect ',json);
    if(jsonIsUpdated){
      const i = formData.index;
      // console.log('formData ',formData);
      // console.log('i= ',i,' name= ',name,' value=',value);
      setJson(prevJson=>{
        const updatedJson = [...prevJson];
        updatedJson[i] = {operand: formData.operand, operator: formData.operator, value: formData.value};
        return updatedJson;
      })
      setJsonIsUpdated(false);
    }
  },[jsonIsUpdated])

  function handleChange(e, i){
    e.preventDefault();
    const {name, value} = e.target;
    // console.log('inside handleChange');

    //why the below commented line does not consider the previous state of formData?
    // setFormData({...formData, [name]:value, index: i});
    
    setFormData(prevState => {
      return {...prevState, [name]:value, index: i}
     })
    
    // console.log('formData ',formData);
    // console.log('e.target ',e.target);
    // console.log('e.target.name ',e.target.name);
    // console.log('e.target.value ',e.target.value);
    // console.log('name from destructure ',name);
    // console.log('value from destructure ',value);
    // console.log('json from handleChange ',json);
    setJsonIsUpdated(true);
    // const updatedJson = json.map((elem,index)=>{
    //   if(index === i){
    //     return {...elem, [name]:value};
    //   }
    //   return elem;
    // })
    // console.log('updatedJson ',updatedJson);
    // setJson([...updatedJson]);

    // setJson(prevJson => {
    //   const updatedJson = [...prevJson];
    //   updatedJson[i] = {...updatedJson[i], [name]:value}
    //   return updatedJson;
    // })
  }

  return (
    <div className="App">
      <button onClick={(e)=>handleRuleClick(e)}>+ Rule</button> &nbsp; &nbsp;
      <button onClick={(e)=>handleGroupClick(e)}>+ Group</button><br/>
      {/* <form onSubmit={(e)=>handleSubmit(e)}>
        <label for="rules">Rules: </label>
        <input type="text" name="rules" placeholder="rules"/><br/>

        <label for="combinator">Combinator: </label>
        <select name="combinator">
          <option>AND</option>
          <option>OR</option>
        </select><br/>
        <label for="not">Not: </label>
        <input type="checkbox"/><br/>
        <label for="reason">Reason: </label>
        <input type="text" placeholder="reason"/><br/>
        <label for="scoring_rule">Scoring Rule: </label>
        <select name="scoring_rule">
          <option>Field</option>
          <option>Group</option>
        </select><br/>
      </form> */}
      {/* {
        formElements.map((elem, i)=> <p key={i} handleChange={handleChange}>{elem}</p> )
      } */}
      {
        rules.map((rule, i)=> <p key={i}>{rule}</p>)
      }
      <button onClick={(e)=>handleSubmit(e)}>Submit</button>
    </div>
  );
}

export default App;
