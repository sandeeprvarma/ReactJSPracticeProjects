import React from 'react'
import InvestmentCalculatorLogo from "../assets/investment-calculator-logo.png";
const Header = () => {
  return (
    <header id="header">
      <img src={InvestmentCalculatorLogo} alt="Investment Calculator"  />
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header;