import React from 'react'

const NoteItems = (props: any) => {
    const {note} = props

  return (
    <div className='container-flex-col' style={{margin: "auto"}}>
      <h3 style={{margin: "5px"}}>{note.title}</h3>
      <p>{note.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus ad, molestias iure consequuntur deserunt atque sed dolorum itaque voluptate deleniti est quasi labore culpa esse, error dolore alias asperiores.</p>
    </div>
  )
}

export default NoteItems
