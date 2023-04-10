import {Route, Routes} from "react-router-dom";
import {OpenDeal} from "./OpenDeal";
import {OpenDealButton} from "./components/OpenDealButton";
import React from "react";
import {PendingDeals} from "./PendingDeals";
import {OpenPendingDealListButton} from "./components/OpenPendingDealListButton";
import {OpenDealListButton} from "./components/OpenDealList";
import {Deals} from "./Deals";
import {OpenDisputeDealListButton} from "./components/OpenDisputeDealsList";
import {DisputeDeals} from "./DisputeDeals";

export default () => {
    return (
        <>
            <OpenDealButton name={'User1'} id={12} />
            <OpenDealButton name={'User2'} id={2} />
            <OpenDealListButton />
            <OpenPendingDealListButton />
            <OpenDisputeDealListButton />
            <Routes>
                <Route path={'open/:id'} element={<OpenDeal />} />
                <Route path={'list'} element={<Deals />} />
                <Route path={'list/pending'} element={<PendingDeals />} />
                <Route path={'list/dispute'} element={<DisputeDeals />} />
            </Routes>
        </>
    );
};
