import { funcTest } from 'pages/api/try'

describe('Try func', () => {
  test('', () => {
    // Arrange
    const expectedA = 10
    const expectedB = 5
    const expectedResult = 3

    // Act
    const actualResult = funcTest(expectedA, expectedB)

    // Assers
    expect(actualResult).toBe(expectedResult)
  })
})
