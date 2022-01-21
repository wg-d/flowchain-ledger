/**
 *
 * The MIT License (MIT)
 *
 * https://www.flowchain.co
 *
 * Copyright (c) 2016-present Jollen
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

'use strict';

/**
 * The RPC operations built upon Chord protocols.
 */
var Chord = {
    NOTIFY_STABILIZE: 0,
    NOTIFY_PREDECESSOR: 1,
    NOTIFY_SUCCESSOR: 2,
    NOTIFY_JOIN: 3,

    // Send messages to the hybrid node (aka. the edge node) for consensus
    NOTIFY_EDGE: 4,
    
    FIND_SUCCESSOR: 5,
    FOUND_SUCCESSOR: 6,
    CHECK_PREDECESSOR: 7,
    CHECK_SUCESSOR: 8,
    CHECK_TTL: 9,
    MESSAGE: 10
};

if (typeof(module) != "undefined" && typeof(exports) != "undefined")
  module.exports = Chord;
