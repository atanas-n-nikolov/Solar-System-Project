import { Link, useNavigate } from "react-router";
import { UserContext } from "../../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { useRegister } from "../../../api/authAPI";
import ErrorNotification from "../../error/ErrorNotification";
import { useTranslation } from "react-i18next";

export default function Register() {
    const { t } = useTranslation();
    const { userLoginHandler } = useContext(UserContext);
    const [error, setError] = useState(null);
    const { register } = useRegister();
    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])(.{8,})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, rePassword } = formData;

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !rePassword.trim()) {
            setError('forms.emptyFields');
            return
        };

        if (firstName.length < 3) {
            setError('forms.firstName');
            return
        };

        if (lastName.length < 3) {
            setError("forms.lastName.");
            return
        };

        if (!emailRegex.test(email)) {
            setError("forms.emailRegex");
            return
        };

        if (email.length < 5) {
            setError("forms.email");
            return
        };

        if (!passwordRegex.test(password)) {
            setError("forms.passRegex");
            return
        }
        
        if (password.length < 8) {
            setError("forms.password");
            return
        };

        if (password !== rePassword) {                        
            setError("forms.passMatch");
            return
        };

        try {
            const resultData = await register( firstName, lastName, email, password, rePassword );
            userLoginHandler(resultData);
            navigate("/");
        } catch (err) {
            if(err.message === 'duplicateKeyError') {
                setError('forms.duplicateKeyError')
            }
        }

    };
    return (
        <div className="max-w-[1400px] w-full text-left !pl-[2em] !pr-[2em] !ml-auto !mr-auto">
            {error && <ErrorNotification error={error}/>}
            <section className="flex justify-center items-center bg-[#eee] gap-[5em] h-[900px]">
                <form onSubmit={handleSubmit} className="flex-1 bg-white max-w-[70ch] flex flex-col gap-[1em] !p-[4em] rounded-[0.5em] r-form" autoComplete="on">
                    <fieldset className="flex flex-col justify-center gap-[1em]">
                        <legend className="text-[2em] !mb-[1em] text-[#333] font-bold">{t('forms.registerLegend')}</legend>
                        <div className="flex gap-[1em]">
                            <div className="flex-1 flex flex-col gap-[0.2em]">
                                <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="firstName">{t('forms.labelFirstName')}</label>
                                <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="text" id="firstName" value={formData.firstName} onChange={handleChange} name="firstName" autoComplete="given-name" />
                            </div>
                            <div className="flex-1 flex flex-col gap-[0.2em]">
                                <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="lastName">{t('forms.labelLastName')}</label>
                                <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="text" id="lastName" value={formData.lastName} onChange={handleChange} name="lastName" autoComplete="family-name" />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="email">{t('forms.labelEmail')}</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="text" id="email" value={formData.email} onChange={handleChange} name="email" autoComplete="email" />
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="password">{t('forms.labelPassword')}</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="password" id="password" value={formData.password} onChange={handleChange} name="password" autoComplete="new-password" />
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="rePassword">{t('forms.labelRePassword')}</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="password" id="rePassword" value={formData.rePassword} onChange={handleChange} name="rePassword" autoComplete="new-password" />
                        </div>

                        <button className="action-btn !mt-[1em]" type="submit">{t('forms.registerLegend')}</button>
                        <p className="text-[1em] !mt-[1em] text-[#555] text-center">
                            {t('forms.registerP1')} <Link className="text-[#4a90e2] font-semibold" to="/login">{t('forms.registerP2')}</Link>
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