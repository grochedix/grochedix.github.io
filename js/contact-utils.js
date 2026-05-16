/** Décode les secrets obfusqués (rien en clair dans le HTML / config lisible). */
(function () {
  const XOR_KEY = 0x5a;

  function decodeEncoded(encoded, filterDigits) {
    if (!encoded || typeof encoded !== 'string') return '';
    try {
      const raw = encoded
        .split(',')
        .map((n) => String.fromCharCode(Number(n.trim()) ^ XOR_KEY))
        .join('');
      return filterDigits ? raw.replace(/\D/g, '') : raw;
    } catch {
      return '';
    }
  }

  function readConfig() {
    return window.CONTACT_CONFIG || {};
  }

  window.getWeb3FormsKey = function () {
    const c = readConfig();
    if (c.web3formsKeyEncoded) return decodeEncoded(c.web3formsKeyEncoded, false).trim();
    return '';
  };

  window.getWhatsAppPhone = function () {
    const c = readConfig();
    if (c.whatsappEncoded) return decodeEncoded(c.whatsappEncoded, true);
    return '';
  };

  window.getObfuscatedEmail = function () {
    const c = readConfig();
    if (c.emailEncoded) return decodeEncoded(c.emailEncoded, false).trim();
    return '';
  };

  window.openWhatsAppChat = function (text) {
    const phone = window.getWhatsAppPhone();
    if (!phone) return false;
    const q = text ? `?text=${encodeURIComponent(text)}` : '';
    window.open(`https://wa.me/${phone}${q}`, '_blank', 'noopener');
    return true;
  };
})();
