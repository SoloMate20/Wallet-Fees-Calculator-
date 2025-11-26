import React from 'react';
import { CalculatorState, PlanType, Currency } from '../types';
import { CURRENCY_SYMBOLS } from '../constants';
import { Wallet, CreditCard, ArrowRightLeft, DollarSign, Repeat, Coins } from 'lucide-react';

interface InputSectionProps {
  state: CalculatorState;
  onChange: (updates: Partial<CalculatorState>) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ state, onChange }) => {
  
  const handleNumberChange = (key: keyof CalculatorState, value: string) => {
    const num = parseFloat(value);
    onChange({ [key]: isNaN(num) ? 0 : num });
  };

  const currencySymbol = CURRENCY_SYMBOLS[state.currency];

  return (
    <div className="bg-navy-800 border border-white/5 rounded-2xl p-6 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-display font-semibold text-white flex items-center gap-3">
          <span className="bg-navy-900 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-brand-primary border border-brand-primary/20">
            02
          </span>
          Configure Usage
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        
        {/* Currency Selector */}
        <div className="space-y-2">
           <label className="text-sm font-medium text-text-muted flex items-center gap-2 font-display">
             <Coins className="w-4 h-4 text-white" /> Select Currency
           </label>
           <div className="flex bg-navy-900 rounded-lg p-1 border border-white/10">
             {(['USD', 'EUR', 'GBP'] as Currency[]).map((cur) => (
               <button
                 key={cur}
                 type="button"
                 onClick={() => onChange({ currency: cur })}
                 className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 font-display ${
                   state.currency === cur
                     ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20'
                     : 'text-text-muted hover:text-white hover:bg-white/5'
                 }`}
               >
                 {cur} ({CURRENCY_SYMBOLS[cur]})
               </button>
             ))}
           </div>
        </div>

        {/* Initial Deposit */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-muted flex items-center gap-2 font-display">
            <Wallet className="w-4 h-4 text-brand-accent" /> Initial Deposit
          </label>
          <div className="relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary/50 font-mono peer-placeholder-shown:hidden pointer-events-none transition-all">{currencySymbol}</span>
            <input
              type="number"
              value={state.initialDeposit || ''}
              onChange={(e) => handleNumberChange('initialDeposit', e.target.value)}
              className="peer w-full bg-navy-900 border border-white/10 rounded-lg py-3 pr-4 pl-8 peer-placeholder-shown:pl-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-mono"
              placeholder={`${currencySymbol}10,000`}
            />
          </div>
        </div>

        {/* Monthly Deposit */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-muted flex items-center gap-2 font-display">
            <Repeat className="w-4 h-4 text-brand-secondary" /> Monthly Deposit
          </label>
          <div className="relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary/50 font-mono peer-placeholder-shown:hidden pointer-events-none transition-all">{currencySymbol}</span>
            <input
              type="number"
              value={state.monthlyDeposit || ''}
              onChange={(e) => handleNumberChange('monthlyDeposit', e.target.value)}
              className="peer w-full bg-navy-900 border border-white/10 rounded-lg py-3 pr-4 pl-8 peer-placeholder-shown:pl-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-mono"
              placeholder={`${currencySymbol}1,000`}
            />
          </div>
        </div>

        {/* External Transfers */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-muted flex items-center gap-2 font-display">
            <ArrowRightLeft className="w-4 h-4 text-brand-primary" /> Monthly Transfers Out
          </label>
          <div className="relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary/50 font-mono peer-placeholder-shown:hidden pointer-events-none transition-all">{currencySymbol}</span>
            <input
              type="number"
              value={state.monthlyExternalTransfers || ''}
              onChange={(e) => handleNumberChange('monthlyExternalTransfers', e.target.value)}
              className="peer w-full bg-navy-900 border border-white/10 rounded-lg py-3 pr-4 pl-8 peer-placeholder-shown:pl-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-mono"
              placeholder={`${currencySymbol}500`}
            />
          </div>
        </div>

         {/* Deposit Type */}
         <div className="space-y-2">
          <label className="text-sm font-medium text-text-muted flex items-center gap-2 font-display">
            <DollarSign className="w-4 h-4 text-white" /> Deposit Type
          </label>
          <div className="flex bg-navy-900 rounded-lg p-1 border border-white/10">
            <button
              type="button"
              onClick={() => onChange({ depositType: 'fiat' })}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 font-display ${
                state.depositType === 'fiat'
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                  : 'text-text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              Fiat Currency
            </button>
            <button
              type="button"
              onClick={() => onChange({ depositType: 'crypto' })}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 font-display ${
                state.depositType === 'crypto'
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                  : 'text-text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              Crypto
            </button>
          </div>
        </div>

        {/* Virtual Cards */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-muted flex items-center gap-2 font-display">
            <CreditCard className="w-4 h-4 text-brand-secondary" /> Virtual Cards
          </label>
          <input
            type="range"
            min="0"
            max="20"
            value={state.virtualCards}
            onChange={(e) => handleNumberChange('virtualCards', e.target.value)}
            className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
          />
          <div className="flex justify-between text-xs text-text-muted">
            <span>0</span>
            <span className="text-brand-secondary font-bold font-mono">{state.virtualCards} Cards</span>
            <span>20</span>
          </div>
        </div>

         {/* Metal Cards (Premium Only) */}
         {state.selectedPlan === PlanType.PREMIUM ? (
           <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-500">
            <label className="text-sm font-medium text-text-muted flex items-center gap-2 font-display">
              <CreditCard className="w-4 h-4 text-brand-accent" /> Metal Cards
            </label>
            <input
              type="range"
              min="0"
              max="5"
              value={state.metalCards}
              onChange={(e) => handleNumberChange('metalCards', e.target.value)}
              className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-brand-accent"
            />
            <div className="flex justify-between text-xs text-text-muted">
              <span>0</span>
              <span className="text-brand-accent font-bold font-mono">{state.metalCards} Cards</span>
              <span>5</span>
            </div>
          </div>
         ) : (
           <div className="p-3 rounded-lg bg-navy-900 border border-white/5 flex items-center gap-3 text-text-muted opacity-60">
             <CreditCard className="w-4 h-4" />
             <span className="text-xs font-display">Metal cards available on Premium plan only</span>
           </div>
         )}

      </div>
    </div>
  );
};

export default InputSection;