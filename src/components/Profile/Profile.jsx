import { Container } from "../Container/Container.jsx";
import { Wrapper, Title, Text, Data } from "./Profile.js";
import { selectUser } from "../../redux/auth/selectors.js";
import { useSelector } from "react-redux";

export const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Wrapper>
        <Title>Your profile</Title>
        <Text>
          Name:
          <Data> {user.name}</Data>
        </Text>
        <Text>
          Email:
          <Data> {user.email}</Data>
        </Text>
      </Wrapper>
    </Container>
  );
};
