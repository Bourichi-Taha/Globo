import React from 'react'
import "../assets/css/data-protection.css"
import DataHero from '../components/DataHero'
import DataLaws from '../components/DataLaws'
const DataProtection = () => {
  return (
    <div className="data-protection-container">
        <DataHero />
        <DataLaws />
    </div>
  )
}

export default DataProtection