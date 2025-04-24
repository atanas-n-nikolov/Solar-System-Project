import { Link } from 'react-router';

import { GiAstronautHelmet } from "react-icons/gi";

import {
    FaUserAlt,
    FaUserGraduate,
    FaUserTie,
    FaBrain
} from 'react-icons/fa';

const getCategoryIcon = (level) => {
    switch (level.toLowerCase()) {
        case 'beginner':
            return <FaUserAlt className="text-green-500 w-8 h-8" title="Beginner" />
        case 'intermediate':
            return <FaUserGraduate className="text-blue-500 w-8 h-8" title="Intermediate" />
        case 'advanced':
            return <FaUserTie className="text-yellow-500 w-8 h-8" title="Advanced" />
        case 'expert':
            return <GiAstronautHelmet className="text-red-500 w-8 h-8" title="Expert" />
        default:
            return null
    }
}

const quiz = [
    {
        "count": 6,
        "category": "beginner"
    },
    {
        "count": 6,
        "category": "intermediate"
    },
    {
        "count": 6,
        "category": "advanced"
    },
    {
        "count": 6,
        "category": "expert"
    }
]

export default function Quiz() {
    return (
        <section className="max-w-[1400px] min-h-[80vh] !m-auto !mt-0 !mb-0 !p-[2em] !pb-[6em]">
            <header>
                <h1 className="text-[2em] font-bold text-center">Quiz Quest</h1>
            </header>
            <section className="flex items-center justify-center !mb-[2em]">
                <img className="w-[20%]" src="images/quiz-image.png" alt="quiz-image" />
                <p className="max-w-[40ch] text-[1.1em] text-[#333] !mb-[1em] text-center italic">
                    Welcome, space traveler! Prepare to embark on a journey across galaxies of knowledge. Choose your mission and begin your quest!
                </p>
            </section>
            <section className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]" aria-label="Quiz Categories">
                {quiz.map((q) => (
                    <article
                        key={q.category}
                        className="text-center bg-white border border-gray-200 rounded-[0.8em] shadow-sm hover:shadow-md transition-shadow duration-200 !p-[1.5em] flex flex-col items-center gap-[1em]"
                    >
                        <header>
                            <h2 className="text-[1.25em] font-bold flex items-center gap-[0.5em] justify-center">
                                {getCategoryIcon(q.category)} Mission {q.category}
                            </h2>
                        </header>

                        <p className="text-[0.9em] text-[#555] mb-[1em] flex items-center gap-[0.5em] justify-center">
                            <FaBrain className="text-[#888] w-4 h-4" />
                            {q.count} Questions
                        </p>

                        <Link
                            to={`/quiz/${q.category}`}
                            className="action-btn hover:bg-indigo-700 transition-colors duration-200"
                        >
                            Launch Mission
                        </Link>
                    </article>
                ))}
            </section>
        </section>
    )
}