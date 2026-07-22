// Config de la REPLICA "Sesiones Fotográficas" (2do número / WhatsApp Web).
// Usa el MISMO index.html del panel principal (una sola fuente de código) — solo cambia
// esta config: marca, color y que arranca FIJO en el 2do número (whatsapp_qr).
// defaultNumFilter/lockNumFilter hacen que este panel solo atienda ese número.
window.CRM_CONFIG = window.DCARELA_CRM_CONFIG = {
  brandName: "D'Carela Compufoto",
  productName: "Sesiones Fotográficas",
  appTitle: "D'Carela · Fotos (2do número)",
  subtitle: "Panel de sesiones fotográficas · 2do número (WhatsApp Web)",
  logoText: "DC",
  logoUrl: "",
  // Color distinto (morado/rosado) para que se vea CLARAMENTE que es el otro panel.
  accent: "#a855f7",
  accent2: "#ec4899",

  supabaseUrl: "https://rdmhyhsrewvrpqygtufa.supabase.co",
  supabaseAnonKey: "sb_publishable_XgucPR_5tPklv6sdUFAhDQ_6NbSf8fQ",

  // clave de notificaciones/almacenamiento PROPIA (no se pisa con el panel principal)
  notificationTag: "dcarela-fotos",
  // arranca y se queda FIJO en el 2do número: solo atiende esos clientes
  defaultNumFilter: "qr",
  lockNumFilter: true,

  publicPortfolioUrl: "https://erickcarela58-star.github.io/carela-compufoto/portafolio.html",
  publicCatalogUrl: "https://erickcarela58-star.github.io/carela-compufoto/combos.html",
  publicGalleryUrl: "https://erickcarela58-star.github.io/carela-compufoto/portafolio.html",

  metaPixelId: "1377359270081777",
  privateCombosMessage: "Te comparto los combos por aqui. Antes de confirmar disponibilidad necesito saber categoria, fecha tentativa y nombre.",

  addressText: "Estamos en C/ Juan Pablo Duarte, esquina Freddy Prestol Castillo, Los Mulos, Piedra Linda, Villa Hermosa, La Romana.",
  mapsUrl: "https://maps.app.goo.gl/WcmjureAxNySXza59",

  businessNumber: "18495245620",
  businessDisplayNumber: "849-524-5620"
};
