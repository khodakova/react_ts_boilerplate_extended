import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from '@src/layouts';
import PageLoading from '@src/components/pageLoading';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {

    return (
        <Router>
            <Suspense fallback={ <PageLoading show/> }>
                <Layout/>
                <PageLoading/>
            </Suspense>
            <ToastContainer/>
        </Router>
    );
};

export default App;
