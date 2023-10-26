import Image from 'react-bootstrap/Image';
import "./Welcome.css";
import image from './vector-white-background.jpg';
function Welcome() {
  return   (
  <section className='sec' style={{backgroundImage: `url(${image}` }}>
  <Image src={require('./KhannaRadio-Welcome.jpg')} alt='Hello World' fluid /> 
  </section>
  )
}

export default Welcome;