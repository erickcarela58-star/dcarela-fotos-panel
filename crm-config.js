// Config de la REPLICA "Sesiones Fotográficas" (2do número / WhatsApp Web).
// Usa el MISMO index.html del panel principal (una sola fuente de código) — solo cambia
// esta config: marca, color y que arranca FIJO en el 2do número (whatsapp_qr).
// defaultNumFilter/lockNumFilter hacen que este panel solo atienda ese número.
window.CRM_CONFIG = window.DCARELA_CRM_CONFIG = {
  brandName: "D'Carela Compufoto",
  productName: "CRM WhatsApp Web",
  appTitle: "D'Carela · CRM WhatsApp Web",
  subtitle: "Fotos · remarketing y campañas · atención humana por defecto",
  logoText: "DC",
  logoUrl: "https://dcarelacompufoto.com/img/logo.webp",
  // Misma estética monocromática del CRM; la cinta de canal identifica esta réplica.
  accent: "#fafafa",
  accent2: "#737373",

  // clave de notificaciones/almacenamiento PROPIA (no se pisa con el panel principal)
  notificationTag: "dcarela-fotos",
  firebaseFunctionsBase: "https://us-central1-erikccarela.cloudfunctions.net",
  firebaseAgendaUrl: "https://crmagenda-o2uqjp6fra-uc.a.run.app",
  firebaseReviewsUrl: "https://crmreviews-o2uqjp6fra-uc.a.run.app",
  firebaseTransportEnabled: true,
  historyRecoveryOnly: true,
  // arranca y se queda FIJO en el 2do número: solo atiende esos clientes
  defaultNumFilter: "qr",
  lockNumFilter: true,
  showBridgeSetup: true,
  bridgePairingMode: "phone_code",
  appVersionUrl: "./app-version.json",
  // Opcional: completar cuando se vincule el número físico. Mientras esté vacío,
  // la agenda lo infiere de la primera conversación recibida por el puente.
  // Numero confirmado por el puente activo. Tambien se usa para recuperar
  // conversaciones antiguas del mismo dispositivo aunque una fila haya
  // quedado sin la marca source=whatsapp_qr.
  bridgeBusinessNumber: "18094785620",
  bridgeBusinessDisplayNumber: "809-478-5620",

  publicPortfolioUrl: "https://dcarelacompufoto.com/combos.html",
  publicCatalogUrl: "https://dcarelacompufoto.com/combos.html",
  publicGalleryUrl: "https://dcarelacompufoto.com/combos.html",
  publicWeddingUrl: "https://dcarelacompufoto.com/boda.html",
  adsPanelUrl: "https://crm.dcarelacompufoto.com/anuncios/",

  metaPixelId: "1377359270081777",
  privateCombosMessage: "Te comparto los combos por aqui. Antes de confirmar disponibilidad necesito saber categoria, fecha tentativa y nombre.",

  addressText: "Estamos en C/ Juan Pablo Duarte, esquina Freddy Prestol Castillo, Los Mulos, Piedra Linda, Villa Hermosa, La Romana.",
  mapsUrl: "https://maps.app.goo.gl/WcmjureAxNySXza59",

  businessNumber: "18495245620",
  businessDisplayNumber: "849-524-5620",
  defaultView: "conversations"
  // Aqui habia una lista "enabledViews" que decia que vistas debia tener este panel. El codigo
  // NUNCA la leyo --pintaMenu() pinta VISTAS entera-- asi que describia un reparto que no
  // existia, y encima nombraba vistas ya desaparecidas (ads, marketing, bridge, estados).
  //
  // Se quita en vez de implementarla, y es una decision del dueno (09/09/2026): Fotos tiene
  // TODAS las vistas. Lo que separa a los dos numeros no es un menu recortado sino lo que el
  // codigo ya impide por canal --el 2.º numero no manda plantillas de Meta ni entra en las
  // difusiones-- mas los limites antibloqueo, que ahora se ajustan en Configuracion.
};
