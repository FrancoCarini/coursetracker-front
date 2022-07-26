import { useEffect, useContext } from 'react'
import {
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaBug,
  FaUserGraduate,
} from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'

import CourseContext from '../context/CourseContext'
import Loading from '../components/Loading'
import StatItem from './StatItem'

const Stats = () => {
  useEffect(() => {
    showStats()
    // eslint-disable-next-line
  }, [])

  const { isLoading, stats } = useContext(CourseContext)

  const defaultStats = [
    {
      title: 'Not Started',
      count: stats['not started'] || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'On Going',
      count: stats['on going'] || 0,
      icon: <FaUniversity />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Finished',
      count: stats.declined || 0,
      icon: <FaUserGraduate />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
    {
      title: 'Abandoned',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  if (isLoading) return <Loading center />

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}
export default Stats
