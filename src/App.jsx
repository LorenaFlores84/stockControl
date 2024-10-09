import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Flex direction="column" height="100vh">
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg" px={4}>
        <Navbar.Brand href="#">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Características</Nav.Link>
            <Nav.Link href="#logout">Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Main Content */}
      <Flex flex="1" direction="row">
        {/* Sidebar */}
        <Box bg="gray.100" width="250px" p={4}>
          <Text fontSize="xl" mb={4}>Menú</Text>
          <Button variant="outline" width="100%" mb={2}>Opción 1</Button>
          <Button variant="outline" width="100%" mb={2}>Opción 2</Button>
          <Button variant="outline" width="100%" mb={2}>Opción 3</Button>
        </Box>

        {/* Main Section */}
        <Box flex="1" bg="white" p={8}>
          <Text fontSize="2xl" mb={4}>Bienvenido a la Aplicación</Text>
          <Text fontSize="lg">
            Aquí puedes gestionar tus actividades, ver reportes, y mucho más. Explora las opciones del menú para comenzar.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
