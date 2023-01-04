import { isBrowser } from "browser-or-node";
import dateformat from 'dateformat';
import { v5 as uuidv5 } from 'uuid';
import { marked } from "marked";
import { JIO_SAML_URL } from "../constant";

const JIOADS_NAMESPACE = '5cbcbcde-3ae9-47e4-853e-8dcd20ba8ee1';

let buttonHeight, headerHeight;
export const getHeaderHeight = () => {
  if (isBrowser) {
    if (headerHeight) return headerHeight + 15;
    let headerDiv = document.querySelector(".main-header-container");
    if (headerDiv) {
      headerHeight = headerDiv.offsetHeight;
    }
    return headerHeight ? Number(headerHeight) + 5 : 81;
  }
};
export const getButtonHeight = () => {
  if (isBrowser) {
    if (buttonHeight) return buttonHeight;
    let buttonDiv = document.querySelector(".base-btn");
    if (buttonDiv) {
      buttonHeight = buttonDiv.offsetHeight + 5;
    }
    return buttonDiv ? buttonDiv.offsetHeight + 5 : 0;
  }
};

export const getViewWidth = () => {
  if (isBrowser) {
    return isLoadedInIframe() ? document.body.clientWidth : window.screen.width;
  }
  return false;
};

export const isLoadedInIframe = () => {
  if (isBrowser) {
    return window.location !== window.parent.location;
  }
  return false;
};

export const isVisibleInScrollArea = (el, container) => {
  if (!el || !container) {
    return false;
  }
  const { bottom, height, top } = el.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;
};

export const detectMobile = () => {
  if (isBrowser && (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i))
  ) {
    return true;
  } else {
    return false;
  }
};

export const checkHtml = string => {
  return /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(
    string
  );
};

export const debounce = (func, wait, immediate) => {
  var timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any
    // parameters passed to executedFunction
    var context = this;
    var args = arguments;

    // The function to be called after
    // the debounce time has elapsed
    var later = function () {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not on the leading end
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    var callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    // This is the step that prevents the function from
    // being executed because it will never reach the
    // inside of the previous setTimeout
    clearTimeout(timeout);

    // Restart the debounce waiting period.
    // setTimeout returns a truthy value (it differs in web vs node)
    timeout = setTimeout(later, wait);

    // Call immediately if you're dong a leading
    // end execution
    if (callNow) func.apply(context, args);
  };
};

export const stripHtml = (string = '') => {
  if (checkHtml(string)) {
    return string.replace(/(<([^>]+)>)/gi, '');
  }
  return string;
};
export const formatDate = (value, format) => {
  if (!format) {
    format = 'h:MM TT, dS mmm, yyyy';
  }
  if (value) {
    return dateformat(new Date(value), format);
  }
};

export const detectMobileVsDesktopForJioAds = () => {
  if (isBrowser) {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "ms"; // 'tablet'
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "ms"; // 'mobile'
    }
    return "dt"; // 'desktop'
  }
  return 'dt';
};

export const jioAdsConfigurationForCurrentDeviceType = () => {
  const jioAdsConfig = {
    ms: {
      banner: {
        adspots: ["15jpwudf", "37l1bxad", "ptayew1x"],
        imageType: 'customimage',
      },
      screenSaver: {
        adspots: ["cxd0tp8h", "wbon73uk", "o736n58v", "j013icbq"],
        imageType: 'mainimage'
      }
    },
    dt: {
      banner: {
        adspots: ["5vnd40t7", "nghpft9i", "7jw9inou"],
        imageType: 'customimage'
      },
      screenSaver: {
        adspots: ["5b21qyw4", "cr82nm9k", "7m5cpeyb", "qfy45agz"],
        imageType: 'mainimage'
      }
    }
  }
  return jioAdsConfig[detectMobileVsDesktopForJioAds()];
}

export const getAdsDataSource = () => {
  let host = '';
  if (isBrowser) {
    host = window && window.location.host
  }
  return host;
}

export const isSpecialNumChar = (event) => {
  let charCode = (event.which) ? event.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
    return true;
  }
  return false;
}

export function stringToHash(string) {
  var hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    var char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash;
}

export function markdownToHtml(markdown) {
  if (!markdown) return "";
  return marked.parse(markdown);
}

export function rawHtml(content) {
  // Handle HTML
  let html = content?.find(
    (elem) => elem.type === "html" || elem.type === "rawhtml"
  );
  html = (html && html.value) || "";

  // Handle CSS
  let css = content?.find((elem) => elem.type === "css");
  css = (css && css.value) || "";
  html = `<style>${css}</style>` + html;

  return html;
}

export function getMarkdown(content) {
  let markdown = content?.find((elem) => elem.type === "markdown");
  markdown = (markdown && markdown.value) || "";
  return markdown;
}

export const orderTabs = [
  { name: "CREATED", value: 0 },
  { name: "ORDERED", value: 1 },
  { name: "PROCESSING", value: 2 },
  { name: "SHIPPED", value: 3 },
  { name: "RETURNED", value: 4 },
  { name: "CANCELLED", value: 5 },
  { name: "DELIVERED", value: 6 },
]


let SDK_CONFIGURED = false;
export const JioSDKConfiguration = (uniqueID) => {
  if (SDK_CONFIGURED) return;
  ((uniqueID) => {
    if (!uniqueID) return;
    let currentUUID = uuidv5(uniqueID, JIOADS_NAMESPACE);
    if (isBrowser) {
      if (window.JioAds) {
        window.JioAds.setConfiguration({
          ifa: currentUUID,
          overlayInview: true
        })
        SDK_CONFIGURED = true;
      }
    }
  })(uniqueID)
}

/*
 * @param {Array} items Cart/Product items array
 * @return {Array} Items excluding bundles (free/paid)
 *
 */
export const excludeBundles = (items = []) => {
  return items.filter(item => {
    let custom_json =
      item?.product?._custom_json || {};

    if (!Object.keys(custom_json).length) return true;

    return custom_json?.type === "SERV" ? false : true;
  })
}
export const ADDRESS_FIELD_LABEL = {
  MOBILE_NO: "Mobile Number*",
  FIRST_NAME: "First Name*",
  LAST_NAME: "Last Name*",
  FULL_NAME: "Full Name",
  EMAIL: "Email*",
  OTP: "Enter OTP*",
  ADDRESSEE_NAME: "Contact Name*",
  ADDRESSEE_MOBILE: "Contact Mobile Number*",
  FLAT_NO: "Flat / House No.",
  BUILDING_ADDRESS: "Address*",
  BUILDING_NAME: "Building / Apartment Name",
  AREA_NAME:'Landmark / Area*',
  PINCODE: "Pincode*",
  STATE: "State",
  CITY: "City",
  GST:'GST Number',
  MAX_LENGTH_MOBILE_NO: 10,
  MAX_LENGTH_FIRST_NAME: 50,
  MAX_LENGTH_LAST_NAME: 50, 
  MAX_LENGTH_OTP: 6,
  MAX_LENGTH_ADDRESSEE_NAME: 256,
  MAX_LENGTH_ADDRESSEE_MOBILE: 10,
  MAX_LENGTH_FLAT_NO: 8,
  MAX_LENGTH_BUILDING_ADDRESS: 50,
  MAX_LENGTH_BUILDING_NAME: 40,
  MAX_LENGTH_AREA_NAME: 50,
  MAX_LENGTH_PINCODE: 6,
  MAX_LENGTH_GST: 15
}
export const MY_CART_QUERY = {
  NEW_USER: 'newUser',
  EXISTING_USER: 'exitsingUser',
  ADDRESS_UPDATE: 'address_update'
}
export const isAlphaNumeric = (e) => {
  // var regex = new RegExp("^[a-zA-Z0-9]+$");
  //   var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  //   console.log("WW",regex.test(str));
  let specialKeys = [8,9,46,35,36,37,39];  // containing keyCode of Backspace, Tab, Delete, End, Home, Left, Right 
  let keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    if((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || 
      (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)){
      return true;
      }
      return false;
}

export const modifyMultiArticleBody = (cartItems) => {
  if(!cartItems) return cartItems;
  let itemsMap = new Map();

  cartItems.map((item) => {
    if (!itemsMap.has(item.product.uid)) {
      itemsMap.set(item.product.uid, [item]);
    } else {
      itemsMap.get(item.product.uid).push(item);
    }
  });

  let itemsArray = [];

  for (const [_, articles] of itemsMap) {
    for (const article of articles) {
      if (
        article.parent_item_identifiers &&
        Object.keys(article.parent_item_identifiers).length
      ) {
        let parentArray = itemsMap.get(
          article.parent_item_identifiers.parent_item_id
        );
        if (Array.isArray(parentArray) && parentArray.length) {
          let [parent] = parentArray;
          parent.article.article_group = {
            ...(parent.article.article_group || {}),
            [article.product.item_code]: article.quantity,
          };
        }
      }
      itemsArray.push(article);
    }
  }

  return itemsArray;
}

export const showToast = (message, type, context) => {
  context.errorMessage.message = message;
  context.errorMessage.status = type;
  context.$nextTick(function() {
    const x = document.getElementById("toast");
    x.classList.add("show");
    setTimeout(function() {
      x.classList.remove("show");
    }, 3000);
  });
}

export const logout = () => {
  fetch(`${JIO_SAML_URL()}/saml-config`)
    .then((res) => res.json())
    .then((config) => {
      window.location.href = `${config.logoutUrl}?end_url=${window.location.origin}/c/asp-saml-logout`;
    })
    .catch(console.log);
};
