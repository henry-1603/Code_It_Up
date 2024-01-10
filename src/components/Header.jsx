import React from 'react'
import logo from './logo.png'
import {AppBar, Toolbar, styled} from '@mui/material'

//Kis k upar CSS lagani hai vo likhangae styled k andar
const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {
  return (
   <Container position='static'>
    <Toolbar>
        <img src={logo} alt='logo' style={{width:120, borderRadius:6, position:'absolute', left:10}}/>
    </Toolbar>
   </Container>
  )
}

export default Header