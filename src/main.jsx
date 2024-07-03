import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://c9ad79605935ff0c2b920032a761f0db@o4507519030919168.ingest.us.sentry.io/4507519035506688",
  integrations: [
    Sentry.browserTracingIntegration(),
    
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect:React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText:false,
      blockAllMedia:false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
 
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, });



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
