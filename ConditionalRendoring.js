class Condition extends React.Component{

    state = {
        adminName : "Mukesh",
        userName : "Girish",
        isAdmin : true
    };

    render(){
        let {adminName, userName, isAdmin} = this.state;
        let renderData = null;

        if(isAdmin){
            renderData = (
                <div>
                    <h1>Admin Name : {adminName}</h1>
                    <h1>HOME</h1>

                    <label>LOGIN : </label>
                    <input type="text" placeholder="Enter username"></input>

                    <br></br>
                    <br></br>

                    {/* <h1>LOGIN</h1> */}
                    {/* <h1>Add Product</h1> */}

                    <label>Add Product : </label>
                    <input type="text" placeholder="Enter product"></input>
                </div>
            );
        }
        else{
            renderData = (
                <div>
                    <h1>User Name : {userName}</h1>
                    <h1>HOME</h1>
                    {/* <h1>LOGIN</h1> */}

                    <label>LOGIN : </label>
                    <input type="text" placeholder="Enter username"></input>
                    
                </div>
            );
        }

    return (
        <div>
            {renderData}

            <br></br>

            <button onClick={() => this.changeView()}>{isAdmin ? "See user view" : "See Admin view"}</button>
        </div>
         );
    }

changeView(){
    if(this.state.isAdmin){
        this.setState({
            isAdmin : false,
        });
    }
    else{
        this.setState({
            isAdmin : true,
        });
    }
}


}

ReactDOM.render(<Condition />, document.getElementById("container"));