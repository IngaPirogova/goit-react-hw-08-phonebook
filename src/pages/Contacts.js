import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIsLoading, getError } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Section } from "components/Section/Section";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";

// const styles = {
//   container: {
    
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };



  export const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </Section>
      </div>
     
    </>
    );
  }
  