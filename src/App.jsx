import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import NavbarComponent from "./components/Navbar.component";
import HomeComponent from "./components/Home.component";
import ServicesComponent from "./components/Services.component";
import PackagaesComponent from "./components/Packagaes.component";
import GalleryComponent from "./components/Gallery.component";
import ContactComponent from "./components/Contact.component";
import FooterComponent from "./components/Footer.component";

const App = () => {
  return (
    <VStack maxWidth="full">
      <Container maxW="full" minH="100vh" bg="gray.100" color="#262626" p="0">
        <NavbarComponent />
        <HomeComponent />
      </Container>
      <Container
        maxW="full"
        minH="100vh"
        bg="green.400"
        color="#262626"
        p="0"
        id="services"
      >
        <ServicesComponent />
      </Container>
      <Container
        maxW="full"
        minH="100vh"
        bg="white.400"
        color="#262626"
        p="0"
        id="packages"
      >
        <PackagaesComponent />
      </Container>
      <Container
        maxW="full"
        minH="100vh"
        bg="green.400"
        color="#262626"
        p="0"
        id="gallery"
      >
        <GalleryComponent />
      </Container>
      <Container
        maxW="full"
        minH="100vh"
        bg="white.400"
        color="#262626"
        p="0"
        id="contact"
      >
        <ContactComponent />
        <FooterComponent />
      </Container>
    </VStack>
  );
};

export default App;
