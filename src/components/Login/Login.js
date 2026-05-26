import styled from "styled-components";
import { Form } from "formik";
import { Field } from "formik";

export const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 108px 48px;
  background: #101822;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 56px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 48px;
`;

export const FormS = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 18px 24px;
  background: #14202e;
  border: 2px solid transparent;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  transition: 250ms;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: #980000;
  }
`;

export const ErrorText = styled.p`
  color: #ff4d4d;
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button`
 width: 300px;
  margin: 0 auto;
  padding: 18px 24px;
  background: #980000;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 24px;
  transition: 250ms;

  &:hover {
    background: #770000;
  }

  &:focus {
    border-color: #ffffff;
  }
`;