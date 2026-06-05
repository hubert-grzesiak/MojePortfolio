import * as React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/components';

interface ContactTemplateProps {
  message: string;
  email: string;
  name?: string; 
}

export const ContactTemplate = ({
  message,
  email,
  name
}: ContactTemplateProps) => (
  <Html>
    <Head />
    <Preview>Nowa wiadomość z Twojego portfolio</Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            Wiadomość od <strong>{name || 'Użytkownika'}</strong>
          </Heading>
          <Text className="text-black text-[14px] leading-[24px]">
            Otrzymałeś nową wiadomość z formularza kontaktowego:
          </Text>
          <Section>
             <Text className="text-black text-[14px] leading-[24px]">
              <strong>Email:</strong> {email}
            </Text>
             <Hr />
            <Text className="text-black text-[14px] leading-[24px]">
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);