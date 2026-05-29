
export type Currency = 'USD' | 'INR';

// General type for displaying results in a list
export interface ResultItem {
  label: string;
  value: string | number;
  isEmphasized?: boolean;
  currencyCode?: Currency;
}

export interface ModelConfig {
  size: number; // Billions of parameters
  precision: number; // Bits
  contextLength: number;
  batchSize: number;
  gqa: boolean;
}
