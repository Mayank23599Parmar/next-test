import GlobalPopup from "@/components/global/GlobalPopup";
import RemoveUser from "@/components/RemoveUser";
import UpdateForm from "@/components/UpdateForm";
import User from "@/components/User";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const AllUsers = ({ users }) => {
    const [updateInput, setUpdateInput] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });
    const [usersData, setUsersData] = useState([])
    const [removePopupStatus, setRemovePopupStatus] = useState(false);
    const [updatePopupStatus, setUpdatePopupStatus] = useState(false);
    const [userID, setUserID] = useState(null);
    const fechData = async () => {
        const data = await fetch(`http://localhost:3000/api/users/get/all`, {
            method: "GET"
        });
        const res = await data.json()
        setUsersData(res)
    }
    // For Delete User
    const removePopupHandler = () => {
        setRemovePopupStatus(!removePopupStatus);
    };
    const removeUserHandler = () => {
        console.log("Delete this user: ", userID);
        deleteUser(userID)
        setRemovePopupStatus(false);
    };

    // For Update User
    const updatePopupHandler = () => {
        setUpdatePopupStatus(!updatePopupStatus);
    };
    useEffect(() => {
        setUsersData(users)
    }, [])
    const deleteUser = async (id) => {
        const data = await fetch(`http://localhost:3000/api/users/delete/${id}`, {
            method: "DELETE"
        });
        const res = await data.json()
        if (res) {
            fechData()
        }
    }
    if (usersData.length == 0) {
        return null
    }
    return (
        <>
            <Head>
                <title>Users</title>
                <meta name="description" content="All Registered Users" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main ">
                <div className="rounded-t-xl max-lg:overflow-x-auto scrollbar-thin scrollbar-thumb-success scrollbar-track-white">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-4 border-b-2 border-success bg-success text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Sno.
                                </th>
                                <th className="px-5 py-4 border-b-2 border-success bg-success text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Fullname
                                </th>
                                <th className="px-5 py-4 border-b-2 border-success bg-success text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-5 py-4 border-b-2 border-success bg-success text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Phone
                                </th>
                                <th className="px-5 py-4 border-b-2 border-success bg-success text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Address
                                </th>
                                <th className="px-5 py-4 border-b-2 border-success bg-success text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user, index) => {
                                return (
                                    <User
                                        key={index}
                                        user={user}
                                        setUserID={setUserID}
                                        removePopupHandler={removePopupHandler}
                                        updatePopupHandler={updatePopupHandler}
                                        setUpdateInput={setUpdateInput}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </main>

            {removePopupStatus && (
                <GlobalPopup closePopup={removePopupHandler}>
                    <RemoveUser
                        closePopup={removePopupHandler}
                        removeUserHandler={removeUserHandler}
                    />
                </GlobalPopup>
            )}

            {updatePopupStatus && (
                <GlobalPopup closePopup={updatePopupHandler}>
                    <UpdateForm
                        closePopup={updatePopupHandler}
                        updateInput={updateInput}
                        userID={userID}
                        fechData={fechData}
                        
                    />
                </GlobalPopup>
            )}
        </>
    );
};
export async function getServerSideProps() {
    const data = await fetch(`http://localhost:3000/api/users/get/all`, {
        method: "GET"
    });
    const users = await data.json()
    return {
        props: { users }
    }
}
export default AllUsers;
