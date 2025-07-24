'use strict';

/**
 * saint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saint.saint');
