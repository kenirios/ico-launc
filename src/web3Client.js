import AbiIco from './ether/abi/ICO.json';
import Web3 from 'web3';
let web3;
let web3Ico;
let Address = '0xC41601270a386C21164374B49beC36Dea78b8C3a';
let selectedAccount;
const providerUrl = process.env.PROVIDER_URL || 'http://localhost:8545';
const ICOA = new Web3(providerUrl,Address);
//console.log(Web3);

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
		web3 = new Web3(window.web3.currentProvider);
		let provider = window.ethereum;	
			provider
				.request({ method: 'eth_requestAccounts' })
				.then((accounts) => {
				selectedAccount = accounts[0];
				//console.log(`Selected account is ${selectedAccount}`);
				})
				.catch((err) => {
				console.log(err);
				return;
				});
			window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(ICOA);
		//console.log(`Selected account changed to ${selectedAccount}`);
		});			
} else {
  console.log("Por Favor Instale MetaMask")
}
export default web3;





//export default contracts;