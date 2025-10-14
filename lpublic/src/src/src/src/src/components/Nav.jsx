```jsx
import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav(){
return (
<nav className="bg-white shadow">
<div className="max-w-3xl mx-auto p-4 flex justify-between items-center">
<Link to="/" className="font-bold text-lg">ProfileClaim</Link>
<div className="space-x-3">
<Link to="/signup" className="text-sm">Sign Up</Link>
<Link to="/claim" className="text-sm">Create Claim</Link>
<Link to="/admin" className="text-sm">Admin</Link>
</div>
</div>
</nav>
)
}
```
