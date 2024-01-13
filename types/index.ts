export type Case = {
  id: number
  availableDate: Date
  project: string
  link: string
  imgUrl?: string
  encryptedWord: string
  encryptedWalletWord: string
  hint?: string
}

export interface BaseSectionProps {
  title: string
}
