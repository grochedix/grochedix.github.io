/**
 * Copiez vers contact-config.js — ne commitez jamais clé / email / numéro en clair.
 *
 *   node scripts/encode-contact.mjs web3forms VOTRE_CLE
 *   node scripts/encode-contact.mjs email vous@exemple.com
 *   node scripts/encode-contact.mjs whatsapp 324XXXXXXXX
 *
 * Sur web3forms.com : restreindre la clé au domaine grochedix.github.io
 */
window.CONTACT_CONFIG = {
  web3formsKeyEncoded: '106,106,106,106,106,106,106,106,119,106,106,106,106,119,106,106,106,106,119,106,106,106,106,119,106,106,106,106,106,106,106,106,106,106,106,106',
  whatsappEncoded: '105,104,110,106,106,106,106,106,106,106,106',
  emailEncoded: '57,53,52,46,59,57,46,26,63,34,59,55,42,54,63,116,57,53,55',
  telegramUsername: '',
};
