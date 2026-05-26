import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/auth/selectors.js";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Title,
  FormS,
  Label,
  Input,
  ErrorMes,
  ErrorText,
  Button,
} from "./Register.js";

const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});

    actions.resetForm();
  };
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
      return errors;
    }

    if (!values.password) {
      errors.password = "Required";
      return errors;
    }

    if (values.password.length < 6) {
      errors.password = "Too short";
      return errors;
    }
    if (values.password.length > 16) {
      errors.password = "Too long";
      return errors;
    }
    return errors;
  };

  return (
    <Wrapper>
      <Title>Register</Title>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <FormS>
          <Label>
            Your name
            <Input type="text" name="name" placeholder="Romana" />
          </Label>
          <ErrorMes name="name" component="p" />

          <Label>
            Your email
            <Input type="email" name="email" placeholder="my.email@gmail.com" />
          </Label>
          <ErrorMes name="email" component="p" />

          <Label>
            Your password
            <Input type="password" name="password" placeholder="**********" />
          </Label>
          <ErrorMes name="password" component="p" />
          {error && (
            <ErrorText>Your email or/and password are not suitable</ErrorText>
          )}
          <Button type="submit">Register</Button>
        </FormS>
      </Formik>
    </Wrapper>
  );
};

export default Register;
