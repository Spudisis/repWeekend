import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import style from './Navbar.module.scss';
import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineBell } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { InstanceTicket } from '../../http/Agent/Ticket.agent';
import { TextFields } from '@mui/icons-material';

const stylesa = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const red = {
  color: 'red',
};

export const Navbar = () => {
  const [state, setState] = React.useState(false);
  const [ticket, setTicket] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [msg, setMsg] = React.useState('');
  const [err, setErr] = React.useState(false);
  const ticketsRead = async () => {
    try {
      const data = await InstanceTicket.getTickets(5, page);
      setTotal(data.total);
      setTicket(data.items);
    } catch {}
  };
  React.useEffect(() => {
    ticketsRead();
  }, [page]);

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page >= total) {
      return;
    }
    setPage(page + 1);
  };
  const SendTicket = async () => {
    try {
      const data = await InstanceTicket.createTicket({
        tag: 'Question',
        content: msg,
      });
      setErr(false);
    } catch {
      setErr(true);
    }
  };
  return (
    <nav className={style.navbar}>
      <div className={style.links}></div>
      <div className={style.linksIcon}>
        <NavLink className={({ isActive }) => (isActive ? `${style.linkIcon} ${style.active}` : style.linkIcon)} to="/cart">
          <HiOutlineShoppingCart />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${style.linkIcon} ${style.active}` : style.linkIcon)} to="/favorites">
          <HiOutlineHeart />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${style.linkIcon} ${style.active}` : style.linkIcon)} to="/profile">
          <HiOutlineUser />
        </NavLink>
        <button className={`${style.linkIcon} ${style.buttonsa} `} onClick={() => setState(true)}>
          <HiOutlineBell />
        </button>
        <Modal
          open={state}
          onClose={() => setState(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={stylesa}>
            <div>
              <Typography>Create Ticket</Typography>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={msg}
                onChange={(e: any) => setMsg(e.target.value)}
              />
              <Button size="large" onClick={() => SendTicket()}>
                Create
              </Button>
              {err && <label>Не удалось добавить</label>}
            </div>
            {/* {ticket.length > 0
              ? ticket.map((elem: any) => (
                  <>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      classes={elem.status === 'new' ? `${style.colorRed} ${style.bold}` : `${style.bold}`}
                    >
                      {elem.tag}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>{elem.content}</Typography>
                  </>
                ))
              : 'Нет тикетов'}
            {ticket.length > 0 && (
              <>
                <Button onClick={() => handleBack()}>back</Button>
                <Button onClick={() => handleNext()}>next</Button>
              </>
            )} */}
          </Box>
        </Modal>
      </div>
    </nav>
  );
};
