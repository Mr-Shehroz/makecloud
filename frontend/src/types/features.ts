// types/features.ts

// Feature Item Type
export interface FeatureItem {
  _key: string
  title: string
  description: string
  column: number // 1, 2, or 3
  order: number // 1 or 2 within column
}

// Features Section Data Type
export interface FeaturesData {
  _id: string
  _type: 'features'
  heading: string
  tickIcon?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  featuresList: FeatureItem[]
}