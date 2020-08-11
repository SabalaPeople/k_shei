const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

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
        <Router>
          <Switch>
            <Route exact path={"/"} render={<HomePage/>}/>
          </Switch>
        </Router>
      );
    }
  }





















ReactDOM.render(<RouterApp/>, document.body);