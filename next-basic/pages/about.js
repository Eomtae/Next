import React from 'react'
import about from '@/styles/about.module.scss'
import { useRouter } from 'next/router'



const About = () => {
  const router = useRouter();
  // console.log(router)
  function move(){
    // router.push('/board')
    router.push({
      pathname: '/board',
      

    })
  }
  return (
    <div className={about.list}>
      About
      <button onClick={move}>게시판 바로가기</button>
      </div>
  )
}

export default About