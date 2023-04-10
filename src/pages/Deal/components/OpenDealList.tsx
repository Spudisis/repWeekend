import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const OpenDealListButton = () => {
    return (
        <Link to={'/deal/list'}>
            <Button variant={'outline-primary'}>
                Открыть текущие сделки
            </Button>
        </Link>
    )
}
