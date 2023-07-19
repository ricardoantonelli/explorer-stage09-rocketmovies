import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'
import { Link } from 'react-router-dom'

import { RiArrowLeftLine } from 'react-icons/ri'
import { FaRegClock } from 'react-icons/fa'

export function Preview() {
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <ButtonText icon={RiArrowLeftLine} title="Voltar"></ButtonText>
        </Link>
        <Content>
          <div className="title">
            <h1>Nome do Filme</h1>
            <div className="stars-content">
              <Rating></Rating>
            </div>
          </div>
          <div className="autor-container">
            <Link to="/profile">
              <img src="https://github.com/ricardoantonelli.png" alt="User Image" />
            </Link>
            <p>Por Ricardo Antonelli</p>
            <FaRegClock />
            <p>18/07/23 às 21:00</p>
          </div>
          <div className="tags-container">
            <Tag title="teste"></Tag>
            <Tag title="teste"></Tag>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi 
            voluptates temporibus. Non cupiditate, quasi quaerat dolorem eligendi possimus
            fugiat odit explicabo incidunt dolor atque, praesentium, debitis numquam neque
            dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi 
            voluptates temporibus. Non cupiditate, quasi quaerat dolorem eligendi possimus
            fugiat odit explicabo incidunt dolor atque, praesentium, debitis numquam neque
            dolores!Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi 
            voluptates temporibus. Non cupiditate, quasi quaerat dolorem eligendi possimus
            fugiat odit explicabo incidunt dolor atque, praesentium, debitis numquam neque
            dolores!
          </p>
        </Content>
      </main>
    </Container>
  )
}
