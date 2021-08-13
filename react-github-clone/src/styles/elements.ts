import { css } from 'styled-components'

export const ELEMENTS = css`
  button {
    all: unset;
    background: var(--brand);
    border: none;
    border-radius: 2px;
    padding: 9px 30px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: var(--elevation-one);
    margin-block-end: var(--space-100);

    &:hover {
      box-shadow: var(--elevation-two);
    }

    &:focus {
      box-shadow: 0 0 0 4px rgba(0, 84, 203, 0.2);
    }

    &:active {
      transform: translateY(1px);
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
    color: var(--text1);
    border-bottom: 2px solid var(--brand);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
      color: var(--brand);
    }
  }

  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='password'],
  input[type='number'],
  textarea,
  select {
    width: 100%;

    border: 1px solid var(--gray-300);
    border-radius: 4px;
    padding: 5px 8px;

    transition: all 0.2s;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px rgba(0, 84, 203, 0.2);
    }
  }

  .surface-1 {
    background-color: var(--surface1);
    color: var(--text2);
  }

  .surface-2 {
    background-color: var(--surface2);
    color: var(--text2);
  }

  .surface-3 {
    background-color: var(--surface3);
    color: var(--text1);
  }

  .surface-4 {
    background-color: var(--surface4);
    color: var(--text1);
  }
`
