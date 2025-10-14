```jsx


useEffect(()=>{
const unsub = onAuthStateChanged(auth, u=> setUser(u))
return unsub
},[])


async function submit(){
if(!user) return setMsg('Please sign in first')
setLoading(true)
try{
let photoUrl = ''
if(file){
const r = ref(storage, `profiles/${user.uid}/${Date.now()}-${file.name}`)
await uploadBytes(r, file)
photoUrl = await getDownloadURL(r)
}
const doc = await addDoc(collection(db,'profiles'),{
uid: user.uid,
displayName,
handle,
links: links.split('\n').map(l=>l.trim()).filter(Boolean),
photoUrl,
createdAt: serverTimestamp(),
verified: false
})
setMsg('Profile created. Complete verification steps to become verified.')
}catch(e){ setMsg(e.message) }
setLoading(false)
}


if(loading) return <Loader />


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-bold mb-3">Create Profile Claim</h2>
{!user && <div className="text-sm text-slate-500 mb-2">Please sign in first.</div>}
<input value={displayName} onChange={e=>setDisplayName(e.target.value)} placeholder="Display name" className="w-full p-2 border rounded mb-2"/>
<input value={handle} onChange={e=>setHandle(e.target.value)} placeholder="Handle (e.g. @yourname)" className="w-full p-2 border rounded mb-2"/>
<textarea value={links} onChange={e=>setLinks(e.target.value)} placeholder="Paste one social link per line" className="w-full p-2 border rounded mb-2"/>
<div className="mb-2">
<label className="text-sm">Upload profile photo (optional)</label>
<input type="file" onChange={e=>setFile(e.target.files[0])} />
</div>
<button onClick={submit} className="px-4 py-2 bg-slate-800 text-white rounded">Create Claim</button>
{msg && <div className="mt-2 text-sm">{msg}</div>}
</div>
)
}
`
