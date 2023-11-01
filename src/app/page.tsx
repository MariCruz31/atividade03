import Image from 'next/image'
import styles from './page.module.css'
import { Quadrado } from './componentes/quadrado'
import { Titulo } from './componentes/titulo'
import { Cabecalho } from './componentes/cabecalho'
import { Paragrafo } from './componentes/paragrafo'
import { Lista } from './componentes/lista'
import { Imagem } from './componentes/imagem'
import { Rodape } from './componentes/rodape'
import { Botao } from './componentes/botao'

export default function Home() {
  return (

    <main> 
      <Quadrado />

      <Titulo />

      <Botao />

      <Lista />

      <Imagem />

      <Cabecalho />

      <Paragrafo />       

      <Rodape />      

    </main>
  )
}
