/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': true,

    StatusList2021Credential: {
      '@id': 'https://w3id.org/vc/status-list#statuslist2021credential',
      '@context': {
        '@protected': true,

        id: '@id',
        type: '@type',

        description: 'http://schema.org/description',
        name: 'http://schema.org/name'
      }
    },

    RevocationList2021: {
      '@id': 'https://w3id.org/vc/status-list#RevocationList2021',
      '@context': {
        '@protected': true,

        id: '@id',
        type: '@type',

        encodedList: 'https://w3id.org/vc/status-list#encodedList'
      }
    },

    RevocationList2021Status: {
      '@id': 'https://w3id.org/vc/status-list#revocationlist2021status',
      '@context': {
        '@protected': true,

        id: '@id',
        type: '@type',

        statusListCredential: {
          '@id':
            'https://w3id.org/vc/status-list#statusListCredential-1',
          '@type': '@id'
        },
        statusListIndex:
          'https://w3id.org/vc/status-list#statusListIndex-1'
      }
    },

    SuspensionList2021Status: {
      '@id':
        'https://w3id.org/vc/status-list#suspensionlist2021status',
      '@context': {
        '@protected': true,

        id: '@id',
        type: '@type',

        statusListCredential: {
          '@id':
            'https://w3id.org/vc/status-list#statusListCredential-2',
          '@type': '@id'
        },
        statusListIndex:
          'https://w3id.org/vc/status-list#statusListIndex-2'
      }
    }
  }
};