import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';
function BasicExample() {
    return (
        <Accordion id='FAQ' defaultActiveKey="0" className='p-1 m-1 mt-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Q: Do you offer a warranty on your products?</Accordion.Header>
                <Accordion.Body>
                    A: Yes, most products come with warranties for peace of mind, ensuring that you're covered in case of any issues during the specified period.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Q: Can I get bulk discounts?</Accordion.Header>
                <Accordion.Body>
                    A: Certainly, we offer significant discounts for bulk purchases, making it cost-effective for businesses and individuals looking to buy in larger quantities.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Q: How reliable are your indigenous products?</Accordion.Header>
                <Accordion.Body>
                A: Our indigenous products undergo rigorous quality checks, ensuring they meet or exceed industry standards, guaranteeing both quality and reliability.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Q: What payment methods do you accept?</Accordion.Header>
                <Accordion.Body>
                A: We accept cash, major credit cards, and online payment methods, providing flexibility for your payment preferences.  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Q: Do you provide installation services for appliances like washing machines?</Accordion.Header>
                <Accordion.Body>
                A: Yes, we offer installation assistance for appliances like washing machines, ensuring they are set up correctly and ready for use.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Q: Is there a return policy for defective items?</Accordion.Header>
                <Accordion.Body>
                A: We ensure our products are passed with standard quality checks, before packaging the product we offer the customers to demonstrate all function of production best possible customer satisfaction <br/> but definitely, we have a comprehensive return and exchange policy in place to address any issues with defective products promptly.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;