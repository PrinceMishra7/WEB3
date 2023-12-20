import {ethers} from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum);

export async function connectWallet(){
    return (await provider.getSigner()).address;
}