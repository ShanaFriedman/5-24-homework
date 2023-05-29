import React, { useState } from 'react';
import axios from 'axios';
import { useCandidateCount } from './CandidateContextComponent';
import { useNavigate } from "react-router-dom";

const AddCandidate = () => {
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        notes: ''
    })

    const {refreshStatusCounts} = useCandidateCount()
    const navigate = useNavigate();

    const onCandidateTextBoxChange = e => {
        const copy = { ...candidate }
        copy[e.target.name] = e.target.value
        setCandidate(copy)
    }
    const onSubmitClick = async () => {
        await axios.post('/api/candidatetracker/addcandidate', candidate)
        await refreshStatusCounts()
        navigate('/')
    }
    return (<>
        <div className="card card-body bg-light">
            <h4>Add Candidate</h4>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-control"
                value={candidate.firstName}
                onChange={onCandidateTextBoxChange}
            />
            <br />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
                value={candidate.lastName}
                onChange={onCandidateTextBoxChange}
            />
            <br />
            <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"
                value={candidate.email}
                onChange={onCandidateTextBoxChange}
            />
            <br />
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="form-control"
                value={candidate.phone}
                onChange={onCandidateTextBoxChange}
            />
            <br />
            <textarea
                rows={5}
                className="form-control"
                name="notes"
                value={candidate.notes}
                onChange={onCandidateTextBoxChange}
            />
            <br />
            <button className="btn btn-primary" onClick={onSubmitClick} fdprocessedid="uqgaru">
                Submit
            </button>

        </div>
    </>
    )
}

export default AddCandidate