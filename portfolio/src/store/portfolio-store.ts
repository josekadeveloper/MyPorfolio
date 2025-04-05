import { create } from 'zustand'

interface PortfolioItem {
  id: string
  name: string
  description: string
  image: string
  url: string
}

interface PortfolioState {
  portfolio: PortfolioItem[]
  setPortfolio: (portfolio: PortfolioItem[]) => void
}

const usePortfolioStore = create<PortfolioState>((set) => ({
  portfolio: [],
  setPortfolio: (portfolio) => set({ portfolio }),
}))

export default usePortfolioStore
