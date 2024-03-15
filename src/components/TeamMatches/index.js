import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachRecentMatch => ({
        umpires: eachRecentMatch.umpires,
        result: eachRecentMatch.result,
        manOfTheMatch: eachRecentMatch.man_of_the_match,
        id: eachRecentMatch.id,
        date: eachRecentMatch.date,
        venue: eachRecentMatch.venue,
        competingTeam: eachRecentMatch.competing_team,
        competingTeamLogo: eachRecentMatch.competing_team_logo,
        firstInnings: eachRecentMatch.first_innings,
        secondInnings: eachRecentMatch.second_innings,
        matchStatus: eachRecentMatch.match_status,
      })),
    }
    console.log(updatedData)

    this.setState({teamData: updatedData, isLoading: false})
  }

  renderTeamMatchesDetails = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="team-match-bg">
        <img className="team-banner" src={teamBannerUrl} alt="team banner" />

        <ul className="latest-match-container">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </ul>

        <ul className="match-card-container">
          {recentMatches.map(eachRecent => (
            <MatchCard eachRecent={eachRecent} key={eachRecent.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderTeamMatchesDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
