import styled from '@emotion/styled';

const ContainerStyles = styled.main`
  padding: ${({ theme }) => theme.padding.large};
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  @media ${({ theme }) => theme.media.md} {
    justify-content: center;
  }
`;

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
