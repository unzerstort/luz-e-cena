import React from 'react'
import Link from '../Link';
import Button from '../Button';
import styles from "./Header.module.css"
import HeaderList from './components/HeaderList';
import HeaderListItem from './components/HeaderListItem';
import Logo from '../Logo';
import HeaderLinks from './components/HeaderLinks';
import HeaderFormFilters from './components/HeaderFormFilters';
import HeaderActions from './components/HeaderActions';

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src='/logo.png'></Logo>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  )
}

export default Header;