import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';

const CandidateContext = createContext();

const CadidateContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0)
    const [confirmedCount, setConfirmedCount] = useState(0)
    const [refusedCount, setRefusedCount] = useState(0)

    const refreshStatusCounts = async () => {
        const {data} = await axios.get('/api/candidatetracker/GetCountsForStatuses')
        setPendingCount(data.pendingCount)
        setConfirmedCount(data.confirmedCount)
        setRefusedCount(data.refusedCount)
    }

    useEffect(() => {
        refreshStatusCounts()
    },[])

    return (<CandidateContext.Provider value={{pendingCount, confirmedCount, refusedCount, refreshStatusCounts}}>
        {children}
    </CandidateContext.Provider>)
}

const useCandidateCount = () => {
    return useContext(CandidateContext)
}

export { CadidateContextComponent, useCandidateCount }