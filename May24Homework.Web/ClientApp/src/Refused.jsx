import React, { useState, useEffect } from 'react';
import CandidateRow from './CandidateRow';
import axios from 'axios';

const Refused = () => {
    const [refusedCandidates, setRefusedCandidates] = useState([])
  const [showNotes, setShowNotes] = useState(true)

    useEffect(() => {
        const getRefusedPeople = async() => {
          const {data} = await axios.get('/api/CandidateTracker/GetByStatus', { params: { status: 'refused' } })
          setRefusedCandidates(data)
          console.log(data)
        }
        getRefusedPeople()
      }, [])
    
      const onToggleNotesClicked = () => {
        setShowNotes(!showNotes)
      }
    
    return (<><div>
        <h1>Refused</h1>
        <div>
            <button className="btn btn-success" onClick={onToggleNotesClicked} fdprocessedid="uh92l6">
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
                {refusedCandidates.map(c => <CandidateRow key={c.id}
            candidate={c}
            showNotes={showNotes} />)}
                </tbody>
            </table>
        </div>
    </div>
    </>
    )
}

export default Refused;