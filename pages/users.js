import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={'users_page'}>
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
    </MainContainer>
  );
};

export default Users;

export const getStaticProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
};
