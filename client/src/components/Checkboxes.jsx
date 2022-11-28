import React, { useState, useContext } from 'react'
import MainContext from '../context/MainContext'

const Checkboxes = () => {
  const { showOpen, setShowOpen, showClosed, setShowClosed } = useContext(MainContext)

  const onlyOpen = () => {
    setShowOpen(!showOpen);
  }
  const onlyClosed = () => {
    setShowClosed(!showClosed);
  }

  return (
    <div>
      <Checkbox
        label='Show active offers'
        value={showOpen}
        onChange={onlyOpen}
      />
      <Checkbox
        label='Show finished auctions'
        value={showClosed}
        onChange={onlyClosed}
      />
    </div>
  )
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type='checkbox' checked={value} onChange={onChange} />
      {label}
    </label>
  )
};



export default Checkboxes