import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`${styles} py-4 font-poppins font-medium text-[18px] text-primary outline-none px-6 bg-blue-gradient rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button
