import React from 'react'
import { render, screen } from '@testing-library/react'

import { fetchPokemons } from 'pages/api/fetchPokemons'
import Homepage from 'pages/index'

jest.mock('pages/api/fetchPokemons')

describe('Homepage', () => {
  test('should be rendered correclty', () => {
    // Arrange
    const expectedPokemon = 1
    const expectedPokemons = [expectedPokemon, 3, 4]
    const mockFetchPokemons = jest.fn(() => ({
      pokemons: expectedPokemons,
      pokemonsMinimized: [],
    }))
    fetchPokemons.mockImplementation(mockFetchPokemons)

    // Act
    render(<Homepage />)
    const container = screen.getByTestId('container')

    // Assers
    expect(container).not.toBeNull()
    expect(container.textContent).toBe(`Pokemons ${expectedPokemon}`)
  })

  test('should call fetch Pokemons', () => {
    // Arrange
    const expectedPokemon = 1
    const expectedPokemons = [expectedPokemon, 3, 4]
    const mockFetchPokemons = jest.fn(() => ({
      pokemons: expectedPokemons,
      pokemonsMinimized: [],
    }))
    fetchPokemons.mockImplementation(mockFetchPokemons)

    // Act
    render(<Homepage />)
    const container = screen.getByTestId('container')

    // Assers
    expect(mockFetchPokemons).toHaveBeenCalled()
    expect(mockFetchPokemons).toHaveBeenCalledTimes(1)
  })
})
