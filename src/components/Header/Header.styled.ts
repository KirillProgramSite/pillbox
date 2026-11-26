import styled from 'styled-components';
import { Menubar, Menu } from '@base-ui/react';

export const StyledHeader = styled(Menubar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--color-primary);
  color: var(--color-background);
`;


export const MenuRoot = styled(Menu.Root)`
    display: flex;
    gap: 24px;

`;


export const MenuRootContainer = styled.div`
    display: flex;
    gap: 4px;

`;

export const MenuItem = styled(Menu.Item)`
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--font-family);
  transition: background 0.3s ease, color 0.3s ease;

  &[data-highlighted] {
    background: #f1f1f1;
  }

  &:hover {
    background: var(--color-primary-light);
    color: var(--color-text);
  }
`;