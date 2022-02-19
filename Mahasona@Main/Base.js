//https://github.com/KING-MAHASONA-crew/

// Licensed under GNU 3.0 or later.
// Don't try to fork or Replace it with your codes.
// Respect For the Developer.

// Coded by Yuren Sasanka.

'use strict';

class Base {
    constructor(client) {
        Object.defineProperty(this, 'client', { value: client });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }
    
    _patch(data) { return data; }
}

module.exports = Base;
