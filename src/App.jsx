import { useRoutes } from 'react-router-dom'
import routes from './router/index.jsx';
import ToastManager from './components/ToastManager.jsx';
function App() {
  const element = useRoutes(routes)
  return (
    <>
      {element}
      <ToastManager />
    </>
  )
}

export default App
