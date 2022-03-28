import React from 'react';
import AppRouter from '@src/layouts/AppRouter';

const Main: React.FC = () => {

    return (
        <div id='main'>
            <div className='home'>
                <div className='container'>
                    <AppRouter/>
                </div>
            </div>
        </div>
    );
};

export default Main;
