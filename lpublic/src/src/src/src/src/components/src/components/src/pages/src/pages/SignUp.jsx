```jsx
import React, {useState} from 'react'
import { auth, provider } from '../firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export default function SignUp(){
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [msg, setMsg] = useState('')
const nav = useNavigate()


async function doEmail(){
try{
await createUserWithEmailAndPassword(auth, email, pass)
nav('/claim')
}catch(e){ setMsg(e.message) }
}


async function doGoogle(){
try{
await signInWithPopup(auth, provider)
nav('/claim')
}catch(e){ setMsg(e.message) }
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-bold mb-3">Sign Up</h2>
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded mb-2"/>
<input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="password" className="w-full p-2 border rounded mb-2"/>
<div className="flex gap-2">
<button onClick={doEmail} className="px-4 py-2 bg-slate-800 text-white rounded">Create</button>
<button onClick={doGoogle} className="px-4 py-2 border rounded">Sign in with Google</button>
</div>
{msg && <div className="text-red-500 mt-2">{msg}</div>}
</div>
)
}
```
