import { useRouter } from 'next/router'
import React from 'react'

const Board = () => {
  const {query} = useRouter();
  console.log(query.id)
  
  return (
    <div>Board</div>
  )
}

export default Board