'use client'

import Link from 'next/link'
import Image from 'next/image'
import { LogoProps } from './Logo.d'
import { useIsMobile } from '@/hooks/useIsMobile'

const Logo = ({ imageUrl, alt = 'Logo', href = '/' }: LogoProps) => {
    const isMobile = useIsMobile()

    const logoContent = (
        <div className="flex items-center">
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={alt}
                    className="object-contain"
                    width={isMobile ? 120 : 150}
                    height={isMobile ? 80 : 100}
                />
            ) : null}
        </div>
    )

    if (href) {
        return (
            <Link href={href} className="">
                {logoContent}
            </Link>
        )
    }

    return logoContent
}

export { Logo }
