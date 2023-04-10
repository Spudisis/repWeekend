import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import { InstancePayments } from '../../http/Agent/Payments.agent';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/stores';

export const Withdraw = observer(() => {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [addressValue, setAddressValue] = useState('');

  const [error, setError] = useState(false);

  const { auth } = useStores();

  console.log(auth);

  auth.userInfo = {
    id: 12,
  };

  const handleSelect = (event: any) => {
    setSelectedCrypto(event.target.value);
  } 

  const handleWithdraw = async () => {
    try {
      const gateways = await InstancePayments.paymentGatewayList();

      const gatewayId = gateways.find((i) => i.currency.includes(selectedCrypto))?.id;

      // if (!gatewayId)
      //     return setError(true);

      // const data = await InstancePayments.paymentDeposit({
      //     user_id: auth.userInfo.id,
      //     gateway_id: gatewayId,
      //     amount: parseFloat(amountValue.replace(',', '.')),
      //     currency: selectedCrypto,
      //     data: {
      //         address: addressValue,
      //     },
      // });

      setError(false);

      setAddressValue('1Lt8eu1mpLYfqMN9FBg597YfNV4976hsNH');
      // setAddressValue(data.gateway_data.address);
    } catch {
      setError(true);
    }
  };

  const cryptoOptions = [
    { symbol: 'btc', name: 'Bitcoin' },
    { symbol: 'usdt', name: 'Tether TRC-20' },
    { symbol: 'trc', name: 'Tron' },
  ];

  return (
    <div>
      {error && <Alert variant={'danger'}>An error occurred</Alert>}
      {!addressValue && (
        <Form>
          <Form.Group controlId="formCrypto">
            <Form.Label>Вывод средств</Form.Label>
            <Form.Control
              type="number"
              step="0.00001"
              placeholder="0.00001"
              value={amountValue}
              onChange={(event) => setAmountValue(event.target.value)}
            />
            <Form.Control as="select" value={selectedCrypto} onChange={handleSelect}>
              <option value="">Выберите криптовалюту...</option>
              {cryptoOptions.map((option) => (
                <option value={option.symbol} key={option.symbol}>
                  {option.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={handleWithdraw} disabled={!selectedCrypto}>
            Вывести
          </Button>
        </Form>
      )}
      {addressValue && (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>Вывод успешно зарегестрирован</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Адрес вывода:</Card.Subtitle>
              <Card.Text>{addressValue}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Сумма вывода:</Card.Subtitle>
              <Card.Text>
                {amountValue} {cryptoOptions.find((i) => i.symbol === selectedCrypto)!.symbol.toUpperCase()}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
});
