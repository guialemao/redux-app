import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`;

const List = styled.ul`
  padding: 0;
  margin: 0 0 10px;
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: ${({ column }) => column || 'row'};
  list-style: none;
`;

Wrapper.displayName = 'Wrapper';
List.displayName = 'List';

export {
  Wrapper,
  List,
};
