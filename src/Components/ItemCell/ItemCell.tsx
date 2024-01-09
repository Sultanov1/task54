import React from 'react';

interface ItemCellProps {
    onClick: () => void;
    hasItem: boolean;
    clicked: boolean;
}

const ItemCell: React.FC<ItemCellProps> = ({ onClick, hasItem, clicked }) => {
    const cellClass = clicked ? 'cell clicked' : 'cell';
    const content = clicked ? (hasItem ? 'O' : '') : '';

    const cellStyle = {
        backgroundColor: hasItem && clicked ? 'transparent' : '',
        border: hasItem && clicked ? 'none' : '',
        padding: '20px',
        margin: '5px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    return (
        <div className={cellClass} style={cellStyle} onClick={onClick}>
            {content}
        </div>
    );
};

export default ItemCell;