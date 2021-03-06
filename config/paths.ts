import * as path from 'path';
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = packageJson => 
  envPublicUrl || require(packageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(packageJson) {
  const publicUrl = getPublicUrl(packageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');

  return ensureSlash(servedUrl, true);
}

export const dotenv = resolveApp('.env');
export const clientBuild = resolveApp('build');
export const clientPublic = resolveApp('client/public');
export const clientHtml = resolveApp('client/public/index.html');
export const clientIndexTsx = resolveApp('client/index.tsx');
export const packageJson = resolveApp('package.json');
export const clientSrc = resolveApp('client');
export const yarnLockFile = resolveApp('yarn.lock');
export const testsSetup = resolveApp('client/setupTests.js');
export const nodeModules = resolveApp('node_modules');
export const publicUrl = getPublicUrl(resolveApp('package.json'));
export const servedPath = getServedPath(resolveApp('package.json'));
