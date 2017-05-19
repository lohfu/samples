import { batchActions } from 'redux-batched-actions';
import states from './states';

function set(key, payload) {
  // TODO handle two words, ie newsArticles
  return {
    type: `SET_${key.toUpperCase()}`,
    payload,
  };
}

function unset(key) {
  return { type: `UNSET_${key.toUpperCase()}` };
}

let currentKeys = [];

export default function changePage(path) {
  const state = states[path];
  const keys = [];
  const actions = [];

  Object.entries(state).forEach(([key, payload]) => {
    actions.push(set(key, payload));
    keys.push(key);
  });

  // add remove action for all currentKeys that are not in keys
  currentKeys.filter((key) => !keys.includes(key)).forEach((key) => {
    actions.push(unset(key));
  });

  currentKeys = keys;

  return batchActions(actions);
}

