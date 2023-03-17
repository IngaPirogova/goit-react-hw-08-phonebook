import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactList } from "components/ContactList/ContactList";

  export const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <ContactItem />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </>
    );
  }
  