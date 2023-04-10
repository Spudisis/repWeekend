import { Button, Form, ListGroup, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { InstanceDeals } from '../../http/Agent/Deals.agent';
import { observer } from 'mobx-react';

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
          )}
        </div>
      </div>
    </ListGroup.Item>
  );
};

export const DisputeDeals = observer(() => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  const [pendingDeals, setPendingDeals] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await InstanceDeals.gerPerformerDeals(12);
      setPendingDeals(data.filter((i: any) => i.status.startsWith('arb_')));
    }
    fetchData();
  }, []);

  const handleAcceptClick = async (item: any) => {
    await InstanceDeals.closeDeal(item.id);

    setPendingDeals(pendingDeals.filter((i) => i.id !== item.id));
  };

  return (
    <ListGroup>
      {pendingDeals.map((item) => (
        <Deal
          title={item.title}
          amount={item.price}
          currency={item.currency.toUpperCase()}
          description={item.description}
          status={item.status}
          onConfirm={() => handleAcceptClick(item)}
        //   onDispute={() => handleDispute(item.id)}
        />
      ))}
    </ListGroup>
  );
});
