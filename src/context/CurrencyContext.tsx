import { createContext, useContext, useState, type ReactNode } from 'react';

export type Currency = 'INR' | 'USD';

interface CurrencyContextValue {
  currency: Currency;
  toggle: () => void;
  /** Format a raw INR number into the current currency string */
  format: (inrAmount: number) => string;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

/** 1 USD ≈ 83 INR (approximate fixed rate) */
const INR_TO_USD = 83;

function formatINR(n: number): string {
  // Indian numbering: lakh / crore grouping
  if (n >= 10_00_000) return `₹${(n / 10_00_000).toFixed(1).replace(/\.0$/, '')} L`;
  if (n >= 1_00_000)  return `₹${(n / 1_00_000).toFixed(1).replace(/\.0$/, '')} L`;
  if (n >= 1_000)     return `₹${(n / 1_000).toFixed(0)}K`;
  return `₹${n.toLocaleString('en-IN')}`;
}

function formatUSD(n: number): string {
  const usd = n / INR_TO_USD;
  if (usd >= 1_000) return `$${(usd / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return `$${Math.round(usd).toLocaleString('en-US')}`;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('INR');

  const toggle = () => setCurrency((c) => (c === 'INR' ? 'USD' : 'INR'));

  const format = (inrAmount: number) =>
    currency === 'INR' ? formatINR(inrAmount) : formatUSD(inrAmount);

  const symbol = currency === 'INR' ? '₹' : '$';

  return (
    <CurrencyContext.Provider value={{ currency, toggle, format, symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used inside CurrencyProvider');
  return ctx;
}
