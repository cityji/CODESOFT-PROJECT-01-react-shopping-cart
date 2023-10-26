import Image from 'react-bootstrap/Image';
import './CommingSoon.css';
function Welcome() {
  return (<>
    <div className='PageCenter'>
      <h3 className='tagLine'>Welcome to Khanna Radio</h3>
      <h1 className='subText'>We are currently working on this website.
        <span className='textAccent'>
         Will be Available soon...
        </span>
        </h1>
    </div>
    {/* <Image id='ComeSoon' src={require('./commingSoon.jpg')} alt='Hello World' fluid />  */}
  </>)
}

export default Welcome;