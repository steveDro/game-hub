import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreSkeleton;
