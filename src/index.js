/*
 * @Author: 马燥
 * @Email: 1030102244@qq.com
 * @Date: 2023-03-17 14:22:41
 * @Description: react的demo
 * @LastEditors: 马燥
 * @LastEditTime: 2023-03-17 14:35:03
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class Square extends React.Component {
  render () {
    return <button className='square'>{/* TODO */}</button>
  }
}

class Board extends React.Component {
  renderSquare (i) {
    return <Square />
  }

  render () {
    const status = 'Next player: X'

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)
