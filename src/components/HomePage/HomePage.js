import { useAuth } from "hooks";
import { HomeAuthNav } from "components/HomeAuthNav/HomeAuthNav";


export const HomePage = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <>
      
        <section >
           
          <h1 >Welcome to Phonebook!</h1>          
          {!isLoggedIn && <HomeAuthNav />}

        </section>
      
        
      </>
    );
  };