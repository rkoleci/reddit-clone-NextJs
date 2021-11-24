import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 
import Trending from './comps/Trending'


export default function Home() {
  return (
    <> 
      <div className={styles.container}>
        <Trending />
      </div>
    </>
  )
}
