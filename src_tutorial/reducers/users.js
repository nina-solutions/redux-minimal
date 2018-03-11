import reducerCall from './index'

/**
 * Reducer for users
 * @param state
 * @param action
 * @returns {*}
 */
export default function users(state={}, action) {
  return reducerCall(state, action, reducerClass);
}

/**
 * reducer static class
 */
class reducerClass {
  /**
   * show the delete prompt
   * @param new_state
   * @param action
   * @returns {*}
   */
  static modalDeleteShow(new_state, action) {
    new_state.modal = new_state.modal ? new_state.modal : {};
    new_state.modal.list_delete = {
      show: true,
      id: action.id,
      username: action.username
    };
    return new_state;
  }

  /**
   * hide the delete prompt
   * @param new_state
   * @param action
   * @returns {*}
   */
  static modalDeleteHide(new_state, action) {
    new_state.modal.list_delete = {
      show: false,
      id: 0,
      username: ''
    };
    return new_state;
  }

  /**
   * actually delete the user
   * @param new_state
   * @param action
   * @returns {*}
   */
  static delete(new_state, action) {
    for (const i in new_state.list) {
      if (new_state.list[i].id === action.id) {
        new_state.list.splice(i, 1);
        break;
      }
    }
    return new_state;
  }
}
