import { Button, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { InstanceDeals } from '../../http/Agent/Deals.agent';
import { observer } from 'mobx-react';
import { StoreAuthStatus } from '../../app/Store/Auth';

export const PendingDeals = observer(() => {
  const [pendingDeals, setPendingDeals] = useState<any>([]);
  const { userInfo } = StoreAuthStatus;

  useEffect(() => {
    async function fetchData() {
      //С динамич айди не работает !!!!!!!!!!!!!!!!!!!!!!!!!!!
      const data = await InstanceDeals.getCustomerDeals(userInfo?.id);

      setPendingDeals(data.filter((i: any) => i.status === 'created'));
    }
    fetchData();
  }, [userInfo?.id]);

  const handleAcceptClick = async (item: any) => {
    await InstanceDeals.confirmDeal(item.id);

    setPendingDeals(pendingDeals.filter((i: any) => i.id !== item.id));
  };
  const handleDeclineClick = async (item: any) => {
    await InstanceDeals.confirmDeny(item.id);
    setPendingDeals(pendingDeals.filter((i: { id: any }) => i.id !== item.id));
  };

  return (
    <ListGroup>
      {pendingDeals.map((item: any) => (
        <ListGroup.Item key={item.id}>
          {item.title}
          <div className="float-end">
            <Button variant="success" onClick={() => handleAcceptClick(item)}>
              Accept
            </Button>{' '}
            <Button variant="danger" onClick={() => handleDeclineClick(item)}>
              Decline
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
