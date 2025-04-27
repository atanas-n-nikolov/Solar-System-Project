import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function LastQuiz({ latestQuiz }) {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <section className="flex items-stretch justify-between max-w-[1400px] gap-[4em] !pt-[10em] !pb-[10em]">
            {latestQuiz ? (
                <>
                    <section className="flex-1">
                        <h1 className="text-[2.5em] text-[#2c3e50] !mb-[1.5em] font-bold">{t('latestQuiz.h1')}</h1>
                        <p className="text-[1.2em] text-[#333] !mb-[2em] leading-[1.6] italic">{t('latestQuiz.p1')}🚀</p>
                        <Link to="/quiz" className="action-btn">{t('latestQuiz.btn1')}</Link>
                    </section>

                    <aside className="flex flex-col max-w-[400px] min-h-[200px] gap-[2em] items-center !p-[1.5em] rounded-[0.5em] text-center card-shadow">
                        <h2 className="text-[1.3em] font-bold">{t('latestQuiz.h2')}</h2>
                        <div className="bg-[#eaf1f9] !pt-[1em] !pb-[1em] !pl-[1.4em] !pr-[1.4em] rounded-[0.8em] w-[350px] text-left">
                            <h3 className="text-[#333] text-[1.4em] !mb-[0.5em] font-bold">{latestQuiz.title[currentLang]}</h3>
                            <p className="text-[#666] text-[1.1em] leading-[1.6] !mb-[1em]">{t('latestQuiz.p2')} {latestQuiz.category[currentLang]}</p>
                        </div>
                        <Link to={`/quiz?category=${latestQuiz.category['en']}`} className="action-btn">{t('latestQuiz.btn2')}</Link>
                    </aside>
                </>
            ) : (
                <div className="w-full flex items-center justify-around gap-[2em]">
                    <img src="/images/no-quiz.png" alt="No quiz available" className="flex-1 w-[350px] h-[auto] !mb-[1em]" />
                    <div>
                    <h1 className="text-[#333] text-[1.8em] !mb-[1em] font-semibold">{t('latestQuiz.noQuizMessage')}</h1>
                    <p className="text-[#666] italic text-[1.3em]">{t('latestQuiz.noQuizAddedYet')}</p>
                    </div>
                </div>
            )}
        </section>
    )
}