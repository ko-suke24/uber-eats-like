// --- 次でuseReducerを追加 ---
import React, { Fragment, useEffect, useReducer } from 'react';

import { fetchLineFoods } from '../apis/line_foods';
// --- ここから追加 ---
// reducers
import {
  initialState,
  lineFoodsActionTyps,
  lineFoodsReducer,
} from '../reducers/lineFoods';
// --- ここまで追加 ---

export const Orders = () => {
  // --- ここから追加 ---
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);
  // --- ここまで追加 ---

  useEffect(() => {
    // --- ここから修正 ---
    dispatch({ type: lineFoodsActionTyps.FETCHING });
    fetchLineFoods()
      .then((data) =>
        dispatch({
          type: lineFoodsActionTyps.FETCH_SUCCESS,
          payload: {
            lineFoodsSummary: data
          }
        })
      )
      .catch((e) => console.error(e));
    // --- ここから修正 ---
  }, []);
  
  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}
