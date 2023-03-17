import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const CardSkeleton = (height: number = 0) => {
  return (
    <Card>
      <Skeleton height={height + "px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
