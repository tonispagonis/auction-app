import React, { useContext} from 'react'
import Auction from '../components/Auction'
import List from '../components/List'
import Nav from '../components/Navigate'
import MainContext from '../context/MainContext'

const AuctionPage = () => {
  const { showAuction, setShowAuction } = useContext(MainContext)

  return (
    <div>
      <Nav />
      <List />
      {showAuction && <Auction />}
    </div>
  )
};

export default AuctionPage





























// import React from 'react';
// import OfferCard from '../components/OfferCard';
// import { useState } from 'react';

// // const API_URL = '';    

// const AuctionPage = () => {
//   const [offers] = useState([]);

//   return (
//     <div>
//       {offers?.length > 0
//       ? (
//         <div className='container'>
//           {offers.map((offer) => (
//             <OfferCard offer={offer} />
//           ))}
//         </div>
//       ) : (
//         <div className='empty'>
//           <h3 className='no-offers-line'>No offers at the moment</h3>
//         </div>
//       )}
//     </div>
//   )
// };

// export default AuctionPage;


