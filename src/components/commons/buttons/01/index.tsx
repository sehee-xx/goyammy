import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
  title: string;
}

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  color: #8b4513;
  margin-top: 30px;
  cursor: pointer;
  background-color: ${(props: any) => (props.isActive ? "#f39c1f" : "#a5a5a5")};
  color: ${(props: any) => (props.isActive ? "white" : "#f7f8f9")};
`;

export default function Button01(props: IProps) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
