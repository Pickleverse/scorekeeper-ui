'use client'

import { GameDetailScreen } from 'app/features/game/detail-screen'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const params = useParams()
  useEffect(() => {
    console.log(params)
  }, [])

  return <GameDetailScreen id="c7542a21-3513-44dd-ac73-2d712df321ea" />
  // return <GameDetailScreen id={params!.id as string} />
}
