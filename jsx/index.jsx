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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_1.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_1.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
    </div>
    <div className={'k_shei_intro'} id="k_shei_intro">
        <div className={'intro_1'}>
            <img src={'img/k_shei_1.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_2.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_3.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_4.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_5.png'} alt=""/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, natus voluptas repellat tenetur harum odit fugit commodi et pariatur quas voluptates eveniet, id quis ipsum dolorem officiis maiores, consequatur non?
        </div>
        <div className={'intro_1'}>
            <img src={'img/k_shei_6.png'} alt=""/>
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
            nowTime: 0,
            startedTime: 0,
            endTime: 0,
            isGrabbed: false
        }
        this.countDown = this.countDown.bind(this);
        this.grab = this.grab.bind(this);
    }

    async componentDidMount(){
        let result = await Util.send(UriApi.GameApi.GetPetTime.Uri(), {data: {id: this.props.value.id}});
        if(result){
            let startedTime = result.data.startedTime;
            let endTime = result.data.endTime;
            let isGrabbed = result.data.isGrabbed;
            this.setState({nowTime: new Date().getTime(), startedTime: startedTime, endTime: endTime, isGrabbed: isGrabbed});
        }

        this.countDown();
    }

    countDown(){
        setInterval(() => {
            this.setState({nowTime: new Date().getTime()});
        }, 1000);
    }

    grab(){
        this.setState({isGrabbed: true});
        let modalObj = {};
        modalObj.isShow = true;
        modalObj.url = UriApi.GameApi.Grab.Uri();
        this.props.openModal(modalObj);
    }

    render(){
        let button;
        /** button = <button className={GamePageCss.buying} onClick={this.grab}>搶購中</button>; */
        if(this.state.nowTime - this.state.startedTime > 0 && this.state.nowTime - this.state.endTime < 0){
            if(this.state.isGrabbed) button = <button className={GamePageCss.ending} disabled>已結束</button>;
            else button = <button className={GamePageCss.buying} onClick={this.grab}>搶購中</button>;
        } else if(this.state.nowTime - this.state.endTime > 0){
            button = <button className={GamePageCss.ending} disabled>已結束</button>;
        } else {
            if(this.state.startedTime - this.state.nowTime > 90000){
                button = <button className={GamePageCss.waiting} disabled>等待中</button>;
            } else {
                button = <button className={GamePageCss.waiting} disabled>等待{parseInt((this.state.startedTime - this.state.nowTime) / 1000)}</button>
            }
        }

        return(
            <div className={GamePageCss.row}>
                <div className={GamePageCss.box}>
                    <img src={require("../../img" + this.props.value.petImgFile)} alt="" />
                    <div className={GamePageCss.k_shei_intro}>
                        <div className={GamePageCss.value}>
                            <div className={GamePageCss.k_shei_intro_text}>寵物價值:</div>
                            <div className={GamePageCss.k_shei_intro_content}>{this.props.value.startedPetValue} - {this.props.value.endPetValue}</div>
                        </div>
                        <div className={GamePageCss.percentage_and_day}>
                            <div className={GamePageCss.k_shei_intro_text}>成長資訊:</div>
                            <div className={GamePageCss.k_shei_intro_content}>{this.props.value.percentage}% / {this.props.value.increasedDay}天</div>
                        </div>
                        <div className={GamePageCss.time}>
                            <div className={GamePageCss.k_shei_intro_text}>抓取時間:</div>
                            <div className={GamePageCss.k_shei_intro_content}>{this.props.value.startedHour}:00 - {this.props.value.startedHour}:{this.props.value.rangeTime}</div>
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
            isShow: false
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal(modalObj){
        this.setState(modalObj);
    }

    render(){
        return(
            <div>
                <div className={GamePageCss.slider_banner}>
                    <div>
                        <img src={require("../../img/k_shei_on_grass_1.png")} alt="" />
                        
                    </div>
                    <div>
                        <img src={require("../../img/k_shei_on_grass_1.png")} alt="" />
                        
                    </div>
                    <div>
                        <img src={require("../../img/k_shei_on_grass_1.png")} alt="" />
                        
                    </div>
                    <div>
                        <img src={require("../../img/k_shei_on_grass_1.png")} alt="" />
                        
                    </div>
                    <div>
                        <img src={require("../../img/k_shei_on_grass_1.png")} alt="" />
                        
                    </div>
                </div>
                <div className={GamePageCss.main}>
                
                    {
                        this.state.petInfoList.map((value, index) => {
                            return <KSheiComponent value={value} key={index} openModal={this.props.openModal}/>
                        })
                    }

                </div>
                <div className={GamePageCss.footer}>
                    <div className={GamePageCss.content}>
                        <Link to={UriView.GamePage.Uri} className={GamePageCss.lobby_link}>
                            <div className={[GamePageCss.footer_btn ,GamePageCss.active].join(' ')}>
                                <img src={require("../../img/settings.png")} alt="" width="32px" />
                                <div>大廳</div>
                            </div>
                        </Link>
                        <Link to={UriView.OverviewPage.Uri} className={GamePageCss.lobby_link}>
                            <div className={GamePageCss.footer_btn}>
                                <img src={require("../../img/user.png")} alt="" width="32px" />
                                <div>我的資訊</div>
                            </div>
                        </Link>
                    </div>
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