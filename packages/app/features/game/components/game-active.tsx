import { H4, H6, XStack, YStack } from '@my/ui'
import { useGames } from 'app/store'
import { useState } from 'react'
import { useRouter } from 'solito/navigation'

const ActiveGame = ({ id }: { id: string }) => {
  const router = useRouter()
  const games = useGames()
  const [currGame, setCurrGame] = useState()

  return (
    <YStack my="$5" gap="$5" width="90%" mx="auto">
      <H4 mx="auto">Let's Play!</H4>
      <XStack>
        <YStack>
          <H6 mx="auto">Let's Play!</H6>
        </YStack>
      </XStack>
    </YStack>
  )
}

export default ActiveGame
