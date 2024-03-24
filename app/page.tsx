import styles from '@/app/page.module.css'

import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import Sobre from '@/components/sobre';

export default function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Sobre />
    </>
  );
}
