import React, { useState, useEffect } from 'react';
import CandidateRow from './CandidateRow';
import axios from 'axios';

const Confirmed = () => {

  const [confirmedCandidates, setConfirmedCandidates] = useState([])
  const [showNotes, setShowNotes] = useState(true)

  useEffect(() => {
    const getConfirmedPeople = async() => {
      const {data} = await axios.get('/api/CandidateTracker/GetByStatus', { params: { status: 'confirmed' } })
      setConfirmedCandidates(data)
      console.log(data)
    }
    getConfirmedPeople()
  }, [])

  const onToggleNotesClicked = () => {
    setShowNotes(!showNotes)
  }

  return (<><div>
    <h1>Confirmed</h1>
    <div>
      <button className="btn btn-success" onClick={onToggleNotesClicked} fdprocessedid="wxhtmus">
        Toggle Notes
      </button>
      <table className="table table-hover table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          {showNotes && <th>Notes</th>}
          </tr>
        </thead>
        <tbody>
          {confirmedCandidates.map(c => <CandidateRow key={c.id}
            candidate={c}
            showNotes={showNotes} />)}
        </tbody>
      </table>
    </div>
  </div>
  </>
  )
}
export default Confirmed