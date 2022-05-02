// Example to pass data from parent to child : 

class Parent extends React.Component {

    render() {
        return (
            <div>

                <h1>Example to pass data from Parent to child : </h1>

                <h3>I am Parent Component</h3>

                <p>Hello, {this.props.fname}</p>
                <p>Your last name is {this.props.lname}</p>
                <p>Age is {this.props.age}</p>

                <br></br>
                <br></br>

                <Child fname="Sunny" chlname={this.props.lname} chage={this.props.age} />
            </div>
        )
    }
}

class Child extends React.Component {

    render() {
        return (
            <div>

                <h3>I am Child Component</h3>

                <p>Hello, {this.props.fname} lastname : {this.props.chlname} and age is {this.props.chage}</p>

            </div>
        )
    }
}


ReactDOM.render(<Parent fname="mukesh" lname="Kumar" age='23' />, document.getElementById("container"));