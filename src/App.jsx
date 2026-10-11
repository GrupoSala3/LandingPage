import { useState } from "react";
import Logo from "./components/Logo.jsx";
import Calculator from "./components/Calculator.jsx";
import Faq from "./components/Faq.jsx";
import { ResultScreen, UploadScreen, PlansScreen, StatusScreen } from "./components/Screens.jsx";

const frees = [
  {
    t: "Mercado cativo",
    d: "Você paga a tarifa que a distribuidora define, sem poder negociar. No mercado livre, você escolhe a fonte, o preço e o prazo.",
  },
  {
    t: "Burocracia",
    d: "Denúncia do contrato, troca de medidor, papelada com a comercializadora. A Livra assume tudo depois que você assina.",
  },
  {
    t: "Bandeiras tarifárias",
    d: "Amarela, vermelha, escassez hídrica. Com contrato de preço definido, a sua conta deixa de oscilar com a bandeira do mês.",
  },
];

const steps = [
  {
    t: "Envie sua conta de luz",
    d: "Tire uma foto ou envie o PDF. Nossa IA lê o consumo e a tarifa atual em segundos.",
    screen: <UploadScreen />,
  },
  {
    t: "Escolha o plano",
    d: "Veja quanto você economiza e compare planos de energia solar, renovável e verde.",
    screen: <PlansScreen />,
  },
  {
    t: "Assine e acompanhe",
    d: "Assinatura digital no celular. A gente cuida da migração e você vê cada etapa no painel.",
    screen: <StatusScreen />,
  },
];

export default function App() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>

      <header className="nav">
        <a href="#top" aria-label="Livra, página inicial"><Logo /></a>
        <nav aria-label="Principal">
          <a href="#livre">Por que migrar</a>
          <a href="#simular">Simular</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a className="btn btn--sm" href="#comecar">Começar</a>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero__sun" aria-hidden="true" />
          <div className="hero__panels" aria-hidden="true" />
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <h1>
                Sua conta de luz<br />mais barata.<br />
                <span className="lime">Sem burocracia.</span>
              </h1>
              <p className="lead">
                Compare, contrate e migre para o mercado livre de energia em poucos minutos.
                Você envia a conta, a Livra faz o resto.
              </p>
              <div className="hero__cta">
                <a className="btn" href="#comecar">Quero economizar</a>
                <a className="link" href="#como-funciona">Ver como funciona</a>
              </div>
              <p className="hero__proof">
                Exemplo real de uma conta de <b>R$ 1.500</b> que cairia para <b>R$ 1.100</b>.
              </p>
            </div>
            <div className="hero__phone">
              <ResultScreen />
            </div>
          </div>
        </section>

        {/* LIVRE DE */}
        <section className="section" id="livre">
          <div className="wrap">
            <h2 className="h2">Livra você de três coisas.</h2>
            <p className="sub">
              O nome vem do verbo “livrar” e de “Mercado Livre”. A promessa é simples: tirar o
              comerciante do mercado cativo.
            </p>
            <ul className="frees">
              {frees.map((f) => (
                <li key={f.t}>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SIMULADOR */}
        <section className="section section--alt" id="simular">
          <div className="wrap simulator">
            <div>
              <h2 className="h2">Veja quanto você deixa de pagar.</h2>
              <p className="sub">
                Arraste e compare. No app, o cálculo usa os dados reais da sua conta, lidos
                automaticamente por OCR.
              </p>
            </div>
            <Calculator />
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section" id="como-funciona">
          <div className="wrap">
            <h2 className="h2">Três passos. Nenhum papel.</h2>
            <p className="sub">
              A complexidade fica com a gente: denúncia para a concessionária, dados para a
              comercializadora parceira e acompanhamento da migração.
            </p>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.t}>
                  <span className="steps__n">{i + 1}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <div className="steps__phone">{s.screen}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--alt" id="faq">
          <div className="wrap faqwrap">
            <h2 className="h2">Perguntas frequentes</h2>
            <Faq />
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="final" id="comecar">
          <div className="wrap final__in">
            <h2 className="h2">Pronto para se livrar da conta alta?</h2>
            <p className="sub">Deixe seu e-mail e avisamos assim que o app estiver disponível para você.</p>
            {sent ? (
              <p className="final__ok" role="status">Pronto! Avisaremos em {email}.</p>
            ) : (
              <form className="final__form" onSubmit={submit}>
                <label htmlFor="email" className="sr">Seu e-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="voce@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" type="submit">Quero economizar</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__in">
          <Logo size={24} />
          <p>Energia limpa, economia e menos burocracia.</p>
          <small>© {new Date().getFullYear()} Livra. Valores de economia são estimativas.</small>
        </div>
      </footer>
    </>
  );
}
