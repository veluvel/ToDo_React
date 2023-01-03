import React,{useState} from 'react'


const Form = () => {
    
    const [current,setcurrent] = useState("");
    // const [todos,setTodos] = useState([]);
    function getvalue(e){
        console.log(current)
        setcurrent(e.target.value);
    }
  return (
<div>
    <div>
        <form>
            <input type="text" placeholder="Enter a Todo..." value={current} onChange={getvalue} className='task-input' />
            <button className="button-add" type={'submit'}>Add</button>
        </form>
    </div>
    {/* <div>
        <form>
            <input type="text" placeholder="Enter a Todo.." className='task-input'></input>
            <button className="button-add" type="submit">Add</button>
        </form>
    </div> */}
    
</div>
  )
}

export default Form