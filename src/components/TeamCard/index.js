import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <li className="team-list">
      <Link className="link-lists" to={`/team-matches/${id}`}>
        <div className="team-cont">
          <img className="team-image" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
