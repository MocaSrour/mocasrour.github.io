import React from 'react';
import { DiPostgresql, DiReact, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with many technologies in web development world.
      From Back-end to Design to testing.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
             React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
             Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPostgresql size='3rem' />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
             Postgres
          </ListParagraph>
        </ListContainer>
      </ListItem>
  <ListItem>
        <ListContainer>
          <ListTitle>Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
             TestNG
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>BDD-tool</ListTitle>
          <ListParagraph>
            Experience with <br />
             Cucumber
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Build-tool</ListTitle>
          <ListParagraph>
            Experience with <br />
             Maven
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
