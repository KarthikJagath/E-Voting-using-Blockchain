
import React from 'react';
import './cssComponents/GetStart.css'
import image1 from '../assets/blockchain-technology-fintech-cryptocurrency-block-chain-server-abstract-background-linked-block-contain-cryptography-hash-and-transaction-data-new-futuristic-system-technology-vector-illustration copy.jpg';
import image2 from '../assets/minimalism-ethereum-logo-wallpaper-preview.jpg';

const Getstart = () => {
  return (
    <section>
      <div className='d1'>
            <div>
        <h3>Transforming Electoral Systems: The Impact of Blockchain Technology on Online Voting</h3>
        <p>Blockchain uses cryptographic techniques to maintain voter anonymity and privacy,<br></br>
            providing unique keys for secure voting,<br></br>
            preventing coercion or bribery.</p>
            </div>
            <div>
        <img src={image1} alt="Image1" />
        </div>
      </div>
      <div className='d2'>
        <div>
        <img src={image2} alt="Image2" />
        </div>
        <div>
        <h3>Empowering Democracy: Leveraging Ethereum for Transparent and Secure Online Voting Systems</h3>
        <p>Ethereum's smart contract, immutable ledger,<br></br>
            ensuring transparency, security, and inclusivity,<br></br> 
            while addressing challenges like scalability and usability.</p>
            </div>
      </div>
    </section>
  );
}

export default Getstart;
