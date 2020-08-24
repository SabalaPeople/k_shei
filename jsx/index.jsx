const BrowserRouter = window.ReactRouterDOM.BrowserRouter;
const HashRouter = window.ReactRouterDOM.HashRouter;
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
        <img src={'img/k_shei_on_grass_1.png'} alt=""/>
    </div>
    <div className={'intro'} id="intro">

        <div className={'intro_1'}>
            <img src={'img/k_shei_1.png'} alt=""/>
            介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_1.png'} alt=""/>
            介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹
        </div>
        
    </div>
    <div className={'k_shei_intro'} id="k_shei_intro">
        <div className={'intro_1'}>
            <img src={'img/k_shei_1.png'} alt=""/>
            可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_2.png'} alt=""/>
            可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_3.png'} alt=""/>
            可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_4.png'} alt=""/>
            可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_5.png'} alt=""/>
            可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_6.png'} alt=""/>
            可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!可以抓狗鳥。吼甚!!
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
                          <div className={'row'}><input type="text" onChange={e => this.setState({phone: e.target.value})} placeholder={"帳號"} required/></div>
                          <div className={'row'}><input type="password" onChange={e => this.setState({pwd: e.target.value})} placeholder={"密碼"} required/></div>
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
                  <Intro/>
                  <Login onLoginSuccess={this.setIsRedirect}/>
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

class KSheiComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           
        }
        
       
    }

    render(){
        let time = 18;
        let button;
        /** button = <button className={'buying} onClick={this.grab}>搶購中</button>; */
        if(this.props.prop.time == time){
            button = <button className={'buyingG'} onClick={this.grab}>搶購中</button>;
        } else {
            if(this.props.prop.time < time){
                button = <button className={'endingG'} disabled>已結束</button>;
            } else {
                button = <button className={'waitingG'} disabled>等待</button>
            } 
        }

        return(
            <div className={'rowG'}>
                <div className={'boxG'}>
                    <img src={'img' + this.props.prop.ksheiImg} alt="" />
                    <div className={'k_shei_introG'}>
                        <div className={'valueG'}>
                            <div className={'k_shei_intro_textG'}>寵物價值:</div>
                            <div className={'k_shei_intro_contentG'}>{this.props.prop.ksheiValue}</div>
                        </div>
                        <div className={'percentage_and_dayG'}>
                            <div className={'k_shei_intro_textG'}>成長資訊:</div>
                            <div className={'k_shei_intro_contentG'}>{this.props.prop.ksheiGrowing}天</div>
                        </div>
                        <div className={'timeG'}>
                            <div className={'k_shei_intro_textG'}>抓取時間:</div>
                            <div className={'k_shei_intro_contentG'}>{this.props.prop.ksheiGrab}</div>
                        </div>
                    </div>
                    {button}
                </div>
            </div>
        );
    }

}

class GamePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
       
    }


    renderKShei(){
        let ksheiData = [
            {ksheiImg: '/k_shei_1.png', ksheiValue: 300, ksheiGrowing: 5, ksheiGrab: '12:00 - 12:10', time: 12},
            {ksheiImg: '/k_shei_2.png', ksheiValue: 500, ksheiGrowing: 7, ksheiGrab: '14:00 - 14:10', time: 14},
            {ksheiImg: '/k_shei_3.png', ksheiValue: 700, ksheiGrowing: 9, ksheiGrab: '16:00 - 16:10', time: 16},
            {ksheiImg: '/k_shei_4.png', ksheiValue: 1200, ksheiGrowing: 12, ksheiGrab: '18:00 - 18:10', time: 18},
            {ksheiImg: '/k_shei_5.png', ksheiValue: 1500, ksheiGrowing: 15, ksheiGrab: '20:00 - 20:10', time: 20},
            {ksheiImg: '/k_shei_6.png', ksheiValue: 3000, ksheiGrowing: 22, ksheiGrab: '22:00 - 22:10', time: 22}
        ];

        let ary = [];
        for(let i = 0 ; i < 6 ; i++){
            ary[i] = <KSheiComponent prop={ksheiData[i]}/>;
        }
        return ary;
    }

    render(){
        return(
            <div>
                <div className={'slider_bannerG'}>
                    <div>
                        <img src={'img/k_shei_on_grass_1.png'} alt="" />
                        
                    </div>
                    <div>
                        <img src={'img/k_shei_on_grass_1.png'} alt="" />
                        
                    </div>
                    <div>
                        <img src={'img/k_shei_on_grass_1.png'} alt="" />
                        
                    </div>
                    <div>
                        <img src={'img/k_shei_on_grass_1.png'} alt="" />
                        
                    </div>
                    <div>
                        <img src={'img/k_shei_on_grass_1.png'} alt="" />
                        
                    </div>
                </div>
                <div className={'mainG'}>
                
                    {
                        this.renderKShei()
                    }

                </div>
                
            </div>
        );
    }

}



class RouterApp extends React.Component {
    render() {
      return (
        <HashRouter>
          <Switch>
            <Route path={"/game"} component={GamePage}/>
            <Route exact path={"/"} component={HomePage}/>
          </Switch>
        </HashRouter>
      );
    }
  }





















ReactDOM.render(<RouterApp/>, document.body);