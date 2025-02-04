"use client";

import { Box, Grid, Heading, Text, Button, Image, VStack, Flex } from "@chakra-ui/react";
import { useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Dream Waves",
    artist: "John Doe",
    cover: "/images/image.jpg",
    audio: "/audio/musics.mp3",
  },
  {
    id: 2,
    title: "Lost Frequencies",
    artist: "Anna Smith",
    cover: "/images/image.jpg",
    audio: "/audio/musics.mp3",
  },
  {
    id: 3,
    title: "Echoes of Silence",
    artist: "DJ Night",
    cover: "/images/image.jpg",
    audio: "/audio/musics.mp3",
  },
];

function RessentWork() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [audioInstance, setAudioInstance] = useState(null);

  const playAudio = (audioSrc, id) => {
    if (audioInstance) {
      audioInstance.pause(); // Stop current audio if it's playing
    }
    const newAudio = new Audio(audioSrc);
    setAudioInstance(newAudio);
    newAudio.play();
    setCurrentAudio(id);
  };

  const pauseAudio = () => {
    if (audioInstance) {
      audioInstance.pause();
    }
  };

  const stopAudio = () => {
    if (audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0; // Reset the audio to the start
      setCurrentAudio(null);
    }
  };

  return (
    <Box py={12} px={6} maxW="1200px" mx="auto">
      <Heading as="h2" size="xl" fontWeight="bold" color="maroon" mb={6} textAlign="center">
        Recent Work
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {projects.map((project) => (
          <Box
            key={project.id}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
            transition="0.3s ease"
          >
            <Image src={project.cover} alt={project.title} w="100%" h="200px" objectFit="cover" />
            <VStack p={4} align="start" spacing={2}>
              <Heading as="h3" size="md" fontWeight="bold" color="gray.800">
                {project.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                {project.artist}
              </Text>
              <Button
                size="sm"
                colorScheme="maroon"
                variant="outline"
                onClick={() => playAudio(project.audio, project.id)}
              >
                Play Sample
              </Button>

              {/* Contrôles de lecture (Pause, Stop, Play) sur la même ligne */}
              {currentAudio === project.id && (
                <Flex mt={2} gap={4}>
                  <Button
                    size="sm"
                    colorScheme="yellow"
                    variant="outline"
                    onClick={pauseAudio}
                  >
                    Pause
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    variant="outline"
                    onClick={stopAudio}
                  >
                    Stop
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="green"
                    variant="outline"
                    onClick={() => playAudio(project.audio)} // Re-Play functionality
                  >
                    Re-Play
                  </Button>
                </Flex>
              )}
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default RessentWork;
