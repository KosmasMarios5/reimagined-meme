import React, {useState} from "react";
import {Button, Col, Form, Modal, Row,} from "react-bootstrap";
// import { openNewTicket } from "./addTicketAction";
import {shortText} from "../../utils/validation";

import "./add-ticket-form.style.css";

const initialFrmDt = {
    subject: "",
    issueDate: "",
    message: "",
};
const initialFrmError = {
    subject: false,
    issueDate: false,
    message: false,
};

export const AddTicketForm = () => {
    // const dispatch = useDispatch();

    const name = 'marios'
    // const {
    //   user: { name },
    // } = useSelector((state) => state.user);

    // const { isLoading, error, successMsg } = useSelector(
    //   (state) => state.openTicket
    // );

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

    // useEffect(() => {
    //   return () => {
    //     successMsg && dispatch(restSuccessMSg());
    //   };
    // }, [dispatch, frmData, frmDataErro]);

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFrmData({
            ...frmData,
            [name]: value,
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFrmDataErro(initialFrmError);

        const isSubjectValid = await shortText(frmData.subject);

        setFrmDataErro({
            ...initialFrmError,
            subject: !isSubjectValid,
        });

        // dispatch(openNewTicket({ ...frmData, sender: name }));
    };

    return (
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Modal
                show
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add New Ticket
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*{error && <Alert variant="danger">{error}</Alert>}*/}
                    {/*{successMsg && <Alert variant="primary">{successMsg}</Alert>}*/}
                    {/*{isLoading && <Spinner variant="primary" animation="border" />}*/}
                    <Form.Group as={Row} className={'mb-2'}>
                        <Form.Label column sm={3}>
                            Subject
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="subject"
                                value={frmData.subject}
                                // minLength="3"
                                maxLength="100"
                                onChange={handleOnChange}
                                placeholder="Subject"
                                required
                            />
                            <Form.Text className="text-danger">
                                {frmDataErro.subject && "SUbject is required!"}
                            </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className={'mb-2'}>
                        <Form.Label column sm={3}>
                            Issue Found
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                type="date"
                                name="issueDate"
                                value={frmData.issueDate}
                                onChange={handleOnChange}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Describe</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            rows="5"
                            value={frmData.message}
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" block>
                        Open Ticket
                    </Button>
                </Modal.Footer>
            </Modal>
        </Form>
    )
}

// AddTicketForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
//   frmDataErro: PropTypes.object.isRequired,
// };
