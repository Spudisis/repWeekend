import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const OpenDealButton = ({ name, id }: any) => {
  return (
    <Link to={'/deal/open/' + id}>
      <Button variant={'outline-primary'}>Open deal with {name}</Button>
    </Link>
  );
};
