import './index.css'

const MatchCard = props => {
  const {eachRecent} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachRecent

  const resultColor = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-card">
      <img
        className="card-image"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-para">{competingTeam}</p>
      <p className="match-card-para">{result}</p>
      <p className={resultColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
