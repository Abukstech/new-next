import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Preview,
  Link,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl"> Hello {name}</Text>
            <Link href="www.yipadaonrender.com">www.yipadaonrender.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
