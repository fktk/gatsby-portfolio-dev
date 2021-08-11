import React, { useContext } from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';
import { ThemeContext } from 'providers/ThemeProvider';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="contact">
      <Details theme={theme}>
        <h1>Contact</h1>
        <p></p>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact} alt="商談しているイメージ" />
      </Thumbnail>
    </Wrapper>
  );
}
