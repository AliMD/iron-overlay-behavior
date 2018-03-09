import '../../polymer/polymer.js';
import './test-overlay.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      #scrollable, #overlay {
        max-width: 200px;
        max-height: 200px;
        overflow: auto;
      }
    </style>
    <div id="scrollable">
      <slot name="scrollable-content"></slot>
    </div>
    <test-overlay id="overlay">
      <slot name="overlay-content"></slot>
    </test-overlay>
`,

  is: 'test-scrollable'
});
