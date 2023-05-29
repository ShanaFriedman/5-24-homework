import React from 'react';

const CandidateRow = ({candidate, showNotes}) => {
    return(<tr>
        <td>{candidate.firstName}</td>
        <td>{candidate.lastName}</td>
        <td>{candidate.phone}</td>
        <td>{candidate.email}</td>
        {showNotes && <td>{candidate.notes}</td>}
    </tr>)

}

export default CandidateRow