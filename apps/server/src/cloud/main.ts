import * as Parse from 'parse/node'
Parse.Cloud.define('hello', (res) =>
    (res as any).success('Hi')
)