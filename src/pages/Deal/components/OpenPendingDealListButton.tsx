import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const OpenPendingDealListButton = () => {
    return (
        <Link to={'/deal/list/pending'}>
            <Button variant={'outline-primary'}>
                Открыть предложенные сделки
            </Button>
        </Link>
    )
}
