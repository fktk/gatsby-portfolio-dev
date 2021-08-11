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
            repositories(first: 4, orderBy: { field: STARGAZERS, direction: DESC }) {
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
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.forkCount}</span>
                  </div>
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
          使用言語はPythonかJavaScript。
        </p>
        <p>
          <a href="http://tkhome.top/line">line-chart</a>は最近作ったソフトで、この亜種なら安価で作ります。
        </p>
        <p>
          Pythonは、Numpy(数値計算)、Pillow(画像解析)、matplotlib(グラフ化)などをよく普段から使います。
          pip installできるCLIアプリを仕立てられます。
        </p>
        <p>
          JavaScriptでは、Pythonと同等の機能をGUIで操作できるようにします。GUIはReactや、HTML書いてDOM操作で実現します。
        </p>
        <p>
          UIデザインは経験が足りないので、CSSフレームワーク(bootstrapなど)の力を借ります。
        </p>
        <p>
          GitHubのリポジトリはまだ貧弱ですが、これから育てていきます。
        </p>
      </TextWrapper>
    </Wrapper>
  );
};
