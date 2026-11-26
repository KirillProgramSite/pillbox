import { Link } from 'react-router-dom';
import logo from '../../../public/icon.png';

import {
    StyledHeader,
    MenuItem,
    MenuRoot,
    MenuRootContainer,
} from './Header.styled';

const Header = () => {
    return (
        <StyledHeader>
            <a href="/">
                <img src={logo} width="50" alt="Logo" />
            </a>

            <MenuRoot>
                <MenuRootContainer>
                    <MenuItem><Link to="/">Главная</Link></MenuItem>
                    <MenuItem><Link to="/pillbox">Моя аптечка</Link></MenuItem>
                    <MenuItem><Link to="/schedule">Расписание</Link></MenuItem>
                    <MenuItem><Link to="/history">История</Link></MenuItem>
                </MenuRootContainer>
            </MenuRoot>
        </StyledHeader>
    );
};

export default Header;