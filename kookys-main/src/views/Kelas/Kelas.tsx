import React from 'react'
import Container from '../../layout/container/Container'
import CardKelas from './Partials/CardKelas/CardKelas'

const Kelas = () => {
  return (
    <Container>
      <div style={{display:'flex', gap:50}}>
      <CardKelas label="X"/>
      <CardKelas label="XI"/>
      <CardKelas label="XII"/>
      </div>
    </Container>
  )
}

export default Kelas