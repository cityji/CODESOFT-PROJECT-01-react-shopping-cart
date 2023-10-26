import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

import './Faq.css';
function BasicExample() {
    return (
        <Accordion id='FAQ' defaultActiveKey="6" className='p-1 m-1 mt-5'>
            <Accordion.Item eventKey="6">
                <Accordion.Header>Q: Who are we and what do we do ?</Accordion.Header>
                <Accordion.Body>
                    A: We are KhannaRadio, a one-stop shop for purchasing items in bulk. We offer high-quality electronic devices at competitive costs. Our objective is to provide a wide variety of goods, such as smart TVs, premium speakers, gadgets, and home appliances, all supported by quality assurance and outstanding customer service. Explore our website to learn more about Khanna Raadio! 📺🔊📱🏡 
                     or  <Badge bg="info" className=" ms-2 p-2 m-2"><a className='link' href='https://maps.app.goo.gl/fh9aYTJTmJoHWP3g6'>Visit Our Shop</a></Badge>
                </Accordion.Body>
            </Accordion.Item>
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
                    A: We ensure our products are passed with standard quality checks, before packaging the product we offer the customers to demonstrate all function of production best possible customer satisfaction <br /> but definitely, we have a comprehensive return and exchange policy in place to address any issues with defective products promptly.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;