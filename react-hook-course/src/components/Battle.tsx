import React from 'react'
import classNames from 'classnames'

function Instructions() {
  return (
    <div>
      <h3 className="text-center">Instructions</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(17rem, 100%), 1fr))',
          gap: 'var(--space-100)',
        }}
      >
        <div className="zi-card">
          <h4 className="text-center">Users</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        </div>
        <div className="zi-card">
          <h4 className="text-center">Battle</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>
        </div>
        <div className="zi-card">
          <h4 className="text-center">Results</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function PlayerInput({ label }: { label: string }) {
  return (
    <form
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: 'var(--space-100)',
      }}
    >
      <div>
        <label
          style={{ display: 'block', marginBlock: 'var(--space-100)' }}
          htmlFor={label}
        >
          {label}
        </label>
        <input
          className="zi-input big"
          onChange={e => {}}
          style={{ marginInline: '0', width: '100%', marginBlockEnd: '0' }}
          id={label}
          value="The Evil Rabbit"
        />
      </div>
      <button
        style={{ minWidth: 'auto', alignSelf: 'end' }}
        className={classNames('zi-btn primary', { disabled: true })}
      >
        Submit
      </button>
    </form>
  )
}

function BattleForm() {
  return (
    <div style={{ marginBlockStart: 'var(--space-500)' }}>
      <h3 className="text-center">Battle</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(17rem, 100%), 1fr))',
          gap: 'var(--space-300)',
        }}
      >
        <PlayerInput label="Player One" />
        <PlayerInput label="Player Two" />
      </div>
    </div>
  )
}

export default function Battle() {
  return (
    <main className="container" style={{ marginBlock: 'var(--space-500)' }}>
      <Instructions />
      <BattleForm />
    </main>
  )
}
