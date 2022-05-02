// Example to pass data from parent to child : 

function Parent(props) {

    return (
        <div>

            <h1>Example to pass data from Parent to child : </h1>

            <h3>I am Parent Component</h3>

            <p>Hello, {props.fname}</p>
            <p>Your last name is {props.lname}</p>
            <p>Age is {props.age}</p>

            <br></br>
            <br></br>

            <Child fname = "Sunny" chlname = {props.lname} chage = {props.age} />
        </div>
    )
}

function Child(props) {

    return (
        <div>

            <h3>I am Child Component</h3>

            <p>Hello, {props.fname} lastname : {props.chlname} and age is {props.chage}</p>
            
        </div>
    )
}


ReactDOM.render(<Parent fname = "mukesh" lname = "Kumar" age = '23'/>, document.getElementById("container"));