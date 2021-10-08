import './App.css'
import React from 'react'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import Card from './components/layout/Card'

import prod1 from './imagens/produto1.jpg'
import prod2 from './imagens/produto2.jpg'
import prod3 from './imagens/produto3.jpeg'
import prod4 from './imagens/produto4.jpeg'
import prod5 from './imagens/produto5.jpeg'
import prod6 from './imagens/produto6.jpeg'
import dashboard from './imagens/dash.png'
import cliente from './imagens/cliente.png'

export default () => (
    <div className="App">
        <h1>Elas Irmãs (e Bruno)</h1>
        <SideNav className="SideBar"
            onSelect={( selected ) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="icon" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="cliente">
                    <NavIcon>
                    </NavIcon>
                    <NavText>
                        Cliente
                    </NavText>
                    <NavItem eventKey="cliente/perfil">
                        <NavText>
                            Perfil
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="cliente/pedidos">
                        <NavText>
                            Pedidos
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="sair">
                    <NavIcon>
                    </NavIcon>
                    <NavText>
                        Sair
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        <div className="Cards">
            <Card titulo="Pulseira" color='#FFA500' preco={19.90} >
                <img src={prod1} alt="" width='37.5%' />
            </Card>

            <Card titulo="Colar" color='#FFA500' preco={30.00}>
                <img src={prod2} alt="" width='24.5%' />
            </Card>

            <Card titulo="Pingente" color='#FFA500' preco={15.99}>
                <img src={prod3} alt="" width='30%' />
            </Card>

            <Card titulo="Colar Caranguejo" color='#FFA500' preco={10.00}>
                <img src={prod4} alt="" width='25%' />
            </Card>

            <Card titulo="Coleira" color='#FFA500' preco={25.50}>
                <img src={prod5} alt="" width='35%' />
            </Card>

            <Card titulo="Pulseira de Praia" color='#FFA500' preco={18.90}>
                <img src={prod6} alt="" width='35%' />
            </Card>
        </div>
    </div>
)