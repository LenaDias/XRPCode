/* eslint-disable */
;(function(root, factory) {
    if (typeof define === 'function' && define.amd) { // AMD
        define(['./core', './csharp_compressed.js'], factory);
    } else if (typeof exports === 'object') { // Node.js
        module.exports = factory(require('./core'), require('./csharp_compressed.js'));
    } else { // Browser
        root.csharp = factory(root.Blockly);
        root.Blockly.CSharp = new Blockly.Generator('CSharp');
    }
}(this, function(Blockly, BlocklyCSharp) {
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */

    /**
     * @fileoverview CSharp generator module; just a wrapper for
     *     csharp_compressed.js.
     */

    return BlocklyCSharp;
}));
