import React from 'react'

const AppTitle = (props) => {
    const {title="Box Office",Subtitle="Are you looking For Movies ?"} =props
  return (
    <div>
        <h1>{title}</h1>
        <p>{Subtitle}</p>
    </div>
  )
}

export default AppTitle