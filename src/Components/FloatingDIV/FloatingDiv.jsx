import React from 'react'
import './Floating.css'

function FloatingDiv({emoge,text1,text2}) {
  return (
    <div className='Float'>
        <img src={emoge} alt="" />
        <span>{text1}
            <br />
            {text2}
        </span>


    </div>
  )
}

export default FloatingDiv