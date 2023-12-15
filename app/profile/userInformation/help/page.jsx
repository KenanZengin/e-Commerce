"use client"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';


const HelpPage_2 = () => {
  return (
    <div className='help_categories'>
        <div className="title">
            <h2> 
                Frequently Asked Questions
            </h2>
        </div>
        <div className="categoriess">
            <Tabs
        defaultActiveKey="General"
        id="uncontrolled-tab-example"
        className="mb-1"
        >
            <Tab eventKey="General" title="General" >
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I am a 3PL or other service provider and would love to offer my services to Rivly sellers. How can I do this?</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Does Rivly have its own API that my developers can tie into so we can include Rivly in our software? This way we can offer Rivly to our sellers and vice versa.</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Will Rivly track my accurate fulfillable inventory at my 3PL and prevent sales of products that are out of stock?</Accordion.Header>
                    <Accordion.Body>
                    Rivly runs an inventory sync daily with your integrated 3PL in order to track how many items you have available for sale. In addition, we also run a final fulfillment check before allowing the customer to checkout in order to ensure you have the item in inventory and available for your customer.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Tab>
            <Tab eventKey="Account Creation" title="Account Creation">
                <Accordion defaultActiveKey="4">
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>I am a 3PL or other service provider and would love to offer my services to Rivly sellers. How can I do this?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Does Rivly have its own API that my developers can tie into so we can include Rivly in our software? This way we can offer Rivly to our sellers and vice versa.</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Will Rivly track my accurate fulfillable inventory at my 3PL and prevent sales of products that are out of stock?</Accordion.Header>
                        <Accordion.Body>
                        Rivly runs an inventory sync daily with your integrated 3PL in order to track how many items you have available for sale. In addition, we also run a final fulfillment check before allowing the customer to checkout in order to ensure you have the item in inventory and available for your customer.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Tab>
            <Tab eventKey="Products & Listings" title="Products & Listings" >
                <Accordion defaultActiveKey="4">
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>I am a 3PL or other service provider and would love to offer my services to Rivly sellers. How can I do this?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Does Rivly have its own API that my developers can tie into so we can include Rivly in our software? This way we can offer Rivly to our sellers and vice versa.</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Will Rivly track my accurate fulfillable inventory at my 3PL and prevent sales of products that are out of stock?</Accordion.Header>
                        <Accordion.Body>
                        Rivly runs an inventory sync daily with your integrated 3PL in order to track how many items you have available for sale. In addition, we also run a final fulfillment check before allowing the customer to checkout in order to ensure you have the item in inventory and available for your customer.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Tab>


            </Tabs>
        </div>
    </div>
  )
}

export default HelpPage_2