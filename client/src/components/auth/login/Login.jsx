import { Link } from "react-router";

export default function Login() {
    return (
        <div className="text-left max-w-[1400px] w-full !pl-[2em] !pr-[2em] !ml-auto !mr-auto">
            <section className="flex justify-center items-center bg-[#eee] gap-[5em] h-[900px]">
                <form className="flex-1 flex flex-col max-w-[70ch] bg-white gap-[1em] !p-[4em] rounded-[0.5em] r-form" autoComplete="on">
                    <fieldset className="flex flex-col justify-center gap-[1em]">
                    <legend className="text-[2em] font-bold !mb-[1em] text-[#333]">Login</legend>
                    <div className="flex flex-col gap-[0.2em]">
                        <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="email">Email:</label>
                        <input
                            className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]"
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="flex flex-col gap-[0.2em]">
                        <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="password">Password:</label>
                        <input
                            className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]"
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                        />
                    </div>
                    <button className="action-btn !mt-[1em]" type="submit">
                        Login
                    </button>
                    <p className="!mt-[1em] text-[1em] text-[#555] text-center">
                        You don't have an account? <Link className="font-semibold text-[#4a90e2]" to="/sign-up">Click here to sign up</Link>
                    </p>
                    </fieldset>
                </form>

                <aside className="flex-1 flex items-center justify-center">
                    <img className="max-w-[90%] h-auto rounded-[0.75em] object-cover" src="/images/login.png" alt="Login Illustration" />
                </aside>
            </section>
        </div>
    )
}