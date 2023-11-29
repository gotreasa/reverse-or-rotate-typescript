/* eslint-disable no-console */
import { resolve } from 'path';

import pact from '@pact-foundation/pact-node';
import { versionFromGitTag } from 'absolute-version';
import branchName from 'current-git-branch';
import { PublisherOptions } from '@pact-foundation/pact-core';

const options: PublisherOptions = {
  pactFilesOrDirs: [resolve(__dirname, '../../pact/pacts')],
  pactBroker: 'https://gotreasa.pactflow.io/',
  // eslint-disable-next-line no-process-env
  pactBrokerToken: process.env.PACT_BROKER_TOKEN,
  consumerVersion: versionFromGitTag({
    tagGlob: '[0-9]*',
  }),
  branch: branchName() as string,
};

pact
  .publishPacts(options)
  .then(() => {
    console.log('Pact contract publishing complete!');
  })
  .catch((error: Error) => {
    console.log('Pact contract publishing failed: ', error);
  });
