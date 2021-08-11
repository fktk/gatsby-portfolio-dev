import React, { useContext } from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './../../../data/social.json';
import { ThemeContext } from 'providers/ThemeProvider';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Flex as={Container}>
        <Details theme={theme}>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | Made by{' '} TK
          </span>
        </Details>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  );

}
