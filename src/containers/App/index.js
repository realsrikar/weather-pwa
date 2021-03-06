import React from 'react';
import { hot } from 'react-hot-loader';
import Container from '../../components/Container/index';
import ViewCity from '../../components/ViewCity/index';
import ListCities from '../../components/ListCities/index';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body{
		margin: 0;
		font-family: 'Roboto', sans-serif;
		color: #474747;
	}
  input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const token = 'b5e7ada3bd028f6482908a861c2306d1';

const cities = [
  { name: 'São Paulo' },
  { name: 'London' },
  { name: 'New York' },
  { name: 'Paris' },
  { name: 'Hong Kong' },
  { name: 'Madrid' },
  { name: 'Buenos Aires' }
];

const App = () => (
  <AppWrapper>
    <GlobalStyle />
    <Container>
      <ViewCity {...{ token }} />
      <ListCities {...{ cities, token }} />
    </Container>
  </AppWrapper>
);

export default hot(module)(App);
