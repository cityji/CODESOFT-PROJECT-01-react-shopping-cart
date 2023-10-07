import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import Badge from 'react-bootstrap/Badge';

function DarkVariantExample() {
  return (
    <>
    <hr/>
    <h1 className='fs-4 p-6 m-2 '><Badge bg="warning" text='black'> O U R  P R O U D T S .::.</Badge></h1>
    <br/>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./Dual-USB-Charging-Block-products-khanna-radio.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Chargers/Accessories</h5>
          <p>Get high-quality mobile chargers in bulk at competitive rates.<br/>Save big on mobile charger bulk purchases with us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./microwave-khanna-radio.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Induction/Microwave</h5>
          <p>Our copper-wired technology ensures longevity and reliability.<br/>
Enjoy bulk discounts on kitchen essentials without compromising quality.</p>
        </Carousel.Caption>
      </Carousel.Item>  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./smart-ac-khanna-radio.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Smart AC/Cooler/Fans</h5>
          <p>
          We offer premium quality smart electronic fans/ AC and Coolers at unbeatable prices.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./smartTV-khanna-Radio.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Smart TV/LCD/LED & Accessories</h5>
          <p>
          Experience high-quality visuals and entertainment, tailored for your budget.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./washing-machine-products-khanna-radio.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Washing Machine / Gadgets</h5>
          <p>
          Our machines use top-tier copper wiring for lasting performance.<br/>
          Buy in bulk for unbeatable savings on reliable washing machines.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./speaker01-khanna-radio.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Speakers / Home theater / Soundbox</h5>
          <p>
          Quality speakers meet your budgetary needs here.<br/>
          Unleash incredible sound with our affordable speaker collection.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default DarkVariantExample;