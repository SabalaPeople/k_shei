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
        <ReactRouter.BrowserRouter>
          <ReactRouter.Switch>
            <ReactRouter.Route exact path={"/"} component={HomePage}/>
          </ReactRouter.Switch>
        </ReactRouter.BrowserRouter>
      );
    }
  }





















ReactDOM.render(<RouterApp/>, document.body);