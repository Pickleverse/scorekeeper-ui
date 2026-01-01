'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log('Login submitted:', { email, password, rememberMe })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
            {/* Mobile-first container */}
            <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
                <div className="w-full max-w-md">
                    {/* Brand/Logo */}
                    <div className="text-center mb-8">
                        <Link href="/">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                ScrKpr
                            </h1>
                        </Link>
                        <p className="text-gray-600 text-sm md:text-base">
                            Welcome back! Sign in to continue
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className="bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-gray-100 p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                            Sign In
                        </h2>

                        {/* Email/Password Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2 text-sm md:text-base"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base transition-all"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 font-medium mb-2 text-sm md:text-base"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(e.target.checked)
                                        }
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="ml-2 text-sm text-gray-700"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 md:py-3.5 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors shadow-sm"
                            >
                                Sign In
                            </button>
                        </form>
                        {/* Divider */}
                        <div className="my-6 flex items-center">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-4 text-gray-500 text-xs md:text-sm font-medium">
                                OR
                            </span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>
                        {/* Social Login Buttons */}
                        <div className="space-y-3 mb-6">
                            <button
                                type="button"
                                onClick={() => console.log('Google login')}
                                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 py-3 md:py-3.5 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
                            >
                                <FaGoogle className="text-lg text-red-500" />
                                <span className="text-sm md:text-base">
                                    Continue with Google
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => console.log('GitHub login')}
                                className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3 md:py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                            >
                                <FaGithub className="text-lg" />
                                <span className="text-sm md:text-base">
                                    Continue with GitHub
                                </span>
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <p className="mt-6 text-center text-gray-600 text-sm">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/signup"
                                className="text-blue-600 font-semibold hover:text-blue-700"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>

                    {/* Back to Home */}
                    <div className="text-center mt-6">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base inline-flex items-center gap-2"
                        >
                            <span>←</span>
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
