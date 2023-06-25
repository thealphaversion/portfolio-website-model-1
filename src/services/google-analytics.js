/**
 * @description This function is used to load the google tag manager script
 * @returns {string} This function returns the script for google tag manager
 */
export const googleAnalytics = () => {
    const script = document.createElement("script");

    script.src = "https://www.googletagmanager.com/gtag/js?id=G-0PEV7Z97HK";
    // script.async = true;

    document.body.appendChild(script);

    // This is a global tag manager function, we need to define it first
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
  
    // This is the first call to the global function, it initializes the
    // analytics library and tells it to start collecting data
    gtag("js", new Date());
  
    // This is the second call to the global function, it initializes the
    // analytics library and tells it to start collecting data
    gtag("config", 'G-0PEV7Z97HK');
  };