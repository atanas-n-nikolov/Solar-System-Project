import { Link, useNavigate } from "react-router";
import { UserContext } from "../../../context/UserContext";
import { useContext, useState } from "react";
import { useRegister } from "../../../api/authAPI";

export default function Register() {
    const { userLoginHandler } = useContext(UserContext);
    const { register } = useRegister();
    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])(.{8,})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
            alert("All fields are required.", "error");
            return
        };

        if (firstName.length < 3) {
            alert("Firstname should be at least 3 characters long.");
            return
        };

        if (lastName.length < 3) {
            alert("Lastname should be at least 3 characters long.");
            return
        };

        if (!emailRegex.text(email)) {
            alert("Please enter a valid email address.");
            return
        };

        if (email.length < 5) {
            alert("Email should be at least 5 characters long.");
            return
        };

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return
        };

        if (password !== rePassword) {
            alert("Password missmatch!");
            return
        };

        try {
            const resultData = await register(firstName, lastName, email, password, rePassword);
            userLoginHandler(resultData);
            navigate("/");
        } catch (err) {
            alert(err.message || 'Invalid registration. Please try again later.');
        }

    };
    return (
        <div className="max-w-[1400px] w-full text-left !pl-[2em] !pr-[2em] !ml-auto !mr-auto">
            <section className="flex justify-center items-center bg-[#eee] gap-[5em] h-[900px]">
                <form onSubmit={handleSubmit} className="flex-1 bg-white max-w-[70ch] flex flex-col gap-[1em] !p-[4em] rounded-[0.5em] r-form" autoComplete="on">
                    <fieldset className="flex flex-col justify-center gap-[1em]">
                        <legend className="text-[2em] !mb-[1em] text-[#333] font-bold">Sign up</legend>
                        <div className="flex gap-[1em]">
                            <div className="flex-1 flex flex-col gap-[0.2em]">
                                <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="firstName">First name:</label>
                                <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="text" id="firstName" value={formData.firstName} onChange={handleChange} name="firstName" autoComplete="given-name" />
                            </div>
                            <div className="flex-1 flex flex-col gap-[0.2em]">
                                <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="lastName">Last name:</label>
                                <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="text" id="lastName" value={formData.lastName} onChange={handleChange} name="lastName" autoComplete="family-name" />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="email">Email:</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="email" id="email" value={formData.email} onChange={handleChange} name="email" autoComplete="email" />
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="password">Password:</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="password" id="password" value={formData.password} onChange={handleChange} name="password" autoComplete="new-password" />
                        </div>

                        <div className="flex-1 flex flex-col gap-[0.2em]">
                            <label className="!mb-[0.4em] font-semibold text-[#555]" htmlFor="rePassword">Repeat password:</label>
                            <input className="focus:outline-none focus:border-[#4a90e2] !pt-[0.75em] !pb-[0.75em] !pl-[1em] !pr-[1em] rounded-[0.5em] text-[1em] border border-[#ccc]" type="password" id="rePassword" value={formData.rePassword} onChange={handleChange} name="rePassword" autoComplete="new-password" />
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