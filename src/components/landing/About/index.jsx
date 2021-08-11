import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id='about-site'>
      <Details theme={theme}>
        <h1>About this site</h1>
        <p>
          メーカーの研究開発に従事する中年技術者が、研鑽してきた自分の技術を社会に役立てたいと思いポートフォリオサイトを作りました。
        </p>
        <p>
          日々実験、データ解析に向かう技術者の多岐に渡る悩みをソフトウェアで解消できます。データ確認の効率化、データの変換などでお力になれます。
        </p>
        <p>
          興味を持たれましたら、雑談でもいいのでContactからご連絡ください😊
        </p>
      </Details>
    </Wrapper>
  );
};
