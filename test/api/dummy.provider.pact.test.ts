import { versionFromGitTag } from 'absolute-version';
import { Verifier } from '@pact-foundation/pact';
import branchName from 'current-git-branch';
import { LogLevel } from '@pact-foundation/pact-core';

import server from '../../app';

// eslint-disable-next-line no-process-env
const baseUrl = `http://localhost:${process.env.SERVER_PORT || 9080}`;

const providerOptions = {
  logLevel: 'INFO' as LogLevel,
  providerBaseUrl: baseUrl,
  provider: 'reverse-or-rotate-typescript_app',
  providerBranch: `${branchName()}`,
  providerVersion: versionFromGitTag({
    tagGlob: '[0-9]*',
  }),
  matchingRules: {
    body: {},
  },
  stateHandlers: {},
};

const pactUrl =
  './pact/pacts/reverse-or-rotate-typescript_client-reverse-or-rotate-typescript_app.json';

// eslint-disable-next-line no-process-env
if (process.env.CI) {
  Object.assign(providerOptions, {
    pactBrokerUrl: 'https://gotreasa.pactflow.io/',
    pactUrls: [pactUrl],
    publishVerificationResult: true,
  });
} else {
  Object.assign(providerOptions, {
    pactUrls: [pactUrl],
  });
}

describe('Reverse or Rotate - TypeScript Provider', () => {
  afterAll(() => {
    server.close();
  });

  test('tests Reverse or Rotate - TypeScript api routes', async () => {
    const output: string = await new Verifier(providerOptions).verifyProvider();
    expect(output).toContain('finished: 0');
  });
});
