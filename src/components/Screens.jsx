import Phone from "./Phone.jsx";

const Bolt = () => (
  <svg viewBox="0 0 24 32" width="10" height="13" aria-hidden="true">
    <path d="M14 0 0 18h9l-3 14L24 12h-9z" fill="currentColor" />
  </svg>
);

export function ResultScreen() {
  return (
    <Phone label="Tela de resultado: você pagou R$ 1.500, no mercado livre pagaria R$ 1.100">
      <span className="chip"><Bolt /> Análise concluída</span>
      <h3 className="screen-title screen-title--lg">Você pagou<br />R$ 1.500 este mês.</h3>
      <p className="screen-text">
        No mercado livre, sua conta seria de <b className="lime">R$ 1.100</b>.{" "}
        <b className="lime">Você economizaria R$ 400 por mês (27%).</b>
      </p>
      <div className="compare">
        <div className="compare__a"><small>Sua conta atual</small><strong>R$ 1.500</strong><small>/mês</small></div>
        <div className="compare__b"><small>Mercado livre</small><strong>R$ 1.100</strong><small>/mês</small></div>
      </div>
    </Phone>
  );
}

export function UploadScreen() {
  return (
    <Phone label="Tela de envio da conta de luz por foto ou arquivo">
      <h3 className="screen-title">Vamos analisar sua conta de luz</h3>
      <p className="screen-text">Tire uma foto da sua conta atual ou faça o upload do arquivo em PDF.</p>
      <div className="dropzone">
        <div><span className="dropzone__icon">◉</span><b>Tirar foto</b></div>
        <span className="dropzone__or">ou</span>
        <div><span className="dropzone__icon">▤</span><b>Escolher arquivo</b><small>PDF, JPG ou PNG</small></div>
      </div>
    </Phone>
  );
}

export function PlansScreen() {
  const plans = [
    { n: "Energia 100% Solar", d: "Energia limpa e renovável", p: "R$ 1.100", on: true },
    { n: "Energia Renovável", d: "Mix de fontes renováveis", p: "R$ 1.150" },
    { n: "Energia Verde", d: "Com certificado de origem", p: "R$ 1.180" },
  ];
  return (
    <Phone label="Tela com três planos de energia disponíveis">
      <h3 className="screen-title">Planos disponíveis</h3>
      {plans.map((pl) => (
        <div key={pl.n} className={`plan ${pl.on ? "plan--on" : ""}`}>
          <b>{pl.n}</b>
          <small>{pl.d}</small>
          <span>{pl.p}<small>/mês</small></span>
          <i className="plan__radio" />
        </div>
      ))}
      <div className="btn-fake">Continuar</div>
    </Phone>
  );
}

export function StatusScreen() {
  const steps = [
    { t: "Contrato assinado", d: "Concluído em 12 de mai.", s: "done" },
    { t: "Denúncia para a concessionária", d: "Em andamento…", s: "now" },
    { t: "Medidor trocado", d: "Aguardando agendamento", s: "wait" },
    { t: "Você está no mercado livre!", d: "Em breve", s: "wait" },
  ];
  return (
    <Phone label="Tela de acompanhamento do status da migração">
      <h3 className="screen-title">Estamos cuidando de tudo para você</h3>
      <ol className="tl">
        {steps.map((s) => (
          <li key={s.t} className={`tl__item tl__item--${s.s}`}>
            <i />
            <div><b>{s.t}</b><small>{s.d}</small></div>
          </li>
        ))}
      </ol>
      <p className="note">A migração pode levar entre 5 e 15 dias úteis, dependendo da distribuidora.</p>
    </Phone>
  );
}
