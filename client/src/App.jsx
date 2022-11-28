import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AuctionPage from './pages/AuctionPage'
import LogIn from './components/LogIn'
import './index.css'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import MainContext from './context/MainContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UploadPage from './pages/UploadPage'

const socket = io.connect('http://localhost:4001')

function App() {
    const [sessionUser, setSessionUser] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [time, setTime] = useState(null)
    const [price, setPrice] = useState(null)
    const [auctions, setAuctions] = useState([])
    const [showAuction, setShowAuction] = useState(false)
    const [id, setId] = useState('')
    const [singleAuction, setSingleAuction] = useState({})
    const [tick, setTick] = useState(false)
    const [showOpen, setShowOpen] = useState(true)
    const [showClosed, setShowClosed] = useState(true)

    const states = {
        sessionUser, setSessionUser,
        image, setImage,
        title, setTitle,
        time, setTime,
        price, setPrice,
        auctions, setAuctions,
        showAuction, setShowAuction,
        id, setId,
        singleAuction, setSingleAuction,
        socket,
        showOpen, setShowOpen,
        showClosed, setShowClosed
    }

    useEffect(() => {
        setTimeout(() => {
            // socket.emit('tick', 'tick')
            tick ? setTick(false) : setTick(true)
            clearTimeout();
        }, 1000)
    }, [tick])

  return (
          <div className='App container'>
  
              <MainContext.Provider value={states}>
                  <BrowserRouter>
                    <Navbar />
                    <div>
                      <Routes>
                          <Route path='/' element={<HomePage />} />
                          <Route path='/auction' element={<AuctionPage />} />
                          <Route path='login' element={<LogIn />} />
                          <Route path='/register' element={<LogIn />} />
                          <Route path="/upload" element={<UploadPage />} />

                      </Routes>
                    </div>
                  </BrowserRouter>
              </MainContext.Provider>
  
          </div>
    )

};




export default App;
