'use client'

import Link from 'next/link'
import { type DesktopMenuLink, DesktopMenuProps } from './DesktopMenu.d'

const defaultLinks: DesktopMenuLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const DesktopMenu = ({
    brandName = 'ScrKpr',
    brandHref = '/',
    links = defaultLinks,
    className = '',
    linkClassName = '',
    ctaButton = { label: 'Login', href: '/login' },
}: DesktopMenuProps) => {
    const handleLinkClick = (link: DesktopMenuLink) => {
        if (link.onClick) {
            link.onClick()
        }
    }

    const handleCtaClick = () => {
        if (ctaButton?.onClick) {
            ctaButton.onClick()
        }
    }

    return (
        <nav className={`${styles.container} ${className}`}>
            <div className={styles.innerContainer}>
                {/* Brand */}
                <Link href={brandHref} className={styles.brand}>
                    {brandName}
                </Link>

                {/* Navigation Links */}
                <div className={styles.linksContainer}>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => handleLinkClick(link)}
                            className={`${styles.navLink} ${linkClassName}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                {ctaButton && (
                    <Link
                        href={ctaButton.href}
                        onClick={handleCtaClick}
                        className={styles.ctaButton}
                    >
                        {ctaButton.label}
                    </Link>
                )}
            </div>
        </nav>
    )
}

export { DesktopMenu }

const styles = {
    container: 'sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm',
    innerContainer:
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16',
    brand: 'text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors',
    linksContainer: 'hidden md:flex items-center space-x-8',
    navLink:
        'text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200',
    ctaButton:
        'bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm',
}
