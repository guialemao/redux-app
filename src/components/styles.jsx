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
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  display: inline-block;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 2px;

  > a {
    color: #000;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  .body-card {
    padding: 10px;
    font-size: 14px;

    > span {
      margin-bottom: 10px;
      display: block;
    }
  }

  button {
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: #FF5A49;
    border: 1px solid transparent;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

Wrapper.displayName = 'Wrapper';
List.displayName = 'List';
Card.displayName = 'Card';

export {
  Wrapper,
  List,
  Card,
};
