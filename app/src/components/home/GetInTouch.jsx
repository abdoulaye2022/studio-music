"use client";

import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack, HStack, Icon, useToast, Text, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function GetInTouch() {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dès que possible.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box py={12} px={6} display="flex" flexDirection={{ base: "column", lg: "row" }} justifyContent="space-between" alignItems="center">
      {/* Image à gauche */}
      <Box flex="1" mb={{ base: 6, lg: 0 }}>
        <Image src="/images/studio2.jpg" alt="Contact Image" borderRadius="lg" boxSize="100%" objectFit="cover" />
      </Box>

      {/* Formulaire et infos à droite */}
      <Box flex="1" ml={{ lg: 8 }} bg="white" p={6} borderRadius="lg" boxShadow="md">
        <Heading as="h2" size="xl" fontWeight="bold" color="maroon" textAlign="center" mb={6}>
          Get In Touch
        </Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nom</FormLabel>
              <Input placeholder="Votre nom" focusBorderColor="maroon" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Votre email" focusBorderColor="maroon" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Votre message..." focusBorderColor="maroon" />
            </FormControl>

            <Button type="submit" colorScheme="maroon" width="full" _hover={{ bg: "maroon.700" }}>
              Envoyer
            </Button>
          </VStack>
        </Box>

        {/* Heures d'ouverture */}
        <Box mt={6}>
          <Text fontSize="lg" fontWeight="bold" color="maroon" textAlign="center">Heures d'ouverture :</Text>
          <Text fontSize="md" textAlign="center" color="gray.600">Lun - Ven: 9h00 - 18h00</Text>
          <Text fontSize="md" textAlign="center" color="gray.600">Sam - Dim: Fermé</Text>
        </Box>

        {/* Réseaux sociaux */}
        <HStack spacing={6} justify="center" mt={8}>
          <Icon as={FaFacebook} boxSize={6} color="maroon" _hover={{ color: "maroon.700", cursor: "pointer" }} />
          <Icon as={FaInstagram} boxSize={6} color="maroon" _hover={{ color: "maroon.700", cursor: "pointer" }} />
          <Icon as={FaTwitter} boxSize={6} color="maroon" _hover={{ color: "maroon.700", cursor: "pointer" }} />
          <Icon as={FaEnvelope} boxSize={6} color="maroon" _hover={{ color: "maroon.700", cursor: "pointer" }} />
        </HStack>
      </Box>
    </Box>
  );
}

export default GetInTouch;
