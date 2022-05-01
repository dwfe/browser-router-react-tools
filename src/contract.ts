import {IActionData} from '@do-while-for-each/browser-router'
import {HTMLProps} from 'react'

export interface IRoutableProps extends HTMLProps<any> {
  actionData?: IActionData;
}
