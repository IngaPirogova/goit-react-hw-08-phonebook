import { Helmet } from "react-helmet";
import { RegisterForm } from "components/RegsterForm/RegisterForm";

 const Register = () => {
    return (
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    );
  };
  
  export default Register;