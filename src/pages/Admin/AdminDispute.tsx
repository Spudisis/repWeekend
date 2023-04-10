import { useEffect, useState } from 'react';
import { InstanceDeals } from '../../http/Agent/Deals.agent';
import { Button, ListGroup } from 'react-bootstrap';

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
          <Button variant="outline-success" onClick={onConfirm}>
            Закрыть в сторону заказчика
          </Button>{' '}
          <Button variant="outline-primary" onClick={onDispute}>
            Закрыть в сторону исполнителя
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export const AdminDispute = () => {
  const [deals, setDeals] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await InstanceDeals.getDisputeDeals();
      setDeals(data);
    }
    fetchData();
  }, []);

  const handleCustomer = async (item: any) => {
    await InstanceDeals.closeDisputeCustomer(item.id);

    setDeals(deals.filter((i) => i.id !== item.id));
  };

  const handlePerformer = async (item: any) => {
    await InstanceDeals.closeDisputePerformer(item.id);

    setDeals(deals.filter((i) => i.id !== item.id));
  };

  return (
    <ListGroup>
      {deals.map((item) => (
        <Deal
          title={item.title}
          amount={item.price}
          currency={item.currency.toUpperCase()}
          description={item.description}
          status={item.status}
          onConfirm={() => handleCustomer(item)}
          onDispute={() => handlePerformer(item)}
        />
      ))}
    </ListGroup>
  );
};
