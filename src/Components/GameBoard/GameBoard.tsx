import React from 'react';
import ItemCell from "../ItemCell/ItemCell";


interface GameBoardProps {
    items: { hasItem: boolean; clicked: boolean }[];
    onItemClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ items, onItemClick }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
            {items.map(({ hasItem, clicked }, index) => (
                <ItemCell
                    key={index}
                    onClick={() => onItemClick(index)}
                    hasItem={hasItem}
                    clicked={clicked}
                />
            ))}
        </div>
    );
};

export default GameBoard;
