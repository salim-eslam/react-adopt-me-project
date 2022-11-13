import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pet from './components/Pet'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SearchParams from './pages/SearchParams'
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter className="App">
      <header>

     <Link to="/">Adopt ME!</Link>
      </header>
     <Routes>
      <Route path='/' element={<SearchParams/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
     
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App
