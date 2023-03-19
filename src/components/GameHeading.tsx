import { Heading } from "@chakra-ui/react";
import { Game, Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

interface Props {
  platform: Platform | null;
  genre: Genre | null;
}

const GameHeading = ({ platform, genre }: Props) => {
  console.log(platform?.name);
  const heading = `${platform?.name || ""} ${genre?.name || " "} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
