export default {
    js:`import api from "./common/api.js";
import { Emitter } from '../events/listener.js';

async function render(template, defaults = "") {
 try {
     Emitter.emit("template.render", { template })
     return await api.get(/template,{ template });
 } catch (error) {
     Emitter.emit("template.render.error", { error });
     return defaults;
 }
}
`,

    css : `@import url(fonts.css);

:root {
    --primary-color: #00c0a8;
    --highlighted-font-color: #22b5ab;
    --primary-font-color: #FFF;
    --secondary-font-color: #d8dce8;
    --tertiary-font-color: #818aa6;
    --primary-background-color: #10172c;
}`,
   json:`{
  "liveServer.settings.port": 5501
}`,
    html:`<!DOCTYPE html>
<html>
 <head>
     <meta charset="UTF-8" />
     <title>Innovate <with/> Alex</title>
 </head>
 <body>
    Innovate <with/> Alex
 </body>
</html>
    `
}