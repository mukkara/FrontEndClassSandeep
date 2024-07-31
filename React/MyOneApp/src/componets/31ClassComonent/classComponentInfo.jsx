import React from 'react';
// let name = "I am Ranga"
class ClassComponentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'I am Ranga',
            age:30,
            address:{'fname':"Ranga", "lname":"Mukkara"},
            teckStack:['reactJs', 'NodeJs', 'Devops', 'ASW'],
            livingInIndia:false,
        }
    }

    abc = (e) => {
        console.log("EEEE:", e)
        // name = "I am RSR"
        this.setState({name : "I am RSR"})
    }

    render() {
        // console.log("namee:", namee)
        const {name, age, livingInIndia }= this.state;
        return (
            <>
                <span>Benifit of ussing Class Component {name}</span>
                <br/>
                <span>My Age: {age}</span>
                <br/>
                Leaving In India {livingInIndia ==true ? "Yes" :"No"}
                <br/>
                <button onClick={() => { this.abc(name) }}>Change If Not</button>
            </>
        )
    }

}

export default ClassComponentInfo