import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>Пользователь с id {query.id}</h1>
        <div>Имя Пользователя - {user.name}</div>
      </div>
    </MainContainer>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return { props: { user } };
};
