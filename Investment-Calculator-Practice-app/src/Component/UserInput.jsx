
const UserInput = ({ handleChange, userInput }) => {

  return (
    <section id="user-input">
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input 
            type='number' 
            value={userInput.initialInvestment}
            onChange={(e) => handleChange('initialInvestment', e.target.value)}
            required />
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type='number' 
            value={userInput.annualInvestment}
            onChange={(e) => handleChange('annualInvestment', e.target.value)}
            required />
          </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Returns</label>
          <input 
            type='number' 
            value={userInput.expectedReturns}
            onChange={(e) => handleChange('expectedReturn', e.target.value)}
            required />
        </p>
        <p>
          <label>Duration</label>
          <input 
            type='number' 
            value={userInput.duration}
            onChange={(e) => handleChange('duration', e.target.value)}
            required />
          </p>
      </div>
    </section>
  )
}

export default UserInput