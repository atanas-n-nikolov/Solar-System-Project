import { Link, useNavigate } from "react-router";
import { useLogin } from "../../../api/authAPI";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { useTranslation } from "react-i18next";
import ErrorNotification from "../../error/ErrorNotification";

export default function Login() {
    const { t } = useTranslation();
    const { userLoginHandler } = useContext(UserContext);
    const [error, setError] = useState(null);
    const { login } = useLogin();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email.trim() || !password.trim()) {
            setError('forms.emptyFields');
            return
        };

        try {
            const authData = await login(email, password);
            userLoginHandler(authData);
            navigate("/");
        } catch (error) {
            setError('forms.invalidCredentials');
            return
        }
    }

    return (
        <div className="text-left max-w-[1400px] w-full !pl-[2em] !pr-[2em] !ml-auto !mr-auto">
            {error && <ErrorNotification error={error} />}
            <section className="flex justify-center items-center bg-[#eee] gap-[5em] h-[900px]">
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col max-w-[70ch] bg-white gap-[1em] !p-[4em] rounded-[0.5em] r-form" autoComplete="on">
                    <fieldset className="flex flex-col justify-center gap-[1em]">
                        <legend className="text-[2em] font-bold !mb-[1em] text-[#333]">{t('forms.loginLegend')}</legend>
                        <div className="flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="email">{t('forms.labelEmail')}</label>
                            <input
                                className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                                autoComplete="email"
                            />
                        </div>
                        <div className="flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="password">{t('forms.labelPassword')}</label>
                            <input
                                className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]"
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                name="password"
                                autoComplete="current-password"
                            />
                        </div>
                        <button className="action-btn !mt-[1em]" type="submit">
                            {t('forms.loginLegend')}
                        </button>
                        <p className="!mt-[1em] text-[1em] text-[#555] text-center">
                            {t('forms.loginP1')} <Link className="font-semibold text-[#4a90e2]" to="/sign-up">{t('forms.loginP2')}</Link>
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