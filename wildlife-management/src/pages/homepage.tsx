import { Header } from "../components/header";

import { VStack, Box, Text, Heading, HStack, Grid, GridItem } from "@chakra-ui/react";

export const Homepage = () => (
    <VStack spacing='0'>
        <Header />

        {/* DESCRIPTION */}
        <Box alignContent='center'
            w='100%' minH='92vh' bg='green.200'>
            <VStack alignItems={'baseline'} p='150px'>
                <Heading fontSize={'6xl'} letterSpacing='widest' fontWeight='semibold' w={["100%", "500px", "700px"]}>
                    WILDLIFE<br />MONITORING
                </Heading>

                <VStack alignItems={'baseline'} spacing='15px' w={["100%", "500px", "700px"]}>
                    <Text letterSpacing='wider' fontWeight='light'>
                        Ladera del Mar is committed to maintaining monkey corridors.
                    </Text>
                    <Text letterSpacing='wider' fontWeight='light'>
                        Protecting and maintaining connectivity we allow the movement of wildlife throughout the project.
                    </Text>

                    <Text letterSpacing='wider' fontWeight='light'>
                        Through connectivity with wildlife canopy's and biological monitoring, we protect the wildlife that is mobilized by the development project, trying to provide a safe opportunity for passage and refuge for its natural dynamics.
                    </Text>

                    <Text letterSpacing='wider' fontWeight='light'>
                        Our objective is to seek a coexistence between the people who inhabit the project and the wildlife present. Avoiding negative interactions and adding suitable spaces for everyone.

                    </Text>
                    <Text letterSpacing='wider' fontWeight='light'>
                        Living in balance!

                    </Text>
                </VStack>
            </VStack>
        </Box >


        {/* IMPACT */}
        <Box alignContent='center'
            w='100%' minH='100vh' bg='green.400'>
            <VStack alignItems={'baseline'} p='150px' w='100%'>
                <Heading fontSize={'6xl'} letterSpacing='widest' fontWeight='semibold' w={["100%", "500px", "700px"]}>
                    OUR IMPACT
                </Heading>

                <HStack alignItems={'baseline'} spacing='15px' px='10px' py='20px' w='100%'>
                    <Text w='500px' h='500px' bg='red'>Image</Text>
                    <Grid gap='20px'>
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                        <GridItem bg='red.200'><Text> Test</Text></GridItem >
                    </Grid>
                </HStack>
            </VStack>
        </Box >

    </VStack >
)