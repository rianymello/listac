import styles from '../app/globals.css'

import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Sobre from '../components/sobre';
import Membros from '../components/membros';
import Contato from '../components/contato';
import Metas from '../components/metas';

export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Sobre />
    <Membros />
    <Contato />
    <Metas />
    </>
  );
}
