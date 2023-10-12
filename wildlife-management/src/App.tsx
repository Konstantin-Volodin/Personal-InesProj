import { ChakraProvider, theme, } from "@chakra-ui/react"
import { Homepage } from "./pages/homepage"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Homepage />
  </ChakraProvider>
)
