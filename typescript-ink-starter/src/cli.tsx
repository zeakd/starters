#!/usr/bin/env node

import React from 'react';
import { render, Text } from 'ink';
import meow from 'meow';

const cli = meow(`
  Usage: 
    $ hello

  Options
    --color   Color

  Examples
    $ hello --color red
`, {
  flags: {
    color: {
      type: 'string',
      default: 'white',
    },
  },
});

render(<Text color={cli.flags.color}>Hello!</Text>);
