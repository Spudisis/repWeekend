import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { InstanceAdminNotifications } from '../../http/Agent/AdminNotification.agent';
import s from './Admin.module.scss';
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
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState('');
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (nameValue && senderValue && textValue)
      try {
        setLoader(true);
        await InstanceAdminNotifications.createNotificationAll({
          name: nameValue,
          sender: senderValue,
          whom: 'alerts to everyone',
          text: textValue,
        });

        setSenderValue('');
        setTextValue('');
        setNameValue('');
      } catch (error: any) {
        setErr(error.data.detail || 'Непредвиденная ошибка');
      } finally {
        setLoader(false);
      }
    else setErr('Заполните все поля');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        className={s.mt}
        type="text"
        placeholder="Введите название рассылки"
        value={nameValue}
        onChange={(event) => setNameValue(event.target.value)}
      />
      <FormControl
        className={s.mt}
        type="text"
        placeholder="Введите информацию об отправителе"
        value={senderValue}
        onChange={(event) => setSenderValue(event.target.value)}
      />
      <FormControl
        className={s.mt}
        type="text"
        placeholder="Введите текст"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <Button variant="primary" type="submit" className={s.mt} disabled={loader}>
        Разослать уведомление всем пользователям
      </Button>
      <div>{err && err}</div>
    </Form>
  );
};

export const AdminNotificationsForUser = () => {
  const [userValue, setUserValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [senderValue, setSenderValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (userValue && nameValue && senderValue && textValue)
      try {
        setLoader(true);
        const ids = userValue
          .trim()
          .split(',')
          .map((elem) => +elem);
      
        await InstanceAdminNotifications.createNotificationForUser({
          user_ids: ids,
          name: nameValue,
          sender: senderValue,
          whom: 'alerts to everyone',
          text: textValue,
        });

        setSenderValue('');
        setTextValue('');
        setNameValue('');
        setUserValue('');
        setErr('');
      } catch (error: any) {
        setErr(error.data.detail || 'Непредвиденная ошибка');
      } finally {
        setLoader(false);
      }
    else {
      setErr('заполните все поля');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        className={s.mt}
        type="text"
        placeholder="Введите название рассылки"
        value={nameValue}
        onChange={(event) => setNameValue(event.target.value)}
      />
      <FormControl
        className={s.mt}
        type="text"
        placeholder="Введите информацию об отправителе"
        value={senderValue}
        onChange={(event) => setSenderValue(event.target.value)}
      />
      <FormControl
        className={s.mt}
        type="text"
        placeholder="Введите текст"
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      />
      <FormControl
        className={s.mt}
        type="text"
        placeholder="Введите ID пользователя"
        value={userValue}
        onChange={(event) => setUserValue(event.target.value)}
      />
      <Button variant="primary" type="submit" className={s.mt} disabled={loader}>
        Отправить уведомление пользователю
      </Button>
      <div>{err && err}</div>
    </Form>
  );
};
