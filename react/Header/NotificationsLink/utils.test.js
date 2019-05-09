import { getCookieFromString } from './utils';

describe('getCookieFromString()', () => {
  it('should get the cookie from the cookie string', () => {
    const cookieString =
      "TBMCookie_9070531170426644291=645376001557372301JRuxoAdpWWNNSmZdFoUElTOxvMY=; ___utmvm=###########; JobseekerSessionId=23fba469f32dfd44602bcda9c520bed7; JobseekerVisitorId=23fba469f32dfd44602bcda9c520bed7; ___utmvc=navigator%3Dtrue,navigator.vendor%3DGoogle%20Inc.,navigator.appName%3DNetscape,navigator.plugins.length%3D%3D0%3Dfalse,navigator.platform%3DMacIntel,navigator.webdriver%3Dundefined,plugin_ext%3Dno%20extention,ActiveXObject%3Dfalse,webkitURL%3Dtrue,_phantom%3Dfalse,callPhantom%3Dfalse,chrome%3Dtrue,yandex%3Dfalse,opera%3Dfalse,opr%3Dfalse,safari%3Dfalse,awesomium%3Dfalse,puffinDevice%3Dfalse,__nightmare%3Dfalse,domAutomation%3Dfalse,domAutomationController%3Dfalse,_Selenium_IDE_Recorder%3Dfalse,document.__webdriver_script_fn%3Dfalse,document.%24cdc_asdjflasutopfhvcZLmcfl_%3Dfalse,process.version%3Dfalse,navigator.cpuClass%3Dfalse,navigator.oscpu%3Dfalse,navigator.connection%3Dtrue,navigator.language%3D%3D'C'%3Dfalse,window.outerWidth%3D%3D0%3Dfalse,window.outerHeight%3D%3D0%3Dfalse,window.WebGLRenderingContext%3Dtrue,document.documentMode%3Dundefined,eval.toString().length%3D33,digest=; raygun4js-userid=e2d05053-aa67-7bb6-0f8e-a68eace8ba12; utag_main=v_id:016a9a9e18fc001807d0c695d8c103079001807100bd0$_sn:1$_se:1$_ss:1$_st:1557374013502$ses_id:1557372213502%3Bexp-session$_pn:1%3Bexp-session$vapi_domain:seek.com.au; AMCVS_199E4673527852240A490D45%40AdobeOrg=1; _fbp=fb.2.1557372214588.481553770; _gcl_au=1.1.1757019890.1557372215; AMCV_199E4673527852240A490D45%40AdobeOrg=-330454231%7CMCIDTS%7C18026%7CMCMID%7C12530580999701209963663719128225346715%7CMCAAMLH-1557977014%7C8%7CMCAAMB-1557977014%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1557379414s%7CNONE%7CMCSYNCSOP%7C411-18033%7CMCAID%7CNONE%7CvVersion%7C3.1.2; _ga=GA1.3.1589586687.1557372215; _gid=GA1.3.2143668546.1557372215; _gat_tealium_0=1";
    const visitorId = '23fba469f32dfd44602bcda9c520bed7';
    const visitorIdFromCookie = getCookieFromString(
      'JobseekerVisitorId',
      cookieString
    );
    console.log('visitorIdFromCookie', visitorIdFromCookie);
    expect(visitorId).toEqual(visitorIdFromCookie);
  });
});
