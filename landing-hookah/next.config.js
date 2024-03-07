/**
 * @type {import('next').NextConfig}
 */
const nextTranslate = require('next-translate-plugin');
const withVideos = require('next-videos');

module.exports = withVideos(nextTranslate({}));
