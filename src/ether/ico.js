import Web3 from 'web3';
import web3 from './web3';
import newICO from './abi/ICO.json';
//new web3.eth.Contract(jsonInterface[, address][, options])


const Ico = new web3.eth.Contract(
  new web3.eth.Contract(JSON.parse(newICO.interfaces),'0xC41601270a386C21164374B49beC36Dea78b8C3a')
  //JSON.parse(newICO.interfaces),'0xC41601270a386C21164374B49beC36Dea78b8C3a'
);

export default Ico; 