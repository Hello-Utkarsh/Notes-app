import React, { useContext } from 'react'
import Notes from './Notes'


const Home = () => {


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
      <form style={{ margin: '30px 10px' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div style={{margin: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Your Notes</h1>
        <Notes/>
      </div>
    </div>
  )
}

export default Home
