import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";
import { useRouter } from 'next/router'

import styles from '../styles/pages/Home.module.scss'
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallenngesProvider } from '../contexts/ChallengesContext';
import { useEffect } from 'react';

interface HomeProps {
  level: number,
  currentExperience: number
  challengesCompleted: number
  username: string
  avatarUrl: string
}

export default function Home(props: HomeProps) {

  return (
    <ChallenngesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      username={props.username}
      avatarUrl={props.avatarUrl}

    >
      <div className={styles.container}>
        <Head>
          <title>movit</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
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
        </CountdownProvider>

      </div>
    </ChallenngesProvider>


  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted, username, avatarUrl } = ctx.req.cookies
  console.log(currentExperience)
  if (!username) {
    console.log(username, 'hahaha')
    ctx.res.setHeader('location', '/login')
    ctx.res.setHeader("location", "/login");
    ctx.res.statusCode = 302;
    ctx.res.end();
    return { props: {} }
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      username: username ? username : null,
      avatarUrl: avatarUrl ? avatarUrl : null
    }
  }
}

