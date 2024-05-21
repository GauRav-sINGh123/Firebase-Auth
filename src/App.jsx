import { Routes, Route } from 'react-router-dom'
import { Login, Signup, Account } from './components/index.js'
import { AuthContextProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.js'
 function App() {
   return (
     <div>
       <h1 className='text-center text-xl font-semibold '>Firebase Authentication</h1>
       <AuthContextProvider>
       <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/signup" element={<Signup />} />
         <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account/>
              </ProtectedRoute>
            }
          />
       </Routes>
       </AuthContextProvider>
     </div>
   )
 }
 
 export default App