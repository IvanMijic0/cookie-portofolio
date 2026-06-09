import fs from 'node:fs';
import path from 'node:path';

const libDir = path.join(process.cwd(), 'node_modules', 'page-flip');
const moduleJsPath = path.join(libDir, 'dist', 'js', 'page-flip.module.js');
const browserJsPath = path.join(libDir, 'dist', 'js', 'page-flip.browser.js');

const files = [moduleJsPath, browserJsPath];

const replacements = [
  {
    desc: 'render(t) early return when idle',
    target: 'render(t){if(null!==this.animation){const e=Math.round((t-this.animation.startedAt)/this.animation.durationFrame);e<this.animation.frames.length?this.animation.frames[e]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=t,this.drawFrame()}',
    replacement: 'render(t){if(null!==this.animation){const e=Math.round((t-this.animation.startedAt)/this.animation.durationFrame);e<this.animation.frames.length?this.animation.frames[e]():(this.animation.onAnimateEnd(),this.animation=null)}else if("read"===this.app.getState())return;this.timer=t,this.drawFrame()}'
  },
  {
    desc: 'update() layout resize redraw',
    target: 'update(){this.boundsRect=null;const t=this.calculateBoundsRect();this.orientation!==t&&(this.orientation=t,this.app.updateOrientation(t))}',
    replacement: 'update(){this.boundsRect=null;const t=this.calculateBoundsRect();this.orientation!==t&&(this.orientation=t,this.app.updateOrientation(t)),this.drawFrame()}'
  },
  {
    desc: 'setRightPage(t) static page set redraw',
    target: 'setRightPage(t){null!==t&&t.setOrientation(1),this.rightPage=t}',
    replacement: 'setRightPage(t){null!==t&&t.setOrientation(1),this.rightPage=t,this.drawFrame()}'
  },
  {
    desc: 'setLeftPage(t) static page set redraw',
    target: 'setLeftPage(t){null!==t&&t.setOrientation(0),this.leftPage=t}',
    replacement: 'setLeftPage(t){null!==t&&t.setOrientation(0),this.leftPage=t,this.drawFrame()}'
  },
  {
    desc: 'reload() HTMLRender static page reload redraw',
    target: 'reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}',
    replacement: 'reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows(),this.drawFrame()}'
  },
  {
    desc: 'reload() CanvasRender static page reload redraw',
    target: 'getContext(){return this.ctx}reload(){}',
    replacement: 'getContext(){return this.ctx}reload(){this.drawFrame()}'
  }
];

try {
  console.log('--- Direct Patching page-flip distribution bundles ---');

  for (const filePath of files) {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}, skipping.`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    let patchedCount = 0;

    for (const rep of replacements) {
      if (content.includes(rep.target)) {
        content = content.replace(rep.target, rep.replacement);
        patchedCount++;
        console.log(`✓ [${path.basename(filePath)}] Patched: ${rep.desc}`);
      } else if (content.includes(rep.replacement)) {
        console.log(`- [${path.basename(filePath)}] Already patched: ${rep.desc}`);
      } else {
        console.warn(`⚠ [${path.basename(filePath)}] Target not found: ${rep.desc}`);
      }
    }

    if (patchedCount > 0) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Successfully saved patches to: ${filePath}`);
    }
  }

} catch (error) {
  console.error('❌ Failed to patch page-flip library:', error);
}
