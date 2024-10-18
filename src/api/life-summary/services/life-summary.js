'use strict';

/**
 * life-summary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::life-summary.life-summary');
