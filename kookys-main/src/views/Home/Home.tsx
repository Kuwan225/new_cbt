import type { NextPage } from "next";
import ModalLogin from "../../components/Modal/Modal";
import Container from "../../layout/container/Container";
import CardJurusan from "./Partials/CardJurusan/CardJurusan";

const Home: NextPage = () => {

  return (
    <Container>
      <CardJurusan label="rpl"/>
      <CardJurusan label="akuntansi"/>
      <CardJurusan label="perhotelan"/>
    </Container>
  );
};

export default Home;
