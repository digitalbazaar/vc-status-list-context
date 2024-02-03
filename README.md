# vc-status-list-context _(vc-status-list-context)_

[![Build status](https://img.shields.io/github/workflow/status/digitalbazaar/vc-status-list-context/Node.js%20CI)](https://github.com/digitalbazaar/vc-status-list-context/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage status](https://img.shields.io/codecov/c/github/digitalbazaar/vc-status-list-context)](https://codecov.io/gh/digitalbazaar/vc-status-list-context)
[![NPM Version](https://img.shields.io/npm/v/vc-status-list-context.svg)](https://npm.im/vc-status-list-context)

> A Verifiable Credential Status List JSON-LD context for JavaScript.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [Status List 2021](https://w3c-ccg.github.io/vc-status-list-2021/)

## Install

Requires Node.js 18+

To install via NPM:

```
npm install @digitalbazaar/vc-status-list-context
```

## Usage

```js
import statusListCtx from '@digitalbazaar/vc-status-list-context';
// or
const statusListCtx = require('@digitalbazaar/vc-status-list-context');
const {contexts, constants, appContextMap} = statusListCtx;

statusListCtx.CONTEXT_URL_V1
// 'https://w3id.org/vc/status-list/v1'

// Codec term map value for CBOR-LD
statusListCtx.constants.CBORLD_CODEC_VALUE
// 0x0..

// get context data for a specific context
statusListCtx.CONTEXT_V1
// full context object
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL_V1` and `CONTEXT_V1` (it's recommended that context repositories only export one context).
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL_V1` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.
- `appContextMap`: For use with `cborld` library.

## Developing

WARNING: The `.jsonld` in `contexts/` is auto-generated by the `npm run build` script,
each time you run the test suite.

DO NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[webpack]: https://webpack.js.org/
