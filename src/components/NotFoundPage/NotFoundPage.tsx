import {RouteActionData} from '../RouteActionData/RouteActionData'
import {useDocumentTitle} from '../../hooks'
import {IRoutableProps} from '../../contract'

export const NotFoundPage = (props: IRoutableProps) => {
  useDocumentTitle(props)
  const {actionData} = props
  const previous = actionData?.previous

  const message = previous
    ? <span><code><b>{previous.target.pathname}</b></code> - not found</span>
    : <span>Not found</span>

  return (<>
    <p>404. {message}</p>
    <RouteActionData actionData={actionData}/>
  </>)
}
