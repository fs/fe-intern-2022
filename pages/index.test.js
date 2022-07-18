import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { fetchPokemons } from 'pages/api/fetchPokemons'
import Homepage from 'pages/index'

jest.mock('pages/api/fetchPokemons')

describe('Homepage', () => {
  test('', () => {
    // Arrange
    const mockFetchPokemons = jest.fn(() =>
      Promise.resolve({ pokemons: [], pokemonsMinimized: [] })
    )
    fetchPokemons.mockImplementation(mockFetchPokemons)
    // Act
    render(<Homepage />)

    const container = screen.getByTestId('container')

    // Assers
    expect(container).toBeNull()
  })
})
