import './App.css'
import React from 'react'

import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React (Arrow) </h1>

            <div className="Cards">
                <Card titulo="Exemplo de Familia" color='#180'>
                    <Familia sobrenome="Pivoto">
                        <FamiliaMembro nome="Bruno"/>
                        <FamiliaMembro nome="José"/>
                        <FamiliaMembro nome="Jaqueline"/>
                    </Familia>

                </Card>
                <Card titulo="Exemplo de Card" color='#080'>
                    <Aleatorio min={10} max={50}></Aleatorio>
                </Card>
                <Card titulo="Exemplo de Fragmento">
                    <Fragmento />
                </Card>
                <Card titulo="Exemplo de Parametro">
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
}