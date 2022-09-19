/**
 * When compiling for web, it will search for index.js on root/src.
 */
import 'react-native-gesture-handler';
import {createRoot} from 'react-dom/client';
// Notice the import path `@shopify/react-native-skia/lib/module/web`
// This is important only to pull the code responsible for loading Skia.
// @ts-expect-error
import {LoadSkiaWeb} from '@shopify/react-native-skia/lib/module/web';

import App from './App';
import reportWebVitals from './reportWebVitals';

// RNVI integration for web
import './icons';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
LoadSkiaWeb().then(async () => {
  root.render(<App />);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
