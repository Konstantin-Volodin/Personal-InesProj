import { HStack, Text, Spacer, Button } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";

export const Header = () => (
    <HStack w='100%' m='0px' h='8vh'
        px="20px" py='10px' spacing="40px"
        borderBottom='2px' borderColor={'gray.400'}
    >
        <Text fontWeight={'bold'}>Ladera del Mar</Text>
        <Spacer />
        <Button fontWeight={'light'} colorScheme="green"
            variant='ghost' rounded={'none'}>
            HOMEPAGE
        </Button>
        <Button fontWeight={'light'} colorScheme="green"
            variant={'solid'} rounded={'none'}>
            SUPPORT
        </Button>
    </HStack>
)