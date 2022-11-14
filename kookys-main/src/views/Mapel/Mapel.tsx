import React from 'react'
import Container from '../../layout/container/Container'
import CardMapel from './Partials/CardMapel/CardMapel'

const Mapel = () => {
  return (
    <Container>
        <CardMapel label={"Matematika"}/>
        <CardMapel label={"PBO"}/>
        <CardMapel label={"PWPB"}/>
    </Container>
  )
}

export default Mapel