import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const OpenDisputeDealListButton = () => {
    return (
        <Link to={'/deal/list/dispute'}>
            <Button variant={'outline-primary'}>
                Открыть арбитражи
            </Button>
        </Link>
    )
}
