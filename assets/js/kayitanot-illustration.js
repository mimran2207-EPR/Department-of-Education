/* Shared inline-SVG summer camp illustration for kayitanot pages.
   variant: 'child' | 'parents' | 'summary' | 'success' | 'additional' */
window.renderKayitanotArt = function (host, variant) {
  if (!host) return;
  var sky = '#e8f4f6';
  var grass = '#cfeae2';
  var tent1 = '#0ba6b5';
  var tent1Dark = '#0a7d88';
  var tent2 = '#fff';
  var tent2Stripe = '#0ba6b5';
  var sun = '#fbcd62';
  var sand = '#f5dcb1';
  var leaf = '#7ec99c';
  var leafDark = '#3d9c70';
  var trunk = '#a26d3c';
  var ball1 = '#ff7a59';
  var ball2 = '#0ba6b5';
  var bucket = '#0ba6b5';
  var bottle = '#0a7d88';
  var sign = '#a26d3c';
  var signDark = '#7c4f2c';
  var flag = '#ff7a59';

  // Common decorations: clouds, sun, leaves, grass
  function commonBg() {
    return [
      // soft sky background fill
      '<rect x="0" y="0" width="800" height="600" fill="' + sky + '" rx="30"/>',
      // sun top-right
      '<circle cx="650" cy="110" r="55" fill="' + sun + '" opacity="0.9"/>',
      '<g stroke="' + sun + '" stroke-width="4" stroke-linecap="round" opacity="0.7">',
      '  <line x1="650" y1="30" x2="650" y2="50"/>',
      '  <line x1="720" y1="110" x2="740" y2="110"/>',
      '  <line x1="700" y1="60" x2="715" y2="45"/>',
      '  <line x1="700" y1="160" x2="715" y2="175"/>',
      '  <line x1="600" y1="60" x2="585" y2="45"/>',
      '</g>',
      // clouds
      '<g fill="#fff" opacity="0.85">',
      '  <ellipse cx="180" cy="100" rx="50" ry="18"/>',
      '  <ellipse cx="200" cy="90" rx="36" ry="14"/>',
      '  <ellipse cx="450" cy="60" rx="42" ry="14"/>',
      '</g>',
      // paper airplane
      '<g transform="translate(110 175) rotate(-20)" fill="' + tent1Dark + '" opacity="0.7">',
      '  <polygon points="0,0 40,15 0,30 12,15"/>',
      '</g>',
      '<path d="M 60 165 Q 100 170 150 155" stroke="' + tent1Dark + '" stroke-width="1.5" fill="none" stroke-dasharray="4 3" opacity="0.45"/>',
      // grass strip at bottom
      '<path d="M 0 470 Q 200 440 400 470 T 800 470 L 800 600 L 0 600 Z" fill="' + grass + '"/>',
      // sand patch
      '<ellipse cx="400" cy="500" rx="320" ry="40" fill="' + sand + '"/>',
      // palm leaves left
      '<g transform="translate(40 410)">',
      '  <path d="M 0 80 Q -10 30 30 0 Q 50 30 30 80 Z" fill="' + leaf + '"/>',
      '  <path d="M -20 100 Q -40 50 -10 30 Q 20 60 0 110 Z" fill="' + leafDark + '"/>',
      '  <path d="M 30 90 Q 60 60 90 80 Q 70 110 30 100 Z" fill="' + leaf + '"/>',
      '</g>',
      // leaves right
      '<g transform="translate(700 410)">',
      '  <path d="M 0 80 Q 10 30 -30 0 Q -50 30 -30 80 Z" fill="' + leaf + '"/>',
      '  <path d="M 20 100 Q 40 50 10 30 Q -20 60 0 110 Z" fill="' + leafDark + '"/>',
      '</g>'
    ].join('');
  }

  function tents() {
    return [
      // big tent
      '<g transform="translate(260 280)">',
      '  <polygon points="0,180 90,0 180,180" fill="' + tent1 + '"/>',
      '  <polygon points="90,0 180,180 130,180 90,80" fill="' + tent1Dark + '"/>',
      '  <polygon points="60,180 90,80 120,180" fill="' + tent1Dark + '" opacity="0.8"/>',
      '  <line x1="90" y1="-15" x2="90" y2="0" stroke="' + tent1Dark + '" stroke-width="3"/>',
      '  <polygon points="90,-15 110,-8 90,0" fill="' + flag + '"/>',
      '</g>',
      // small tent
      '<g transform="translate(160 350)">',
      '  <polygon points="0,110 55,0 110,110" fill="' + tent2 + '" stroke="' + tent2Stripe + '" stroke-width="3"/>',
      '  <line x1="20" y1="80" x2="40" y2="20" stroke="' + tent2Stripe + '" stroke-width="3"/>',
      '  <line x1="50" y1="100" x2="65" y2="40" stroke="' + tent2Stripe + '" stroke-width="3"/>',
      '  <line x1="78" y1="100" x2="92" y2="50" stroke="' + tent2Stripe + '" stroke-width="3"/>',
      '</g>'
    ].join('');
  }

  function campSign() {
    return [
      '<g transform="translate(60 320)">',
      '  <rect x="0" y="0" width="120" height="38" rx="4" fill="' + sign + '"/>',
      '  <text x="60" y="25" font-family="Rubik, Heebo, sans-serif" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">מחנה קיץ</text>',
      '  <rect x="55" y="38" width="10" height="60" fill="' + signDark + '"/>',
      '</g>'
    ].join('');
  }

  function props() {
    return [
      // beach ball
      '<g transform="translate(450 470)">',
      '  <circle r="22" fill="' + tent2 + '" stroke="' + ball1 + '" stroke-width="2"/>',
      '  <path d="M -22 0 A 22 22 0 0 1 22 0" fill="' + ball1 + '"/>',
      '  <path d="M 0 -22 A 22 22 0 0 1 0 22" fill="' + ball2 + '" opacity="0.6"/>',
      '</g>',
      // bucket
      '<g transform="translate(530 460)">',
      '  <path d="M 0 0 L 5 50 L 45 50 L 50 0 Z" fill="' + bucket + '"/>',
      '  <path d="M 5 8 Q 25 0 45 8" fill="none" stroke="#fff" stroke-width="2"/>',
      '  <rect x="0" y="-3" width="50" height="6" rx="2" fill="' + tent1Dark + '"/>',
      '</g>',
      // water bottle
      '<g transform="translate(100 440)">',
      '  <rect x="0" y="10" width="28" height="60" rx="6" fill="' + bottle + '"/>',
      '  <rect x="6" y="0" width="16" height="12" rx="2" fill="' + tent1Dark + '"/>',
      '  <rect x="4" y="25" width="20" height="20" fill="' + tent2 + '" opacity="0.85"/>',
      '</g>'
    ].join('');
  }

  function clipboardWithCheck() {
    return [
      '<g transform="translate(310 230)">',
      '  <rect x="0" y="20" width="180" height="220" rx="14" fill="#fff" stroke="' + tent1 + '" stroke-width="4"/>',
      '  <rect x="55" y="0" width="70" height="34" rx="8" fill="' + tent1 + '"/>',
      '  <rect x="68" y="6" width="44" height="20" rx="3" fill="' + tent1Dark + '"/>',
      '  <circle cx="90" cy="120" r="40" fill="' + tent1 + '"/>',
      '  <path d="M 70 122 L 86 138 L 112 108" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
      '  <rect x="30" y="180" width="120" height="6" rx="2" fill="#e2e8f0"/>',
      '  <rect x="30" y="200" width="90" height="6" rx="2" fill="#e2e8f0"/>',
      '</g>'
    ].join('');
  }

  var inner = commonBg();
  if (variant === 'success' || variant === 'summary') {
    inner += clipboardWithCheck();
  } else {
    inner += tents() + campSign();
  }
  inner += props();

  host.innerHTML =
    '<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">' +
    inner +
    '</svg>';
};
