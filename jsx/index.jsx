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









class RouterApp extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={HomePage}/>
          </Switch>
        </BrowserRouter>
      );
    }
  }





















ReactDOM.render(<RouterApp/>, document.body);