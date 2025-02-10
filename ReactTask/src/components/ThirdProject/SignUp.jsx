export default function SignupPart(){
    return (
       <>
        <form action="">
            <input type="text" className="border-solid border-zinc-300 border-2 w-full h-10 rounded-xl p-5 " placeholder="Name"/><br />
            <input type="email" className="border-solid border-zinc-300 border-2 w-full h-10 rounded-xl p-5 mt-5" placeholder="Email Address"/><br />
            <input type="password" className="border-solid border-zinc-300 border-2 w-full h-10 rounded-xl p-5 mt-5" placeholder="Password"/><br />
            <input type="password" className="border-solid border-zinc-300 border-2 w-full h-10 rounded-xl p-5 mt-5 mb-6" placeholder="Confirm password"/><br />
            <button className="border-solid border w-full h-12 rounded-2xl bg-gradient-to-l from-blue-900 to-blue-700 font-semibold text-lg text-white">Signup</button>
        </form>
       </>
            
    )
}