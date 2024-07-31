import React, {useState} from 'react';


function FunComponntInfo (){

    // this.state={
    //     name:"I am Ranga"
    // }

    const[name, setName] = useState("I am Ranga");
    const[age, setAge] = useState(30);
    const[livingInIndia, setLivingInIndia] = useState(true);
    const[teckStack, setTeckStack] = useState(['reactJs', 'NodeJs', 'Devops', 'ASW']);
    const[address, setAddress] = useState({});


    const abc=(e)=>{
console.log("EEEE:", e);
setName("I am RSR")
    }

    return(
        <>
        <span>Benifit of ussing Class Component {name}</span>
        <br/>
        <span>My Age: {age}</span>
        <br/>
        Leaving In India {livingInIndia ==true ? "Yes" :"No"}
        <br/>
        <button onClick={() => { abc(name) }}>Change If Not</button>
    </>
    )
}
export default FunComponntInfo;