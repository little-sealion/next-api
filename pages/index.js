import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Timestamp Microservice | freeCodeCamp.org</title>
      </Head>

        <h1>Timestamp Microservice</h1>
        <hr />
        <div className={styles.container}>
          <h3>Example Usage:</h3>
          <ul>
            <li><a href="api/2015-12-25">[project url]/api/2015-12-25</a></li>
            <li><a href="api/1451001600000">[project url]/api/1451001600000</a></li>
          </ul>

          <h3>Example Output:</h3>
          <p>
            {`"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"`}
          </p>
        </div>

    </div>
  )
}
