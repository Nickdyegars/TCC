import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #A68A80;
  border-radius: 8px;
  /* padding: 8px; */
  margin: 16px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000;
  padding-left: 8px;
`;
