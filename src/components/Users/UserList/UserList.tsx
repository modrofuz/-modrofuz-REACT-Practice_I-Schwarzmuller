import {UserModelI} from "../../../models/user.model";
import React from "react";
import {Card} from "../../UI/Card/Card";
import styles from './UserList.module.css'

export function UserList(props: { users: UserModelI[] }) {
    function mapUsers() {
        let users: any[] = [];
        props.users.map((mapped: UserModelI) => {
            const user = <li key={mapped.id || mapped.username}>{mapped.username} ({mapped.age}) years old</li>;
            return users.push(user);
        });
        return users;
    }


    return (
        <Card cssClasses={styles.users}>
        <ul>{mapUsers()}</ul>
        </Card>
    )
}