import React from 'react';
import { ITag } from './types';
import HomeTag from './components/tag';

const keywords: Array<ITag> = [
    { label: 'React.js' },
    { color: '#84c6e8', label: 'Webpack 5' },
    { color: '#f5da55', label: 'Babel' },
    { color: '#15c213', label: 'jest' },
    { color: '#e94949', label: 'react-router' },
    { color: '#bf4080', label: 'sass' },
];

const Dashboard: React.FC = () => {
    return (
        <div className='row home'>
            <div className='container'>
                <div className='title'>
                    React typescript webpack boilerplate extended
                </div>
                <div>
                    <div className='keywords'>
                        <i>
                            { keywords.map(key => (
                                <HomeTag color={ key.color } label={ key.label } key={ key.label }/>
                            )) }
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
