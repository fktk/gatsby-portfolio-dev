import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { TextWrapper, Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 6, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects" theme={theme}>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {
                      node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
      <TextWrapper>
        <h1>Skills & Projects</h1>
        <p>
          使用言語はPythonかJavaScript。以下大まかなプログラミング歴。
        </p>
        <dt>2016年頃</dt>
        <dd>
          AIブームに乗ってPythonを始める。
          統計解析や機械学習を学びつつ、NumpyやPandasを使ったデータ処理を覚える。
        </dd>
        <dt>〜2018年</dt>
        <dd>
          サーバー(Linux)、エディタ(VIM)、git、SQLなどの基本的なITスキルを身につける。
          ラズパイでLEDをチカチカさせたのもこの頃。
        </dd>
        <dt>〜2019年</dt>
        <dd>
          Pythonのデータ処理を共有するために、Webアプリ作成に着手する。
          Flask、Djangoなどを覚える。
        </dd>
        <dt>〜2020年</dt>
        <dd>
          サーバーがなくてもプログラミングによる処理を共有するために、
          JavaScriptでアプリ開発を始める。
        </dd>
        <dt>〜2021年</dt>
        <dd>
          UX向上のため、HTMLやCSSなど、フロントエンドの基本を復習し、Reactなどのフレームワークを覚える。
        </dd>
        <p>
          専業の方と比べるとIT技術の成長は遅いですが、材料技術のドメイン知識は豊富です。
        </p>
        <p>
          Githubはあまり活用していませんでしたが、今後はどんどんpushする予定。
        </p>
      </TextWrapper>
    </Wrapper>
  );
};
