#!/usr/bin/env node
/**
 * Obfusque email, WhatsApp ou clé Web3Forms pour js/contact-config.js
 * (pas un hash : la valeur doit être retrouvable côté navigateur pour l’API.)
 *
 *   node scripts/encode-contact.mjs web3forms VOTRE_CLE
 *   node scripts/encode-contact.mjs email vous@exemple.com
 *   node scripts/encode-contact.mjs whatsapp 324XXXXXXXX
 */
const XOR_KEY = 0x5a;

function encode(value) {
  return [...value].map((c) => c.charCodeAt(0) ^ XOR_KEY).join(',');
}

const kind = process.argv[2];
const value = process.argv[3] || '';

if (kind === 'web3forms' && value.length > 10) {
  console.log(`web3formsKeyEncoded: '${encode(value)}',`);
} else if (kind === 'email' && value.includes('@')) {
  console.log(`emailEncoded: '${encode(value)}',`);
} else if (kind === 'whatsapp') {
  const phone = value.replace(/\D/g, '');
  if (!phone) {
    console.error('Usage: node scripts/encode-contact.mjs whatsapp 324XXXXXXXX');
    process.exit(1);
  }
  console.log(`whatsappEncoded: '${encode(phone)}',`);
} else {
  console.error('Usage:');
  console.error('  node scripts/encode-contact.mjs web3forms VOTRE_CLE_WEB3FORMS');
  console.error('  node scripts/encode-contact.mjs email vous@exemple.com');
  console.error('  node scripts/encode-contact.mjs whatsapp 324XXXXXXXX');
  process.exit(1);
}
