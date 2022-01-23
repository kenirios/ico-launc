import React, { Component } from 'react';
import './css/App.css';
import Button from '@material-ui/core/Button';
import Start from './components/Start';
import About from './components/About';
import Whitepaper from './components/Whitepaper';
import Roadmap from './components/Roadmap';
import Contribute from './components/Contribute';
import Team from './components/Team';
import scrollToComponent from 'react-scroll-to-component';
import Web3 from 'web3';
import web3 from './web3Client';
import web3Ico from './web3Client';
//import Ico from './ether/Ico';

class App extends Component {

  state = {
    myBalance: '',
    myEther: '',
    myAddress: ''
  }
 
  async componentDidMount(){
    //let accounts = await web3.eth.getAccounts();
    //let myBalance = await web3.methods.myBalance().call({from:accounts[0]});
    //myBalance = web3.utils.fromWei(myBalance, 'ether');   
    //let myBalanceEther = await web3.eth.getBalance(accounts[0]);
    //myBalanceEther = web3.utils.fromWei(myBalanceEther, 'ether');
    //let myEther = myBalanceEther;   
    //let myAddress = await web3.methods.myAddress().call({from:accounts[0]});   
    //this.setState({myBalance, myEther, myAddress});
   }


  render() {
  console.log(web3Ico);
    return (
      <div>
        <nav>

          <a href="/" className="titleICO">
            <i className="material-icons">group_work</i>
            <div>DEMOICO</div>
          </a>

          <div className="middleNav">
            <a onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500})}><Button>About</Button></a>
            <a onClick={() => scrollToComponent(this.Whitepaper, { offset: -70, align: 'top', duration: 1500})}><Button>Whitepaper</Button></a>
            <a onClick={() => scrollToComponent(this.Roadmap, { offset: -70, align: 'top', duration: 1500})}><Button>Roadmap</Button></a>
            <a onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}><Button>Contribute</Button></a>
            <a onClick={() => scrollToComponent(this.Team, { offset: -70, align: 'top', duration: 1500})}><Button>Team</Button></a>
          </div>

          <div className="rightNav">
            <i className="material-icons">account_box</i>

            <div className="myAccountBox">
              <div className="address"> Address: 0x47d8e19Ab54CED9d4Afc7C5519C6481C3D893d8d </div>
              <div className="eth"> ETH: 12 </div>
              <div className="dctoken"> My DC: 1223 </div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>
        <div ref={(section) => { this.About = section; }}><About/></div>
        <div ref={(section) => { this.Whitepaper = section; }}> <Whitepaper/> </div>
        <div ref={(section) => { this.Roadmap = section; }}> <Roadmap/> </div>
        <div ref={(section) => { this.Contribute = section; }}> <Contribute/> </div>
        <div ref={(section) => { this.Team = section; }}> <Team/> </div>

      </div>
    );
  }
}

export default App;
