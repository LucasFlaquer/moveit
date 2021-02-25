import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>movit</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>

    </div>
  )
}
