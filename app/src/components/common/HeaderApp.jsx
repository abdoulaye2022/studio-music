"use client";

import {
  Box,
  Flex,
  Link,
  Heading,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function HeaderApp() {
  // Vérifie si on est sur mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Gestion du Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="maroon" width="100%" p={5} color="white">
        <Flex justify="space-between" align="center" px={6}>
          {/* Nom du restaurant */}
          <Heading as="h1" size="lg" fontWeight="bold" letterSpacing="wide">
            Studio Music
          </Heading>

          {isMobile ? (
            <>
              <IconButton
                icon={<HamburgerIcon boxSize={6} />}
                variant="ghost"
                color="white"
                aria-label="Open menu"
                _hover={{ bg: "whiteAlpha.300" }}
                onClick={onOpen}
              />
              {/* Drawer pour mobile */}
              <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
                <DrawerOverlay />
                <DrawerContent bg="maroon" color="white">
                  <DrawerCloseButton />
                  <DrawerHeader fontSize="2xl" fontWeight="bold">
                    Menu
                  </DrawerHeader>
                  <DrawerBody>
                    <VStack spacing={6} align="start" fontSize="lg">
                      <Link href="/" _hover={{ color: "gray.200" }} onClick={onClose}>
                        Home
                      </Link>
                      <Link href="/order" _hover={{ color: "gray.200" }} onClick={onClose}>
                        Order
                      </Link>
                      <Link href="/about" _hover={{ color: "gray.200" }} onClick={onClose}>
                        About us
                      </Link>
                      <Link href="/contact" _hover={{ color: "gray.200" }} onClick={onClose}>
                        Contact us
                      </Link>
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          ) : (
            <Flex gap={6} fontSize="lg" fontWeight="bold">
              <Link href="/" _hover={{ color: "gray.200" }}>
                Home
              </Link>
              <Link href="/service" _hover={{ color: "gray.200" }}>
                Services
              </Link>
              <Link href="/about" _hover={{ color: "gray.200" }}>
                About us
              </Link>
              <Link href="/contact" _hover={{ color: "gray.200" }}>
                Contact us
              </Link>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default HeaderApp;
