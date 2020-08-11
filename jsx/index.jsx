const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

var Intro = () => {
  return (
    <div>
    <div className={'header'}>
        <nav>
            <a href="#banner">首頁</a> 
            <a href="#intro">遊戲介紹</a>      
            <a href="#k_shei_intro">狗鳥介紹</a>      
            <a href="#login">登入</a>                 
        </nav>
    </div>
    <div className={'banner'} id="banner">
        <img src={'../img/k_shei_on_grass_1.png'} alt=""/>
    </div>
    <div className={'intro'} id="intro">
        <div className={'intro_1'}>
            <img src={'../img/k_shei_1.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'../img/k_shei_1.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'../img/k_shei_1.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
    </div>
    <div className={'k_shei_intro'} id="k_shei_intro">
        <div className={'intro_1'}>
            <img src={'../img/k_shei_1.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'../img/k_shei_2.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'../img/k_shei_3.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'../img/k_shei_4.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'../img/k_shei_5.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'../img/k_shei_6.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
    </div>
  </div>
  );
}

class Login extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          phone: '',
          pwd: ''
      }
      this.login = this.login.bind(this);
  }

  login(event){
      event.preventDefault();
      this.props.onLoginSuccess(true);
  }

  render(){
      return(
          <div className={'login'} id="login">
              <div className={'login_box'}>
                  <div>
                      <form onSubmit={this.login}>
                          <div className={'row'}><input type="text" onChange={e => this.setState({phone: e.target.value})} required/></div>
                          <div className={'row'}><input type="password" onChange={e => this.setState({pwd: e.target.value})} required/></div>
                          <div className={'row'}><button type="submit">登入</button></div>
                      </form>
                  </div>
              </div>
          </div>
      );
  }
}



class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          isRedirect: false
        }
        this.setIsRedirect = this.setIsRedirect.bind(this);
    }

    setIsRedirect(isRedirect){
      this.setState({isRedirect: isRedirect});
    }

    render(){
      if(!this.state.isRedirect){
            return(
                <div>
                  {/* <Intro/>
                  <Login onLoginSuccess={this.setIsRedirect}/> */}
                  AAA
                </div>
            );
      } else {
        return (
          <div>
              <Redirect push to={"/game"}/>
          </div>
      );
      }
    }

}

class GamePage extends React.Component {

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
            <Route path={"/game"} component={GamePage}/>
            <Route exact path={"/"} component={HomePage}/>
          </Switch>
        </Router>
      );
    }
  }





















ReactDOM.render(<RouterApp/>, document.body);