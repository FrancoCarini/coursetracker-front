import { useEffect, useContext } from 'react'
import {
  FaSuitcaseRolling,
  FaWindowClose,
  FaUserGraduate,
  FaUniversity,
} from 'react-icons/fa'
import Wrapper from '../../assets/wrappers/StatsContainer'

import CourseContext from '../../context/CourseContext'
import Loading from '../../components/Loading'
import StatItem from '../../components/StatItem'

const Stats = () => {
  const { isLoading, stats, getStats } = useContext(CourseContext)

  useEffect(() => {
    getStats()
    // eslint-disable-next-line
  }, [])

  const defaultStats = [
    {
      title: 'Not Started',
      count: stats['Not started'] || 0,
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
      count: stats.finished || 0,
      icon: <FaUserGraduate />,
      color: '#28a745',
      bcg: '#abf7b1',
    },
    {
      title: 'Abandoned',
      count: stats.abandoned || 0,
      icon: <FaWindowClose />,
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
