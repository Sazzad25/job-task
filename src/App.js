
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
