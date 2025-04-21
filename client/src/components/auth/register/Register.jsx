import { Link } from "react-router";

export default function Register() {
    return (
        <div className="max-w-[1400px] w-full text-left !pl-[2em] !pr-[2em] !ml-auto !mr-auto">
            <section className="flex justify-center items-center bg-[#eee] gap-[5em] h-[900px]">
                <form className="flex-1 bg-white max-w-[70ch] flex flex-col gap-[1em] !p-[4em] rounded-[0.5em] r-form" autoComplete="on">
                    <fieldset className="flex flex-col justify-center gap-[1em]">
                        <legend className="text-[2em] !mb-[1em] text-[#333] font-bold">Sign up</legend>
                        <div className="flex gap-[1em]">
                            <div className="flex-1 flex flex-col gap-[0.2em]">
                                <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="firstName">First name:</label>
                                <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="text" id="firstName" name="firstName" autoComplete="given-name" />
                            </div>
                            <div className="flex-1 flex flex-col gap-[0.2em]">
                                <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="lastName">Last name:</label>
                                <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="text" id="lastName" name="lastName" autoComplete="family-name" />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="email">Email:</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="email" id="email" name="email" autoComplete="email" />
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="password">Password:</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="password" id="password" name="password" autoComplete="new-password" />
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="rePassword">Repeat password:</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="password" id="rePassword" name="rePassword" autoComplete="new-password" />
                        </div>

                        <button className="action-btn !mt-[1em]" type="submit">Sign up</button>
                        <p className="text-[1em] !mt-[1em] text-[#555] text-center">
                            Already have an account? <Link className="text-[#4a90e2] font-semibold" to="/login">Click here to login</Link>
                        </p>
                    </fieldset>
                </form>

                <aside className="flex-1 flex items-center justify-center">
                    <img className="max-w-[90%] h-auto rounded-[0.75em] object-cover" src="/images/register.png" alt="Register Illustration" />
                </aside>
            </section>
        </div>
    )
}