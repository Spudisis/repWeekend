import { Button, Form, ListGroup, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { InstanceDeals } from '../../http/Agent/Deals.agent';
import { observer } from 'mobx-react';

export const DisputeModal = ({ show, setShow, id }: any) => {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleClose = () => {
    setShow(false);

    setTitleValue('');
    setDescriptionValue('');
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    // submit

    setTitleValue('');
    setDescriptionValue('');

    await InstanceDeals.createDispute(id, { title: titleValue, description: descriptionValue });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Открытие арбитража</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              placeholder={'Ввести название'}
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              required
            />
            <Form.Label>Описание</Form.Label>
            <Form.Control
              type="text"
              placeholder={'Ввести описание'}
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Подтвердить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export const Deal = ({ title, amount, currency, description, onConfirm, onDispute, status }: any) => {
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
          <p>
            Сумма: {amount} {currency}
          </p>
        </div>
        <div>
          {status === 'waiting_for_payment' ? (
            <Button variant="outline-success" onClick={onConfirm}>
              Подтвердить
            </Button>
          ) : (
            ''
          )}{' '}
          <Button variant="outline-primary" onClick={onDispute}>
            Открыть спор
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export const Deals = observer(() => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  const [pendingDeals, setPendingDeals] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await InstanceDeals.gerPerformerDeals(12);
      setPendingDeals(
        data.filter(
          (i: any) =>
            i.status !== 'created' && i.status !== 'close' && i.status !== 'deny_performer' && !i.status.startsWith('arb_'),
        ),
      );
    }
    fetchData();
  }, []);

  const handleAcceptClick = async (item: any) => {
    await InstanceDeals.closeDeal(item.id);

    setPendingDeals(pendingDeals.filter((i) => i.id !== item.id));
  };

  const handleDispute = (id: any) => {
    setShow(true);

    setId(id);
  };

  return (
    <ListGroup>
      <DisputeModal show={show} setShow={setShow} id={id} />
      {pendingDeals.map((item) => (
        <Deal
          title={item.title}
          amount={item.price}
          currency={item.currency.toUpperCase()}
          description={item.description}
          status={item.status}
          onConfirm={() => handleAcceptClick(item)}
          onDispute={() => handleDispute(item.id)}
        />
      ))}
    </ListGroup>
  );
});
