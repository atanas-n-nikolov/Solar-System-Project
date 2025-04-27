import { Link } from 'react-router';

import { GiAstronautHelmet } from "react-icons/gi";

import {
    FaUserAlt,
    FaUserGraduate,
    FaUserTie,
    FaBrain
} from 'react-icons/fa';
import { useCategoryQuiz } from '../../api/quizAPI';
import { useTranslation } from 'react-i18next';

export default function Quiz() {
    const { quiz, error, loading } = useCategoryQuiz('type=category-summary');
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const getCategoryIcon = (level) => {
        switch (level) {
            case 'Cadet':
                return <FaUserAlt className="text-green-500 w-8 h-8" title="Cadet" />
            case 'Pilot':
                return <FaUserGraduate className="text-blue-500 w-8 h-8" title="Pilot" />
            case 'Commander':
                return <FaUserTie className="text-yellow-500 w-8 h-8" title="Commander" />
            case 'Admiral':
                return <GiAstronautHelmet className="text-red-500 w-8 h-8" title="Admiral" />
            default:
                return null
        }
    }

    const getCategoryLang = (level) => {
        switch (level) {
            case 'Cadet':
                return t('quiz.cadet');
            case 'Pilot':
                return t('quiz.pilot');
            case 'Commander':
                return t('quiz.commander');
            case 'Admiral':
                return t('quiz.admiral');
            default:
                return null
        }
    }

    if (loading) return <div>Loading...</div>;

    return (
        <section className="max-w-[1400px] min-h-[80vh] !m-auto !mt-0 !mb-0 !p-[2em] !pb-[6em]">
            <header>
                <h1 className="text-[2em] font-bold text-center">{t('quiz.h1')}</h1>
            </header>
            <section className="flex items-center justify-center !mb-[2em]">
                <img className="w-[20%]" src="images/quiz-image.png" alt="quiz-image" />
                <p className="max-w-[40ch] text-[1.1em] text-[#333] !mb-[1em] text-center italic">{t('quiz.p1')}</p>
            </section>
            <section className="grid gap-6" style={{
                gridTemplateColumns: quiz.length === 1 ? '300px' : quiz.length === 2 ? 'repeat(2, 300px)' : 'repeat(auto-fit, 300px)', display: 'grid',justifyContent: 'center'
            }} aria-label="Quiz Categories">
                {quiz.map((q) => (
                    <article
                        key={q.category}
                        className="text-center bg-white border border-gray-200 rounded-[0.8em] shadow-sm hover:shadow-md transition-shadow duration-200 !p-[1.5em] flex flex-col items-center gap-[1em]"
                    >
                        <header>
                            <h2 className="text-[1.25em] font-bold flex items-center gap-[0.5em] justify-center">
                                {getCategoryIcon(q.category)} {t('quiz.h2')} {getCategoryLang(q.category)}
                            </h2>
                        </header>

                        <p className="text-[0.9em] text-[#555] mb-[1em] flex items-center gap-[0.5em] justify-center">
                            <FaBrain className="text-[#888] w-4 h-4" />
                            {q.count} {t('quiz.p2')}
                        </p>

                        <Link
                            to={`/quiz/${q.category}`}
                            className="action-btn hover:bg-indigo-700 transition-colors duration-200"
                        >
                            {t('quiz.btn')}
                        </Link>
                    </article>
                ))}
            </section>
        </section>
    )
}