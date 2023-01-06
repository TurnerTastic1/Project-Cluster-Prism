import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  
`;

export const SignupBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px
  
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(118, 111, 232);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  color: rgba(200, 200, 200, 0.8);
  background: #111;
  border-radius: 25px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.8);
  padding: 0px 10px;

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #111 inset !important;
  }
  &:-webkit-autofill:hover {
    box-shadow: 0 0 0 30px #111 inset !important;
  }
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 30px #111 inset !important;
  }
  -webkit-text-fill-color: rgba(200, 200, 200, 0.8);
  
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 0.8);
  }

  &:focus {
    outline: none;
    border: 2px solid #2ecc71;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(118, 111, 232);
  

  &:hover {
    filter: brightness(1.03);
  }
`;


// Border for Input
// &:not(:last-of-type) {
//   border-bottom: 1.5px solid #fd1d1d;
// }