import React from 'react';

interface AttemptsCounterProps {
    attempts: number;
}

const AttemptsCounter: React.FC<AttemptsCounterProps> = ({ attempts }) => {
    return (
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Попыток: {attempts}</p>
    );
};

export default AttemptsCounter;