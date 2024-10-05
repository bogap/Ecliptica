import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
  padding: 50px;
  justify-items: center;
  background-color: #f9fafb;
`;

export default Grid;
