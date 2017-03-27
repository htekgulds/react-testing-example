import * as React from 'react'

const Title = ({title}) => <h1>{title}</h1>

Title.defaultProps = {
  title: 'Default Title'
}
export default Title

