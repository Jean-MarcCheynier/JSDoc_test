
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  
      import _CustomWrapper from '../../src/WrapperDocExample.js';

      window._CustomWrapper = _CustomWrapper;

      import Component0 from '../../src/DocumentedComponent.js';
reactComponents['DocumentedComponent'] = Component0;