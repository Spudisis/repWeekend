import { useParams } from 'react-router-dom';
import { InstanceDeals } from '../../http/Agent/Deals.agent';
import React, { useEffect, useState } from 'react';
import { InstanceUser } from '../../http/Agent/User.agent';
import { InstanceUsers } from '../../http/Agent/Users.agent';
import { Button, Form } from 'react-bootstrap';

export const OpenDeal = () => {
  const { id } = useParams();

  const [userBalance, setUserBalance] = useState<{ currency: string; balance: number }[]>([]);

  useEffect(() => {
    async function fetchBalance() {
      const data: any = await InstanceUsers.getUserBalance(+id!);

      setUserBalance(data as any);
      setSelected(data[0].currency);
    }

    fetchBalance();
  }, []);

  const [amount, setAmount] = useState<any>(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [selected, setSelected] = useState('');

  const handleSelectChange = (event: any) => {
    setSelected(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      console.log(selected);

      await InstanceDeals.createDeal({
        title,
        price: amount,
        currency: selected.toLowerCase(),
        description,
        customer_id: 121,
        performer_id: id,
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <h1>
        {id} {userBalance.map((i) => i.balance + ' ' + i.currency)}
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formAmount">
          <Form.Label>Название сделки:</Form.Label>
          <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
          <Form.Label>Описание сделки:</Form.Label>
          <Form.Control type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
          <Form.Label>Сумма сделки:</Form.Label>
          <Form.Control type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Выберите криптовалюту сделки:</Form.Label>
          <Form.Control as="select" value={selected} onChange={handleSelectChange}>
            {userBalance.map((userBalance) => (
              <option key={userBalance.currency} value={userBalance.balance + ' ' + userBalance.currency.toUpperCase()}>
                {userBalance.balance + ' ' + userBalance.currency.toUpperCase()}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Открыть сделку
        </Button>
      </Form>
    </div>
  );
};
