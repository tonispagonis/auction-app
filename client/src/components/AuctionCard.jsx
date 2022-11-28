import React, { useContext } from 'react'
import MainContext from '../context/MainContext'
import { checkSession, timeDistance } from '../api/http'

const AuctionCard = ({ auction }) => {
  const { setShowAuction, setId } = useContext(MainContext)
  const show = async (id) => {
  const logged = await checkSession()
    if (logged) {
      setShowAuction(true)
      setId(id)
      console.log(id)
    }
  }

  return (
    <div className='auction-card d-flex f-wrap f-column a-center' style={{ cursor: 'pointer' }} onClick={() => {
      show(auction._id)
    }}>
      <div className='image-container' style={{ backgroundImage: `url("${auction.image}")` }}></div>
      <h3>{auction.title}</h3>
      <h5>Provider: {auction.name}</h5>
      <h5>Starting price: ${auction.startPrice}</h5>
      <h5>Time left: {timeDistance(auction.time, Date.parse(new Date))}</h5>
      {auction.bids.length > 0 && <h5>Closing price: ${auction.bids[auction.bids.length - 1].price}</h5>}
      <h5>Bids placed: {auction.bids.length}</h5>
    </div>
  )
};

export default AuctionCard