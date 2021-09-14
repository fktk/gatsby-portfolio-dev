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
          おじさん材料技術者が、独学で研鑽してきたIT技術で、
          (意外とITに疎い)日々実験に向かう技術者のかゆいところに手が届くソフトを提供したい
          と思いポートフォリオサイトを作りました。
        </p>
        <p>
          データ確認の効率化、データ変換などは得意技です。
          定型処理処理をプログラミングで自動化すると圧倒的に早いですよ。
        </p>
        <p>
          ソフト制作の相談その他は、Contactからご連絡ください😊
        </p>
      </Details>
    </Wrapper>
  );
};
