import react from 'react'
const Card = (props) => {
  return(
    
        <div className='card'>
        <div className='top'>
        <img src={props.logo} alt=''></img>
          <button>Save </button>
        </div>
        
        <div classNmae='center'>
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className='bottom'>
          <div>
              <h3>{props.salary}</h3>
              <p>{props.loc}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    
  )
}
export default Card