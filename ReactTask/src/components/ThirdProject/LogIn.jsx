export default function LoginPart(){
    return (
            <>
                <form action="">
                    <input type="email" className="border-solid border-zinc-300 border-2 w-full h-10 rounded-xl p-5" placeholder="Email Address"/><br /><br />
                    <input type="password" className="border-solid border-zinc-300 border-2 w-full h-10 rounded-xl p-5" placeholder="Password"/><br />
                    <a href="" className="text-sky-600 my-1 inline-block">Forgot password?</a><br /><br />
                    <button className="border-solid border w-full h-12 rounded-2xl bg-gradient-to-l from-blue-900 to-blue-700 font-semibold text-lg text-white">Login</button>
                </form>
            </>
            
    )
}