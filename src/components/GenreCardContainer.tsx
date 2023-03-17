import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreCardContainer = ({ children }: Props) => {
  return (
    <Box marginY={5} height="70px">
      {children}
    </Box>
  );
};

export default GenreCardContainer;
