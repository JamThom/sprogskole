import { ChakraProvider } from "@chakra-ui/react";
import config from "./style-config";
import { PropsWithChildren } from "react";

const DesignSystemProvider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider value={config}>
        {children}
    </ChakraProvider>
  );
};

export default DesignSystemProvider;