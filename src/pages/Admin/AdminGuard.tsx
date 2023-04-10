import React, { FC, ReactNode } from "react";
import {Navigate} from 'react-router-dom';

interface AdminGuardProps {
    allowed: boolean;
    redirectPath: string;
    children: ReactNode;
}

export const AdminGuard: FC<AdminGuardProps> = ({ allowed, redirectPath, children }: any) => {
    return allowed ? (
        <>
            {children}
        </>
    ) : <Navigate to={redirectPath} />

}
