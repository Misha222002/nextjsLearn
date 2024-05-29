import Link from "next/link";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "petya" },
    { id: 2, name: "misha" },
  ]);
  return (
    <div>
      <h1>Список пользователей</h1>
      {users.map((user) => (
        <li>
          <Link key={user.id} href={`/users/${user.id}`} legacyBehavior>
            <a>{user.name}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Users;
