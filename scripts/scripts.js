import {
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
} from './aem.js';

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

function cmeScripts() {
     window.authenticationOptions = window.authenticationOptions || {};

    /* auth config */
    authenticationOptions.loginProcessUrl = '\/content\/cmegroup\/en\/login\u002Dconfirmed.html';
    authenticationOptions.loginUrl = 'https:\/\/auth.cmegroup.com\/idp\/startSSO.ping?PartnerSpId=https%3A%2F%2Fwww.cmegroup.com\x26DoNotPerformAuth=NO';
    authenticationOptions.registerUrl = 'https:\/\/login.cmegroup.com\/sso\/register\/';
    authenticationOptions.logoutUrl = '\/libs\/cmegroup\/security\/logout';
    authenticationOptions.logoutProfileUrl = 'https:\/\/myprofile.cmegroup.com\/admin\/ssoflo';
    authenticationOptions.isMobileLogin = false;
    authenticationOptions.schemaForMobile = '';

    window.globalConfig = window.globalConfig || {};

    /* global config */
    globalConfig.authorMode = false;
    globalConfig.googleSearchUrl = '';
    globalConfig.popularSearchUrl = '';
    globalConfig.defaultProductTabLink = '';
    globalConfig.socialNetworks = 'facebook,reddit,twitter,linkedin,weibo';
    globalConfig.socialMessage = '';
    globalConfig.myWatchlistsUrl = '\/content\/cmegroup\/en\/watchlists.html';
    globalConfig.watchlistProductsUrl = '\/content\/cmegroup\/en\/watchlists\/details.html';
    globalConfig.currentLanguageFolder = 'en';
    globalConfig.subscriptionCenterUrl = '\/content\/cmegroup\/en\/subscription\u002Dcenter.html';
    globalConfig.newSubscriptionDays = '60' || '30';
    globalConfig.myProfileUrl = '\/content\/cmegroup\/en\/my\u002Dprofile.html';

    /* page config */
    globalConfig.isProtectedPage = false;
    globalConfig.lockModalText = 'Log in or create an account to access premium content on cmegroup.com.';

  import('https://cdn.cookielaw.org/consent/f42915b0-68e5-491a-a7f7-1db0d962ddff/OtAutoBlock.js');
  import('https://cdn.cookielaw.org/scripttemplates/otSDKStub.js');
  import('//cdn.evgnet.com/beacon/cmegroup/cmegroup/scripts/evergage.min.js');
  import('https://js.clrt.ai/564.js');
  import('//514009935.collect.igodigital.com/collect.js');
  import('https://platform-api.sharethis.com/js/sharethis.js#property=644646a57ac381001a304496&product=sticky-share-buttons&source=platform');
}

function OptanonWrapper() { }

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
  import('./cme/jquery.1fc733054ddb2e2fcd4a0f763671047b.js');
  cmeScripts();
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();
  import('./cme/custom-navbar.870ed14da87b882b0c1f783292f3f12b.js');
  import('./cme/content-toggle.785ccebfcf3031805ea88b853c6eb377.js');
  import('./cme/collapsible.253c0ec6a3ac417570a8044eb4b0a38b.js');
  import('./cme/vendor.c50054cf072d88684ad63be26c943c16.js');
  import('./cme/common.52ce1b7dcd776b2ecc275fca40301c87.js');
  import('./cme/dependencies.e420e99671686097433a87b2a109856a.js');
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();
