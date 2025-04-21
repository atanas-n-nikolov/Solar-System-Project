export default function FactOfTheDay() {
    return (
        <article className="flex justify-center gap-[2em] w-full bg-dark-bg" aria-labelledby="fact-heading">
            <div className="flex items-center justify-between max-w-[1400px] w-full flex-wrap" style={{ alignItems: "center", gap: "2em", padding: "10em 0" }}>
                <div className="flex flex-col justify-center items-start">
                    <h2 id="fact-heading">
                        <span className="tracking-tight font-russo text-white text-[5em] leading-[1.3] font-normal block">DID YOU KNOW</span>
                        <span className="tracking-tight font-russo text-white text-[5em] leading-[1.3] font-normal block">ON THIS DAY ...</span>
                    </h2>
                </div>
                <div className="flex max-w-[65ch] flex-col">
                    <h3>
                        <span className="font-pacifico !pr-[0.5em] text-[1.5em] tracking-tighter text-[#f4d03f]">IN:</span>
                        <span className="text-[2em] text-white font-semibold tracking-widest">1991</span></h3>
                    <h4 className="title">
                        <span className="font-pacifico !pr-[0.5em] text-[1.5em] tracking-tighter text-[#f4d03f]">THE:</span>
                        <span className="text-[2em] text-white font-semibold tracking-widest">Launch of the Mars Observer</span>
                    </h4>
                    <p className="description">
                        <span className="font-pacifico !pr-[0.5em] text-[1.5em] tracking-tighter text-[#f4d03f]">DESC:</span><span className="text-[2em] text-white font-semibold tracking-widest">NASA launched Mars Observer, a mission designed to study Mars from orbit, though communication was lost before it arrived.</span>
                    </p>
                </div>
            </div>
        </article>
    )
}