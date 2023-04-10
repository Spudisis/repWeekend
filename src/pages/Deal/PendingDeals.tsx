import {Button, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {InstanceDeals} from "../api/http/Agent/Deals.agent";
import {observer} from "mobx-react";
import {useStores} from "../hooks/stores";

export const PendingDeals = () => {
    const { auth } = useStores();

    const [pendingDeals, setPendingDeals] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await InstanceDeals.getCustomerDeals(121);

            setPendingDeals(data.filter((i) => i.status === 'created'));
        }
        fetchData();
    }, []);

    const handleAcceptClick = async (item) => {
        await InstanceDeals.confirmDeal(item.id);

        setPendingDeals(pendingDeals.filter((i) => i.id !== item.id));
    };

    const handleDeclineClick = async (item) => {
        await InstanceDeals.confirmDeny(item.id);

        setPendingDeals(pendingDeals.filter((i) => i.id !== item.id));    };

    return (
        <ListGroup>
            {pendingDeals.map((item) => (
                <ListGroup.Item key={item.id}>
                    {item.title}
                    <div className="float-end">
                        <Button variant="success" onClick={() => handleAcceptClick(item)}>
                            Accept
                        </Button>
                        {' '}
                        <Button variant="danger" onClick={() => handleDeclineClick(item)}>
                            Decline
                        </Button>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
};
