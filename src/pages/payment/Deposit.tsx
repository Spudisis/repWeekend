import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import { InstancePayments } from '../../http/Agent/Payments.agent';
import { observer } from 'mobx-react';
import { StoreAuthStatus } from '../../app/Store/Auth';

export const Deposit = observer(() => {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [error, setError] = useState(false);
  const { userInfo } = StoreAuthStatus;

  const handleSelect = (event: any) => {
    setSelectedCrypto(event.target.value);
  };

  const handleDeposit = async () => {
    try {
      const gateways = await InstancePayments.paymentGatewayList();

      const gatewayId = gateways.find((i) => i.currency.includes(selectedCrypto))?.id;

      // if (!gatewayId) return setError(true);

      // const data = await InstancePayments.paymentDeposit({
      //   gateway_id: gatewayId,
      //   amount: parseFloat(amountValue.replace(',', '.')),
      //   user_id: userInfo.id,
      //   currency: selectedCrypto,
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
            <Form.Label>Ввод средств</Form.Label>
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
          <Button variant="primary" onClick={handleDeposit} disabled={!selectedCrypto}>
            Пополнить
          </Button>
        </Form>
      )}
      {addressValue && (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>{cryptoOptions.find((i) => i.symbol === selectedCrypto)!.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Адрес пополнения:</Card.Subtitle>
              <Card.Text>{addressValue}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Сумма пополнения:</Card.Subtitle>
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
