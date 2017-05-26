/*
 * action types
 */

export const LIST_CLIENT = 'LIST_CLIENT';


/*
* action creators EXPORTS
*/
export default listClient;


/*
* action creators
*/
const listClient = clients => ({type: LIST_CLIENT, clients});
