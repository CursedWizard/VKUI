
import * as React from 'react';
import Checkbox from '../components/Checkbox/Checkbox';
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../dist/vkui.css';
import styled from 'styled-components';

const CheckboxLetter = styled.div`
  width: 20px;
  height: 19px;
  background-color: #6690C1;

  margin: 2px;
  font-size: 16px;
  color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;

  h5 {
    font-weight: 500;
  font-size: 16px;
  }
  /* padding-top: 1px; */
`;

export default {
  title: 'Exode/TaskContent'
} as Meta;

export const TaskContent: React.FC = () => (
  <>
    <Checkbox iconChecked={<CheckboxLetter>A</CheckboxLetter>}>Test 1</Checkbox>
    <Checkbox>Test 2</Checkbox>
  </>
);
