import { useState } from "react";

const RATE = 0.267; // economia média estimada (ilustrativa)
const brl = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export default function Calculator() {
  const [bill, setBill] = useState(1500);
  const free = Math.round(bill * (1 - RATE));
  const saving = bill - free;

  return (
    <div className="calc">
      <div className="calc__input">
        <label htmlFor="bill">Quanto você paga de luz por mês?</label>
        <output className="calc__value">{brl(bill)}</output>
        <input
          id="bill"
          type="range"
          min="500"
          max="20000"
          step="100"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <div className="calc__scale"><span>R$ 500</span><span>R$ 20.000</span></div>
      </div>

      <div className="calc__result" aria-live="polite">
        <div className="calc__col">
          <small>Sua conta atual</small>
          <strong>{brl(bill)}</strong>
          <span>/mês</span>
        </div>
        <div className="calc__col calc__col--free">
          <small>Mercado livre</small>
          <strong>{brl(free)}</strong>
          <span>/mês</span>
        </div>
      </div>

      <p className="calc__save">
        Economia estimada de <b>{brl(saving)}</b> por mês — <b>{brl(saving * 12)}</b> por ano.
      </p>
      <p className="calc__fine">
        Simulação ilustrativa com economia média de {Math.round(RATE * 100)}%. O valor real depende do seu
        consumo, da distribuidora e do plano escolhido.
      </p>
    </div>
  );
}
