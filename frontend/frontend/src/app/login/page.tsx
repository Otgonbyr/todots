import axios from "axios";

export default function LogIn() {
    const page = () => {
        
    }
    return(
        <section>
            <div>
                <h1>Login</h1>
                <form className="flex flex-col gap-[10px]" action="">
                    <label htmlFor="">
                        name
                        <input placeholder="Enter your username" type="text" />
                    </label>
                    <label htmlFor="">
                        password
                        <input placeholder="Enter your password" type="text" />
                    </label>
                </form>
                <button>Log in</button>
            </div>
        </section>
    )
}