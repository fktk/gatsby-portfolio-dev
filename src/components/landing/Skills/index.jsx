import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>About me</h1>
          <p>
            長崎県出身の材料系技術者で一児の父。京都大学で材料工学を修了後、愛知県のメーカーに就職。現在は車載用電池の材料開発に尽力する。
          </p>
          <p>
            ナノマテリアルの観察、成分分析をメイン技術として持つが、さらに第3次AIブームに乗って覚えたプログラミングを駆使し、データ処理の自動化、可視化、シミュレーション、AI活用など多様なソフトを自作できる。(が会社では活用できていない😥)
          </p>
          <p>
            趣味はロードバイクをなでること。夢はヨットで世界一周。
          </p>
        </Details>
        <Thumbnail>
          <img src={dev} alt="それらしい画像" />
        </Thumbnail>
      </SkillsWrapper>
    </Wrapper>
  );
};
