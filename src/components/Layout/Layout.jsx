import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer.jsx";
import { useSelector } from "react-redux";
import {
  selectUser,
  selectToken,
  selectIsLoggedIn,
} from "../../redux/auth/selectors.js";
import { logOut } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { Container } from "../Container/Container.jsx";
import {
  Site,
  Header,
  Wrapper,
  Nav,
  List,
  Item,
  LinkS,
  Right,
  UserText,
  Button,
} from "./Layout.js";
import { useNavigate } from "react-router-dom";

export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(logOut());
  };

  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Site>
      <Header>
        <Container>
          <Wrapper>
            <Nav>
              <List>
                <Item>
                  <LinkS to="/">Home</LinkS>
                </Item>
                {!isLoggedIn && (
                  <>
                    <Item>
                      <LinkS to="/register">Sign in</LinkS>
                    </Item>
                    <Item>
                      <LinkS to="/login">Log in</LinkS>
                    </Item>
                  </>
                )}
                {isLoggedIn && (
                  <>
                    <Item>
                      <LinkS to="/profile">Profile</LinkS>
                    </Item>
                    <Item>
                      <LinkS to="/contacts">Contacts</LinkS>
                    </Item>
                  </>
                )}
              </List>
            </Nav>

            {isLoggedIn && (
              <Right>
                <UserText>Hi, {user.name}!</UserText>
                <Button onClick={handleSubmit}>Log out</Button>
              </Right>
            )}
          </Wrapper>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </Site>
  );
};
