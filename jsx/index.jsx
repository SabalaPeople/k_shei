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
        <Route.BrowserRouter>
          <Route.Switch>
            <Route.Route exact path={"/"} component={HomePage}/>
          </Route.Switch>
        </Route.BrowserRouter>
      );
    }
  }





















ReactDOM.render(<RouterApp/>, document.body);