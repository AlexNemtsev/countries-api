import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled(Link)`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  text-decoration: none;
  width: 96px;
`;

export default BackButton;
