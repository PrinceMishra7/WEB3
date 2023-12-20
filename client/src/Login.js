import React,{useState} from 'react'
import ConnectWallet from './ConnectWallet'
const Login = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const handlePublicKey=(publicKey)=>{
    setWalletAddress(publicKey);
  }
  return (
    <div>
      <ConnectWallet handlePublicKey={handlePublicKey}/>
      <label htmlFor="publicKey">Public Key : </label>
      <input type="text" id='publicKey' name='publickey' value={walletAddress} />
    </div>
  )
}

export default Login