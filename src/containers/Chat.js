import React, { Component } from 'react';
import styled from 'styled-components';
import Messages from './Messages';
import Form from './Form';

const Wrapper = styled.div`
  flex-basis: 60%;
  padding: 15px;
  padding-left: 25px;
  background-color: #f4f4f4;
  box-sizing: border-box;
`;

class Chat extends Component {
  state = {  }
  render() {
    return (
      <Wrapper>
        <Form />
        <Messages />
      </Wrapper>
    );
  }
}

export default Chat;
