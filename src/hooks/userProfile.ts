// hooks/useProfile.ts

import { useState, useEffect } from 'react'
import { UserProfile } from '../app/types/user'
import {
    getMockUserByUsername,
    simulateApiDelay,
} from '../app/lib/mockUserData'

interface UseProfileResult {
    profile: UserProfile | null
    isLoading: boolean
    error: string | null
}

export function useProfile(username: string): UseProfileResult {
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchProfile() {
            try {
                setIsLoading(true)
                setError(null)

                // Simulate network delay
                await simulateApiDelay(800)

                const user = getMockUserByUsername(username)

                if (!user) {
                    setError('User not found')
                    setProfile(null)
                } else {
                    setProfile(user)
                }
            } catch (err) {
                setError('Failed to load profile')
                setProfile(null)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProfile()
    }, [username])

    return { profile, isLoading, error }
}
