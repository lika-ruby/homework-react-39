import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
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
  ErrorText,
  Button,
} from "./Login.js";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});

    actions.resetForm();
  };

  return (
    <Wrapper>
      <Title>Log In</Title>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <FormS>
          <Label>
            Your email
            <Input type="email" name="email" placeholder="my.email@gmail.com" />
          </Label>

          <Label>
            Your password
            <Input type="password" name="password" placeholder="**********" />
          </Label>
          {error && (
            <ErrorText>Your email or/and password are not suitable</ErrorText>
          )}
          <Button type="submit">Log In</Button>
        </FormS>
      </Formik>
    </Wrapper>
  );
};

export default Login;
