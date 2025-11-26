export enum PlanType {
  VIRTUAL = 'Virtual',
  PRO = 'Pro',
  PREMIUM = 'Premium',
}

export type Currency = 'USD' | 'EUR' | 'GBP';

export interface CalculatorState {
  selectedPlan: PlanType;
  currency: Currency;
  initialDeposit: number;
  monthlyDeposit: number;
  depositType: 'fiat' | 'crypto';
  virtualCards: number;
  metalCards: number; // Only for Premium
  monthlyExternalTransfers: number; // Amount transferred out monthly
}

export interface PlanCosts {
  openingFee: number;
  annualAdminFee: number;
  monthlyAdminFeeTotal: number; // monthly * 12
  cardFees: number;
  depositFees: number;
  transferFees: number;
  totalFirstYearCost: number;
  interestEarned: number;
  netCost: number; // Total Cost - Interest
}

export interface PlanResult {
  type: PlanType;
  costs: PlanCosts;
  isBestValue: boolean;
  savingsVsMostExpensive: number;
}