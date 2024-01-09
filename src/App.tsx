import React, { useState } from 'react';
import AttemptsCounter from './Components/AttemptsCounter/AttemptsCounter';
import ResetButton from './Components/ResetButton/ResetButton';
import GameBoard from './Components/GameBoard/GameBoard';
import './App.css';

const createItems = () => {
    const items = Array(36).fill({ hasItem: false, clicked: false });
    const randomIndex = Math.floor(Math.random() * items.length);
    items[randomIndex] = { hasItem: true, clicked: false };
    return items;
};

const App: React.FC = () => {
    const [items, setItems] = useState(createItems);
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleItemClick = (index: number) => {
        if (gameOver || items[index].clicked) {
            return;
        }

        const newItems = [...items];
        newItems[index].clicked = true;

        if (newItems[index].hasItem) {
            alert(`Поздравляем! Вы нашли предмет с ${attempts + 1}-й попытки.`);
            setGameOver(true);
        }

        newItems.splice(index, 1);

        setItems(newItems);
        setAttempts((prevAttempts) => prevAttempts + 1);

        if (attempts === 34) {
            setGameOver(true);
        }
    };

    const handleResetClick = () => {
        setItems(createItems);
        setAttempts(0);
        setGameOver(false);
    };

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px' }}>Игра по нахождению предмета</h1>
            <AttemptsCounter attempts={attempts} />
            <GameBoard items={items} onItemClick={handleItemClick} />
            <ResetButton onClick={handleResetClick} />
        </div>
    );
};

export default App;
