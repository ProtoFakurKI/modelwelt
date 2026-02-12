import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

// Mock R3F Canvas for testing
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas">{children}</div>,
}))

vi.mock('@react-three/drei', () => ({
  OrbitControls: () => null,
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
  
  it('shows title', () => {
    render(<App />)
    expect(screen.getByText('Modellbau-Welt')).toBeInTheDocument()
  })

  it('shows control instructions', () => {
    render(<App />)
    expect(screen.getByText(/Steuerung:/)).toBeInTheDocument()
  })

  it('shows reset view button', () => {
    render(<App />)
    expect(screen.getByText('Reset View')).toBeInTheDocument()
  })
})
