<div align="center">

# Crie sua Camiseta

Customizador de camisetas em 3D no navegador: escolha a cor, aplique sua imagem e baixe o resultado.

[![Ver site](https://img.shields.io/badge/VER_SITE-0D0D0D?style=for-the-badge&logo=vercel&logoColor=FF003C)](https://criesuacamiseta.vercel.app)

![React](https://img.shields.io/badge/React-0D0D0D?style=for-the-badge&logo=react&logoColor=FF003C)
![Vite](https://img.shields.io/badge/Vite-0D0D0D?style=for-the-badge&logo=vite&logoColor=FF003C)
![Three.js](https://img.shields.io/badge/Three.js-0D0D0D?style=for-the-badge&logo=threedotjs&logoColor=FF003C)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0D0D0D?style=for-the-badge&logo=tailwindcss&logoColor=FF003C)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0D0D0D?style=for-the-badge&logo=framer&logoColor=FF003C)

</div>

## Sobre

Aplicação web interativa em que o usuário personaliza uma camiseta renderizada em 3D. A cena é construída com React Three Fiber sobre o Three.js, o estado global fica em um store do Valtio e as transições da interface usam Framer Motion.

A tela inicial apresenta a proposta e o botão **Customizar!** abre o editor. Nessa troca, a câmera reposiciona o modelo de forma suave, e o botão **Voltar** retorna à apresentação.

## Funcionalidades

- **Cor da camiseta**: seletor de cores (`SketchPicker`, do react-color) com paleta predefinida. A transição entre cores é animada com `maath/easing`.
- **Upload de imagem**: envie uma imagem do seu computador e aplique como **logo** no peito ou como estampa que **ocupa toda a camiseta** (decals do Drei).
- **Filtros de exibição**: ative ou desative o logo e a estampa completa de forma independente.
- **Download**: exporta a visualização atual do canvas como `camiseta.png`.
- **Interface que acompanha a cor**: os botões assumem a cor escolhida e ajustam o texto para preto ou branco conforme o contraste.
- **Câmera responsiva**: a posição do modelo se adapta a desktop, tablet e celular, e a camiseta gira levemente acompanhando o ponteiro.
- **Iluminação e sombras**: ambiente HDR (`Environment` com preset `city`) e sombras acumuladas (`AccumulativeShadows`) atrás do modelo.

## Tecnologias

- [React 18](https://react.dev/) + [Vite 4](https://vitejs.dev/)
- [Three.js](https://threejs.org/) (0.155)
- [@react-three/fiber 8](https://github.com/pmndrs/react-three-fiber) e [@react-three/drei 9](https://github.com/pmndrs/drei)
- [Valtio](https://github.com/pmndrs/valtio): estado global
- [Framer Motion 10](https://www.framer.com/motion/): animações da interface
- [maath](https://github.com/pmndrs/maath): interpolação de cor, posição e rotação
- [react-color](https://casesandberg.github.io/react-color/): seletor de cores
- [Tailwind CSS 3](https://tailwindcss.com/)

## Estrutura

```
src/
├── canvas/       # Cena 3D: Shirt, CameraRig e Backdrop
├── components/   # ColorPicker, FilePicker, Tab e CustomButton
├── config/       # Constantes, animações (motion) e helpers
├── pages/        # Home (apresentação) e Customizer (editor)
└── store/        # Estado global com Valtio
public/
└── shirt_baked.glb   # Modelo 3D da camiseta
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/Lu1sR0/Crie-sua-camiseta.git
cd Crie-sua-camiseta
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Créditos

- Projeto desenvolvido acompanhando o tutorial de customizador 3D de camisetas do [JavaScript Mastery](https://www.youtube.com/@javascriptmastery), sem a parte de geração de imagens por IA.
- Créditos mantidos do README original: Anderson Mancini e Paul Henschel ([pmndrs](https://github.com/pmndrs)), referências do configurador de camisetas em React Three Fiber.

---

<div align="center">
Desenvolvido por <a href="https://github.com/Lu1sR0">Luis Roberto</a> · <a href="https://outframe.dev">Outframe</a>
</div>
