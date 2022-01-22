import web3 from './web3';
import ICO from './abis/ICO.json';
var Contract = require('web3-eth-contract');
Contract.setProvider('ws://localhost:8545');
var contract = new Contract(ICO, '0x5CC02dC71f327767CE6e5F0b69d6a382c3792d1B');
/*
const instance = new web3.eth.Contract(
  JSON.parse(ICO.interface), '0xfF012F1810097A5ba8054DE6fD225193402818E3'
);

export default instance; 
*/