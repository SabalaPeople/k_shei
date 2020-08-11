class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }


    

    render(){
       
            return(
                <div>
                    AAGGFG
                </div>
            );
        
    }

}



class RouterApp extends React.Component {
    render() {
      return (
        <React.Component.BrowserRouter>
          <React.Component.Switch>
            <React.Component.Route exact path={"/"} component={HomePage}/>
          </React.Component.Switch>
        </React.Component.BrowserRouter>
      );
    }
  }





















ReactDOM.render(<RouterApp/>, document.body);