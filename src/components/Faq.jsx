const items = [
  {
    q: "O que é o mercado livre de energia?",
    a: "É o ambiente em que você escolhe de quem comprar energia e negocia preço e prazo diretamente com uma comercializadora. A distribuidora local continua entregando a energia e cuidando da rede.",
  },
  {
    q: "Preciso trocar a fiação ou instalar painéis?",
    a: "Não. A energia continua chegando pela mesma rede. O que muda é o contrato e, em alguns casos, o medidor, que a distribuidora troca para você.",
  },
  {
    q: "Quanto tempo leva para migrar?",
    a: "Em geral entre 5 e 15 dias úteis, dependendo da sua distribuidora. Você acompanha cada etapa pelo app.",
  },
  {
    q: "A Livra cuida da burocracia?",
    a: "Sim. Depois da assinatura digital, a Livra gera a denúncia do contrato atual para a concessionária, envia os dados à comercializadora parceira e acompanha a migração até o fim.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sua conta de luz é usada apenas para extrair consumo e tarifa e comparar planos. A assinatura é 100% digital e protegida.",
  },
];

export default function Faq() {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}
