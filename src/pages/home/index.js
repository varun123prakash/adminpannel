import { useNavigate } from "react-router-dom"

const Home = () => {
      const navigate = useNavigate()
      const handleClick = () => {
            navigate('./profile')
      }
      return(
            <div>
                  Home screens
                  <button type="submit" onClick={handleClick}>click me</button>
            </div>
      )
}
export default Home