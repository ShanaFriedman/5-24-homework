import React, { useState, useEffect } from 'react';
import PendingRow from './PendingRow';
import axios from 'axios';

const Pending = () => {

  const [pendingCandidates, setPendingCandidates] = useState([])

    useEffect(() => {
        const getPendingCandidates = async() => {
          const {data} = await axios.get('/api/CandidateTracker/GetByStatus', { params: { status: 'pending' } })
          setPendingCandidates(data)
          console.log(data)
        }
        getPendingCandidates()
      }, [])

return(<>
<table className="table table-hover table-striped table-bordered">
    <thead>
      <tr>
        <th />
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {pendingCandidates.map(p => <PendingRow key={p.id}
      candidate={p}/>)}
    </tbody>
  </table>
</>)
}

export default Pending