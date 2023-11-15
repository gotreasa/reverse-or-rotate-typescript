# README

[![License: AGPL](https://img.shields.io/badge/License-AGPL-blue.svg)](https://github.com/gotreasa/reverse-or-rotate-typescript/blob/main/LICENSE)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_reverse-or-rotate-typescript&metric=alert_status)](https://sonarcloud.io/dashboard?id=gotreasa_reverse-or-rotate-typescript)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_reverse-or-rotate-typescript&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=gotreasa_reverse-or-rotate-typescript)
[![Known Vulnerabilities](https://snyk.io/test/github/gotreasa/reverse-or-rotate-typescript/badge.svg)](https://snyk.io/test/github/gotreasa/reverse-or-rotate-typescript)
[![Build Status](https://github.com/gotreasa/reverse-or-rotate-typescript/actions/workflows/pipeline.yml/badge.svg)](https://github.com/gotreasa/reverse-or-rotate-typescript/actions/workflows/pipeline.yml)
[![OpenAPI Validation](https://validator.swagger.io/validator?url=https://raw.githubusercontent.com/gotreasa/reverse-or-rotate-typescript/main/openapi.yaml)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/gotreasa/reverse-or-rotate-typescript/main/openapi.yaml)
[![Can I Deploy main to test](https://gotreasa.pactflow.io/pacticipants/reverse-or-rotate-typescript_app/branches/main/latest-version/can-i-deploy/to-environment/test/badge)](https://gotreasa.pactflow.io/hal-browser/browser.html#https://gotreasa.pactflow.io/pacticipants/reverse-or-rotate-typescript_app/branches/main/latest-version/can-i-deploy/to-environment/test/badge)

Reverse or Rotate - TypeScript repository

## Contributing

Please consult [CONTIRBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

## Description

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:

```js
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
revrot("563000655734469485", 4) --> "0365065073456944"
```

Example of a string rotated to the left by one position:

```js
s = "123456" gives "234561".
```
