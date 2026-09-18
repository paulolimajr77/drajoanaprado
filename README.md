# Dra. Joana Prado — Landing Page Premium

Landing page institucional em HTML/CSS/JS puro, redesenhada com direção visual editorial e foco em conversão para WhatsApp.

## O que foi atualizado

- Nova foto profissional da Dra. Joana em `assets/dra-joana-retrato.jpg`
- Serviços reais informados pela clínica:
  - Limpeza
  - Restaurações
  - Extrações
  - Prótese
  - Clareamento dental
  - Implante
  - Endodontia (canal)
  - Lentes em resina
  - Atendimento adulto e infantil
- Ícones próprios em SVG, sem bibliotecas de ícones.
- Animações com GSAP + ScrollTrigger:
  - entrada editorial do hero
  - fade/translate por seção
  - entrada sequencial dos tratamentos
  - parallax discreto nas fotografias
  - elementos acionados pelo scroll
- Menu mobile acessível.
- FAQ em `<details>` com comportamento de acordeão.
- Layout responsivo para desktop, tablet e mobile.
- Tipografia editorial: Playfair Display + DM Sans.
- Sem framework ou processo de build.

## Dependências externas

A página carrega:
- Google Fonts
- GSAP 3.12.7
- ScrollTrigger 3.12.7

Se o projeto precisar funcionar 100% offline, as fontes e o GSAP podem ser baixados e servidos localmente.

## Dados para conferir antes da publicação

Endereço, telefone e horários abaixo devem ser confirmados pela clínica antes de colocar o site em produção:

Av. Dom Pedro II, 570 — Araçoiabinha, Araçoiaba da Serra — SP  
(15) 98819-1323  
Segunda a sexta · 09h às 18h  
Sábado · 09h às 13h

## Publicação

Basta enviar a pasta para uma hospedagem estática. Não há `npm`, build ou servidor obrigatório.
