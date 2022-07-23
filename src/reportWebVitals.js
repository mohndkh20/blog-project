let reportWebVitals = ory => {
  if (ory && ory instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(ory);
      getFID(ory);
      getFCP(ory);
      getLCP(ory);
      getTTFB(ory);
    });
  }
};
//////////////////////////////////////////////
export default reportWebVitals;
//////////////////////////////////////////////
