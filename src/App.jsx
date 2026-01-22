import { useRoutes } from 'react-router-dom'
import routes from './router/index.jsx';
function App() {
  const element = useRoutes(routes)
  return (
    <>
      {element}
    </>
  )
}

export default App
