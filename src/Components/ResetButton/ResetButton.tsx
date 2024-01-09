import React from 'react';

interface ResetButtonProps {
    onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
    return (
        <button style={{ padding: '10px', fontSize: '16px', margin: '10px', cursor: 'pointer' }} onClick={onClick}>
            Сброс
        </button>
    );
};

export default ResetButton;
