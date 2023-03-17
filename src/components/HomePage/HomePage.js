import { useAuth } from 'hooks';
import { HomeAuthNav } from 'components/HomeAuthNav/HomeAuthNav';
import css from './HomePage.module.css';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <section>
        <h1>Welcome to the phonebook</h1>
        <p className={css.text}>please,</p>
        {!isLoggedIn && <HomeAuthNav />}
      </section>
    </>
  );
};
