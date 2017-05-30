/*
 * action types
 */

export const USER_INFO      = 'USER_INFO';
export const USER_LOGIN     = 'USER_LOGIN';
export const USER_REGISTER  = 'USER_REGISTER';


/*
* action DEFAULT creators EXPORTS
*/
export default userInfo;

/*
* action creators
*/
const userInfo             = user => ({type: USER_INFO, user});
export const userLogin     = user => ({type: USER_LOGIN, user});
export const userRegister  = user => ({type: USER_REGISTER, user});
