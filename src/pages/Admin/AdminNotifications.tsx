import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { InstanceAdminNotifications } from '../../http/Agent/AdminNotification.agent';

export const AdminNotifications = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Nav className="flex-column" style={{ width: '200px', height: '100vh' }}>
        <Nav.Item>
          <Nav.Link as={Link} to={'all'}>
            Уведомить всех пользователей
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={''}>
            Уведомить пользователей на выбор
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path={'all'} element={<AdminNotificationsAll />} />
          <Route path={''} element={<AdminNotificationsForUser />} />
        </Routes>
      </div>
    </div>
  );
};

export const AdminNotificationsAll = () => {
  const [nameValue, setNameValue] = useState('');
  const [senderValue, setSenderValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    InstanceAdminNotifications.createNotificationAll({
      name: nameValue,
      sender: senderValue,
      whom: 'alerts to everyone',
      text: textValue,
    });

    setSenderValue('');
    setTextValue('');
    setNameValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Введите название рассылки"
        value={nameValue}
        onChange={(event) => setNameValue(event.target.value)}
      />
      <FormControl
        type="text"
        placeholder="Введите информацию об отправителе"
        value={senderValue}
        onChange={(event) => setSenderValue(event.target.value)}
      />
      <FormControl
        type="text"
        placeholder="Введите текст"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <Button variant="primary" type="submit">
        Разослать уведомление всем пользователям
      </Button>
    </Form>
  );
};

export const AdminNotificationsForUser = () => {
  const [userValue, setUserValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [senderValue, setSenderValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    InstanceAdminNotifications.createNotificationForUser({
      user_ids: [+userValue],
      name: nameValue,
      sender: senderValue,
      whom: 'alerts to everyone',
      text: textValue,
    });

    setSenderValue('');
    setTextValue('');
    setNameValue('');
    setUserValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Введите название рассылки"
        value={nameValue}
        onChange={(event) => setNameValue(event.target.value)}
      />
      <FormControl
        type="text"
        placeholder="Введите информацию об отправителе"
        value={senderValue}
        onChange={(event) => setSenderValue(event.target.value)}
      />
      <FormControl
        type="text"
        placeholder="Введите текст"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <FormControl
        type="text"
        placeholder="Введите ID пользователя"
        value={nameValue}
        onChange={(event) => setUserValue(event.target.value)}
      />
      <Button variant="primary" type="submit">
        Отправить уведомление пользователю
      </Button>
    </Form>
  );
};
