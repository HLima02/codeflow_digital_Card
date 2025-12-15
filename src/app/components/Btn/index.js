import React from 'react'

export default function Btn({label, link, icon}) {
  return (
    <a href={`${link}`} target='_blank'>
      {icon}
      <span>{label}</span>
    </a>
  )
}
