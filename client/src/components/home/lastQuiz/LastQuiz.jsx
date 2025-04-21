import { Link } from "react-router";

export default function LastQuiz() {
    return (
        <section className="flex items-baseline justify-between max-w-[1400px] gap-[4em] !pt-[5em] !pb-[5em]">
            <section className="flex-1">
                <h1 className="text-[2.5em] text-[#2c3e50] !mb-[1.5em] font-bold">Welcome, Space Traveler!</h1>
                <p className="text-[1.2em] text-[#333] !mb-[2em] leading-[1.6] italic">
                    Ready to test your knowledge across the cosmos? Embark on a thrilling journey through quizzes of all levels, from the basics of space exploration to the mysteries of distant galaxies. Challenge yourself with different missions and see how far you can go! Answer questions, earn points, and rise through the ranks as you prove your knowledge. Whether you're a Cadet or an experienced Explorer, there's always a new mission to conquer and a higher rank to achieve. Track your progress, compete with others, and see who leads the cosmic leaderboard! Choose your mission, get ready, and launch it! 🚀
                </p>
                <Link to="/quiz" className="action-btn">Start Your Quiz Quest</Link>
            </section>

            <aside className="flex flex-col max-w-[400px] min-h-[200px] gap-[2em] items-center !p-[1.5em] rounded-[0.5em] text-center card-shadow">
                <h2>Last Added Quiz</h2>
                <div className="bg-[#eaf1f9] !pt-[1em] !pb-[1em] !pl-[1.4em] !pr-[1.4em] rounded-[0.8em] max-w-[350px] text-left">
                    <h3 className="text-[#333] text-[1.4em] !mb-[0.5em] font-bold">title</h3>
                    <p className="text-[#666] text-[1.1em] leading-[1.6] !mb-[1em]">Mission Level: category</p>
                </div>
                <Link to={'/quiz/asd'} className="action-btn">Start Mission</Link>
            </aside>
        </section>
    )
}