```jsx
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Claim from './pages/Claim'
import ProfileView from './pages/ProfileView'
import Admin from './pages/Admin'
import Nav from './components/Nav'


export default function App(){
return (
<div className="min-h-screen bg-slate-50">
<Nav />
<div className="max-w-3xl mx-auto p-4">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/signup" element={<SignUp/>} />
<Route path="/claim" element={<Claim/>} />
<Route path="/profile/:id" element={<ProfileView/>} />
<Route path="/admin" element={<Admin/>} />
</Routes>
</div>
</div>
)
}
```
