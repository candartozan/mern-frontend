import React, { useEffect, useState } from "react";

import UserList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
    const { clearError, error, isLoading, sendRequest } = useHttpClient();
    const [loadedUsers, setLoadedUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/users`
                );
                setLoadedUsers(responseData.users);
            } catch (err) {}
        };
        fetchUsers();
    }, [sendRequest]);

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
        </>
    );
};

export default Users;
