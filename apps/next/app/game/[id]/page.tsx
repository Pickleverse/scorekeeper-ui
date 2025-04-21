'use client'

import { GameDetailScreen } from 'app/features/game/detail-screen'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const params = useParams()
  useEffect(() => {
    console.log(params)
  }, [])

  return <GameDetailScreen id={params!.id as string} />
}
