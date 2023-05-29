import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import Confirmed from './Confirmed';
import Refused from './Refused';
import Details from './Details';
import { CadidateContextComponent } from './CandidateContextComponent';

    const App = () => {
        return (
            <CadidateContextComponent>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/addcandidate' element={<AddCandidate/>}/>
                        <Route exact path='/pending' element={<Pending/>}/>
                        <Route exact path='/confirmed' element={<Confirmed/>}/>
                        <Route exact path='/refused' element={<Refused/>}/>
                        <Route exact path='/details/:id' element={<Details/>}/>
                    </Routes>
                </Layout>
            </CadidateContextComponent>
        );
    }

export default App;