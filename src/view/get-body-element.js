// @flow
import { invariant } from '../invariant';
import { getBody } from '../root';

export default (): HTMLElement => {
  const body: ?HTMLElement = getBody();
  invariant(body, 'Cannot find body element');
  return body;
};
