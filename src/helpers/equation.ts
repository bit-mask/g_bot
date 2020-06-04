import { Equation } from '../models'

var multi:string[][]  = [
    ['Enter the last 4 digits of the submitted cl number of http://cl/12345678. Please note the given cl number is OCL. You have to open critique to see the submitted cl number.', '4054'],
    ['Enter the last 4 digits of the submitted cl number of http://cl/98765432. Please note the given cl number is OCL. You have to open critique to see the submitted cl number.', '8179'],
    ['Enter the last 4 digits of the submitted cl number of http://cl/246810. Please note the given cl number is OCL. You have to open critique to see the submitted cl number.', '7039'],
    ['Enter the last 4 digits of the submitted cl number of http://cl/23456789. Please note the given cl number is OCL. You have to open critique to see the submitted cl number.', '1817'],
    ['Enter the last 4 digits of the submitted cl number of http://cl/45678911. Please note the given cl number is OCL. You have to open critique to see the submitted cl number.', '1546'],
    ['Enter the last 4 digits of the submitted cl number of http://cl/357913. Please note the given cl number is OCL. You have to open critique to see the submitted cl number.', '7915'],
    ['Enter the last 4 digits of the submitted cl number of http://cl/6543210. Please note the given cl number is OCL. You have to open critique to see the submitted cl number.', '9450'],
];

export function generateEquation() {
  const a = getRandomInt()
  return {
    question: multi[a][0],
    answer: multi[a][1],
  } as Equation
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(multi.length - 1))
}
