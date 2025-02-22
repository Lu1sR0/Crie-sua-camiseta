import {proxy} from 'valtio';

const state = proxy({
  intro: true,
  color: '#353934',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logolrbranca.png',
  fullDecal: './circuit.png',
});

export default state;