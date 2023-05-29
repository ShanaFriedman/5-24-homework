import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCandidateCount } from './CandidateContextComponent';

const Details = ({}) => {

  const {refreshStatusCounts} = useCandidateCount()
  const [candidate, setCandidate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [didSet, setDidSet] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getCandidate = async () => {
      const { data } = await axios.get('/api/candidatetracker/getcandidate', { params: { id: id } })
      setCandidate(data)
    }
    getCandidate()
  }, [])

  const onSetStatusClick = async(status) => {
    await axios.post('/api/candidatetracker/UpdateStatus', {candidate: candidate, registrationStatus: status})
    setDidSet(true)
    await refreshStatusCounts()
  }
 

  return (<><div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card card-body bg-light">
        <h4>Name: {candidate.lastName} {candidate.firstName} </h4>
        <h4>Email: {candidate.email}</h4>
        <h4>Phone: {candidate.phone}</h4>
        <h4>Status: {candidate.registrationStatus}</h4>
        <h4>Notes:</h4>
        <p>{candidate.notes}</p>
        {!didSet && <div>
          <button className="btn btn-primary" onClick={() => onSetStatusClick('Confirmed')} fdprocessedid="vaqowa">
            Confirm
          </button>
          <button className="btn btn-danger" onClick={() => onSetStatusClick('refused')} fdprocessedid="awoasp">
            Refuse
          </button>
        </div>}
      </div>
    </div>
  </div>
  </>)
}

export default Details