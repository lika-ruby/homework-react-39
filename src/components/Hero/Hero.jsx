import { Wrapper, Left, Title, Text, Photo } from "./Hero.js";
import photo from "../../images/hero-photo.webp";
import { Container } from "../Container/Container.jsx";

export const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>PhoneBook</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            voluptatum, distinctio ipsam nesciunt porro iste doloribus
            similique, aliquid, placeat ad eaque. Esse illo eligendi nam magnam
            maiores numquam voluptas vitae dolorum, beatae dolores soluta
            itaque.
          </Text>
        </Left>
        <Photo src={photo} alt="phone booth" />
      </Wrapper>
    </Container>
  );
};
