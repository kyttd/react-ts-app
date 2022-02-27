import styled from "styled-components";
import { Text } from "./libs/Text";

export const App = () => {
  return <StyledText text="Hello, World!" />;
};

const StyledText = styled(Text)`
  font-size: 2rem;
`;
