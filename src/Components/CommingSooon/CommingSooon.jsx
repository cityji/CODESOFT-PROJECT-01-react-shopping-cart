import Image from 'react-bootstrap/Image';

function Welcome() {
  return   (<>
  
  <Image id='ComeSoon' src={require('./commingSoon.jpg')} alt='Hello World' fluid /> 
  </>)
}

export default Welcome;