import Wrapper from '../assets/wrappers/JobInfo'

const CourseInfo = ({ icon, text, url }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      {url ? (
        <span className="text">
          <a href={url} target="_blank">
            {text}
          </a>
        </span>
      ) : (
        <span className="text">{text}</span>
      )}
    </Wrapper>
  )
}

export default CourseInfo
