import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <Routes>
            <Route path='/' element={<App />} />
        </Routes> */}

        <App/>
    </BrowserRouter>

)
