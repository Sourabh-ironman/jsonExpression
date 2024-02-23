

export default function Group(){
    
    return (
        <form>
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
      </form>
    )
}