import  { useState } from "react";

const Listofitem= () =>{
const [items , setItems ]=useState([]);
const [item , setItem ]=useState("");

const handlesubmit = (e) =>
{
    e.preventDefault();
    setItems([...items,item]);
    setItem("");

}


return(

    <div>
  <form onSubmit ={handlesubmit}>
    <input
    type={"text"}
    value={item}
    onChange={(e) => setItem(e.target.value)}/>

    <input type="submit" />
  
</form>

<div>
    <ul>
        { items.map((item,index) =>
            (
                <li key="item">{item}</li>

            )

        
        )}

    </ul>
   
    
</div>



    </div>


);
};
export default Listofitem;


