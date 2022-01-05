//@flow
import React, {useEffect} from 'react';
import useTicketData from "../../hooks/useTicketData";
import useTicketAction from "../../hooks/useTicketAction";
import {DefaultLayout} from "../../../../layout/DefaultLayout";
import _ from 'lodash'
import {Accordion, Col, Nav, Row, Tab} from "react-bootstrap";

export default () => {
    const {FAQs, loading} = useTicketData()
    const {getFaqs} = useTicketAction()
    useEffect(() => {
        getFaqs()
    }, [])

    const categoryFAQs = _.groupBy(FAQs, 'category')
    const categories = Object.keys(categoryFAQs)
    if (!(categories && categories.length > 0)) return null
    return (
        <DefaultLayout>
            <h1 className="pb-2 mt-4 mb-2 border-bottom">
                FAQs
            </h1>
            <Row>
                <Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={categories[0]}>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    {categories
                                        .map(category => (
                                            <Nav.Item key={category}>
                                                <Nav.Link eventKey={category}>{category}</Nav.Link>
                                            </Nav.Item>
                                        ))}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {categories
                                        .map(category => (
                                            <Tab.Pane eventKey={category}>
                                                {/*<h2>{category}</h2>*/}
                                                {/*<hr/>*/}
                                                <Accordion defaultActiveKey="0">
                                                    {categoryFAQs[category].map(faq => (
                                                        <Accordion.Item key={faq.id} eventKey={faq.id}
                                                                        id={'faq_' + faq.id}>
                                                            <Accordion.Header>{faq.question}</Accordion.Header>
                                                            <Accordion.Body>
                                                                {faq.answer}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    ))}
                                                </Accordion>
                                            </Tab.Pane>
                                        ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                </Col>
            </Row>
        </DefaultLayout>
    )
}