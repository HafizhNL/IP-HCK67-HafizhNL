import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const login = async (event) => {
        event.preventDefault();
        try {
            const reqBody = {
                email,
                password
            }

            const response = await axios.post(
                "http://localhost:3000/login", reqBody
            )

            localStorage.setItem("access_token", response.data.access_token);
            // console.log(response.data.access_token);
            console.log("done");

            navigate("/");
        } catch (error) {
            console.log(error);
            // console.log(err);
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: err.response.data.message,
            // });
        }
    }

    return (
        <>
            {/* component */}
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                {/* Left: Image */}
                <div className="w-1/2 h-screen hidden lg:block">
                    <img
                        src="data:image/png;base64,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"
                        alt="Placeholder Image"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form onSubmit={login}>
                        {/* Username Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                                Email
                            </label>
                            <input
                                value={email}

                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">
                                Password
                            </label>
                            <input
                                value={password}

                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                required
                            />
                        </div>
                        {/* Forgot Password Link */}
                        <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        {/* Login Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Login
                        </button>
                    </form>
                    {/* Sign up  Link */}
                    <div className="mt-6 text-blue-500 text-center">
                        <Link to={"/register"} className="hover:underline">
                            Sign up Here
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}