/// <reference path="detect-indent-tests.d.ts" />

import di = require('detect-indent');

var str: string;

str = di(str);
str = di(str, str);
