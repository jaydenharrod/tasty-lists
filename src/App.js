import React, { Component } from 'react';
import { Button, List, ListItem } from 'radix-ds';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import Data from './Data';

const Container = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Items = styled(ListItem)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.isHealthy ? 'hsl(142, 68%, 42%)' : 'hsl(208, 12%, 46%)'};
  text-indent: ${props => (props.isDelicious ? '30px' : '0')};
  color: hsl(0, 0%, 100%);
  transition-property: all;
  transition-duration: 300ms;
`;

const Label = styled.label`
  cursor: pointer;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Data;
    this.clickedDelicious = this.clickedDelicious.bind(this);
    this.clickedHealthy = this.clickedHealthy.bind(this);
  }

  clickedDelicious = e => {
    const { data } = this.state;
    const { id } = e.target;
    data[id].isDelicious = !this.state.data[id].isDelicious;
    this.setState({ data });
  };

  clickedHealthy = e => {
    const { data } = this.state;
    const { id } = e.target;
    data[id].isHealthy = !this.state.data[id].isHealthy;
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    const clickedDelicious = this.clickedDelicious;
    const clickedHealthy = this.clickedHealthy;
    const keys = Object.keys(data);
    return keys.map(key => {
      const { isHealthy, isDelicious, label } = data[key];
      const foodLabel = label.charAt(0).toUpperCase() + label.slice(1);
      return (
        <Container key={key}>
          <Items isHealthy={isHealthy} isDelicious={isDelicious}>
            <p>{foodLabel}</p>
            <Label>
              Delicious:{' '}
              <Checkbox
                id={key}
                checked={isDelicious}
                onChange={clickedDelicious}
              />
            </Label>
            <Label>
              Healthy:{' '}
              <Checkbox
                id={key}
                checked={isHealthy}
                onChange={clickedHealthy}
              />
            </Label>
          </Items>
          <Button onClick={() => console.log(data[key])}>Log data</Button>
        </Container>
      );
    });
  }
}

export default App;
