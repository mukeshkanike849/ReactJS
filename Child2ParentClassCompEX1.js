// Child to Parent Component data flow using Class Component Example 1 : 

class Parent extends React.Component{

    // parentData = "mallesh";
    
    state = {
        person : "mallesh"
    }

    render(){
        
        return(

            <div>
                <h1>Parent Component : {this.state.person}</h1>
                <Child fname="Mukesh" lname="Kumar" getDataFromParent={this.getDataFromParent.bind(this)}/>
                {/* <p>Child data in parent Component : {this.props.fname} {this.props.lname}</p> */}

                {/* <Child fname = "Mukesh" lname = "Kumar" />; */}

                {/* <p>Data from child : {()=>{this.getDataFromParent()}}</p> */}
            </div>
        )
    }

    getDataFromParent(childFname) {
        // this.parentData = childFname;
        
        this.setState({person : childFname});
    }

}


class Child extends React.Component{

    render(){
        return(

            <div>
                <h1>Child Component : </h1>
                <p>Child data : {this.props.fname} {this.props.lname}</p>
                <button onClick={()=>{this.props.getDataFromParent(this.props.fname)}}>Send data to parent</button>
            </div>
        )
    }
}

ReactDOM.render(<Parent />, document.getElementById("container"));

