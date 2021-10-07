import './App.css'
import React from 'react'

import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Exemplo de Contador" color='#179'>
                <Contador numIni={10} passo={1}></Contador>
            </Card>
            <Card titulo="Exemplo de Componente Controlado" color='#175'>
                <Input></Input>
            </Card>

            <Card titulo="Exemplo de Comunicação Indireta" color='#105'>
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="Exemplo de Comunicação Direta" color='#505'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="Exemplo de Condicional" color='#315'>
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Bruno' }}></UsuarioInfo>
                <UsuarioInfo ></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'Bruno' }}></UsuarioInfo>
            </Card>

            <Card titulo="Exemplo de Repetição" color='#585'>
                <TabelaProdutos>

                </TabelaProdutos>
            </Card>

            <Card titulo="Exemplo de Repetição" color='#585'>
                <ListaAlunos>

                </ListaAlunos>
            </Card>

            <Card titulo="Exemplo de Familia" color='#180'>
                <Familia sobrenome="Pivoto">
                    <FamiliaMembro nome="Bruno" />
                    <FamiliaMembro nome="José" />
                    <FamiliaMembro nome="Jaqueline" />
                </Familia>

            </Card>

            <Card titulo="Exemplo de Card" color='#850'>
                <Aleatorio min={10} max={50}></Aleatorio>
            </Card>

            <Card titulo="Exemplo de Fragmento" color='#508'>
                <Fragmento />
            </Card>

            <Card titulo="Exemplo de Parametro" color='#100'>
                <ComParametro
                    titulo="Situação do Bruno"
                    subtitulo="Chorando"
                    nota={10.0}
                />
            </Card>

            <Card titulo="Exemplo de Componente">
                <Primeiro />
            </Card>
        </div>
    </div>
)