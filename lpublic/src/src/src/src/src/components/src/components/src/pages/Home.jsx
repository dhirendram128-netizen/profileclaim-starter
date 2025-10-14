

```jsx
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'


export default function Home(){
const [profiles, setProfiles] = useState([])


useEffect(()=>{
async function load(){
const q = query(collection(db, 'profiles'), orderBy('createdAt','desc'), limit(10))
const snap = await getDocs(q)
setProfiles(snap.docs.map(d=>({id:d.id, ...d.data()})))
}
load()
},[])


return (
<div>
<h1 className="text-2xl font-bold mb-4">Latest Verified Profiles</h1>
<div className="space-y-3">
{profiles.map(p=> (
<Link key={p.id} to={`/profile/${p.id}`} className="block p-3 bg-white rounded shadow">
<div className="flex items-center gap-3">
<img src={p.photoUrl} alt="avatar" className="w-12 h-12 rounded-full"/>
<div>
<div className="font-semibold">{p.displayName || 'Unnamed'}</div>
<div className="text-xs text-slate-500">{p.handle || ''}</div>
</div>
</div>
</Link>
))}
</div>
</div>
)
}
```
