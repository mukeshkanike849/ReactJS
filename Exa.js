function Parent(props) {

    state = {
        person: "Mallesh"
    }

    return (
        <div>
            <p>I am Parent.</p>
            <p>State : {props.state.person} </p>
            <Child fname="Mukesh" lname="Kumar" getDataFromParent={getDataFromParent} />

        </div>

    getDataFromParent(childFname) {

        setState({ person: childFname });
    }
    )

}



function Child(props) {

    return (
        <div>
            <p>I am Child.</p>
            <p>Props in child : {props.fname} {props.lname}</p>
            <button onClick={getDataFromParent(props.fname)}>Click here to change name</button>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Parent />
    </div>, document.getElementById("container"))