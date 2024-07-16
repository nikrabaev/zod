import { z } from "./src";

const obj = z.object({
  str1: z.string().collect('myStrings'),
  str2: z.string().collect('myStrings'),
  num1: z.string().collect('myNumbers'),
  num2: z.string().collect('myNumbers'),
});

console.log(obj.parseAndCollect({
  str1: 'hello',
  str2: 'world',
  num1: '1',
  num2: '2',
}));
