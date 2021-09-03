/// <reference types="parse" />

Parse.Cloud.define('hello', (req:Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) => {
  (req as any).log.info(req);
  return 'Hi';
});
