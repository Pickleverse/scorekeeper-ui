import Link from 'next/link'
import { FaUsers, FaTrophy, FaCalendarAlt, FaChartLine } from 'react-icons/fa'

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                        Your Sports,{' '}
                        <span className="text-blue-600">Your Community</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
                        Connect with fellow athletes, track your games, and
                        build lasting friendships through the sports you love.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/signup"
                            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            href="#features"
                            className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors border-2 border-blue-600"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <p className="mt-8 text-sm text-gray-500">
                        Join 10,000+ athletes already playing together
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 md:py-24 bg-white px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Play
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Organize games, track scores, and connect with your
                            sports community all in one place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="bg-blue-100 p-4 rounded-full mb-4">
                                <FaUsers className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Find Your Team
                            </h3>
                            <p className="text-gray-600">
                                Connect with players in your area and form teams
                                for your favorite sports. Build a community
                                around what you love.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="bg-green-100 p-4 rounded-full mb-4">
                                <FaTrophy className="text-4xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Track Scores & Stats
                            </h3>
                            <p className="text-gray-600">
                                Keep detailed records of all your games, track
                                individual and team stats, and celebrate your
                                victories.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="bg-purple-100 p-4 rounded-full mb-4">
                                <FaCalendarAlt className="text-4xl text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Schedule Games
                            </h3>
                            <p className="text-gray-600">
                                Organize matches with ease. Send invites, manage
                                RSVPs, and never miss a game with calendar
                                integration.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="bg-orange-100 p-4 rounded-full mb-4">
                                <FaChartLine className="text-4xl text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                View Progress
                            </h3>
                            <p className="text-gray-600">
                                Visualize your improvement over time with
                                detailed analytics and insights into your
                                performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-blue-600 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of athletes who are already connecting,
                        competing, and having fun together.
                    </p>
                    <Link
                        href="/signup"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Create Free Account
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home
