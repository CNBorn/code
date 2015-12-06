import React from 'react';

export default class Icon extends React.Component {

  render() {
    switch(this.props.type) {

      case 'circle_error':
        return (
          <svg viewBox="0 0 20 20">
          <path d="M10,0.982c4.973,0,9.018,4.046,9.018,9.018S14.973,19.018,10,19.018S0.982,14.973,0.982,10
            S5.027,0.982,10,0.982 M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0L10,0z M9,5.703
            V5.441h2.5v0.262l-0.66,5.779H9.66L9,5.703z M9.44,12.951h1.621v1.491H9.44V12.951z"/>
          </svg>
        )

      case 'circle_tick':
        return (
          <svg viewBox="0 0 23 23">
          <path d="M11.5,23C5.2,23,0,17.8,0,11.5S5.2,0,11.5,0S23,5.2,23,11.5S17.8,23,11.5,23z M11.5,1C5.7,1,1,5.7,1,11.5S5.7,22,11.5,22
            S22,17.3,22,11.5S17.3,1,11.5,1z M10.4,15.2l6.7-7c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L10,14.2L7,11
            c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l3.4,3.5c0.1,0.1,0.2,0.1,0.3,0.1S10.3,15.3,10.4,15.2z"/>
          </svg>
        )

      case 'circle_tick_filled':
        return (
          <svg viewBox="0 0 20 20">
            <path fill="#4FB07F" d="M9.5,0C14.7,0,19,4.3,19,9.5S14.7,19,9.5,19S0,14.7,0,9.5S4.3,0,9.5,0z"/>
            <path fill="#FFFFFF" d="M8.7,12.9c-0.1,0-0.2,0-0.3-0.1l-2.4-2.5c-0.1-0.1-0.1-0.4,0-0.5c0.1-0.2,0.4-0.2,0.5,0L8.7,12l4.6-5
              c0.1-0.1,0.4-0.1,0.5,0c0.1,0.2,0.1,0.4,0,0.5L9,12.8C9,12.8,8.9,12.9,8.7,12.9C8.8,12.9,8.8,12.9,8.7,12.9z"/>
          </svg>
        )

      case 'guthub':
        return (
          <svg viewBox="0 0 34 34">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#191717" d="M32.6,16.3c0,7.2-4.7,13.3-11.1,15.5c-0.8,0.2-1.1-0.3-1.1-0.8
            c0-0.5,0-2.3,0-4.5c0-1.5-0.5-2.5-1.1-3c3.6-0.4,7.4-1.8,7.4-8c0-1.8-0.6-3.2-1.7-4.4c0.2-0.4,0.7-2.1-0.2-4.3c0,0-1.4-0.4-4.5,1.7
            c-1.3-0.4-2.7-0.5-4.1-0.5c-1.4,0-2.8,0.2-4.1,0.5C9.1,6.3,7.7,6.8,7.7,6.8C6.8,9,7.4,10.7,7.6,11.1c-1,1.1-1.7,2.6-1.7,4.4
            c0,6.2,3.8,7.6,7.4,8.1c-0.5,0.4-0.9,1.1-1,2.2c-0.9,0.4-3.3,1.1-4.7-1.4c0,0-0.9-1.6-2.5-1.7c0,0-1.6,0-0.1,1c0,0,1.1,0.5,1.8,2.4
            c0,0,1,3.2,5.5,2.2c0,1.4,0,2.4,0,2.8c0,0.4-0.3,0.9-1.1,0.8C4.7,29.6,0,23.5,0,16.3C0,7.3,7.3,0,16.3,0C25.3,0,32.6,7.3,32.6,16.3z
            "/>
          </svg>
        )
    }
  }
}