import React from 'react'

const NoteItems = (props: any) => {
  const { note } = props

  return (
    <div className='container-flex-col' style={{ margin: "auto" }}>
      <h3 style={{ margin: "5px" }}>{note.title}</h3>
      <p style={{ textAlign: "start" }}>{note.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus ad, molestias iure consequuntur deserunt atque sed dolorum itaque voluptate deleniti est quasi labore culpa esse, error dolore alias asperiores.</p>
      <div style={{display: "flex", width: "60px", justifyContent: "space-between"}}>
        <span className="material-symbols-outlined" style={{cursor: "pointer"}}>
          edit
        </span>
        <span className="material-symbols-outlined" style={{cursor: "pointer"}}>
          delete
        </span>
      </div>
    </div>
  )
}

export default NoteItems
