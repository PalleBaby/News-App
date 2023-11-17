// import React, { Component } from 'react'
import React from 'react'
import loading from '../loading.gif'

// export default class Loading extends Component {
const Loading = () => {
  // render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading spinner' />
      </div>
    )
  // }
}
export default Loading
