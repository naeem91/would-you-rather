import { useLocation } from 'react-router-dom'

export default function PageNotFound() {
  let location = useLocation()

  return (
    <div>
      <h3>
        Page Not Found: No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
