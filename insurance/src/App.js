import React from 'react';
import {createStore, combineReducers} from 'redux';

console.clear();

// People dropping off the form(Action Creators)
const createPolicy = (name, amount) => {
  return { // Action(a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
}

// Reducers(Departments)
// Reducer は 2つの引数を受け取る
// 1つ目: store(中央データ格納庫) に存在している、自身が管理しているデータ
// 2つ目: action オブジェクト
// action オブジェクトの中身をチェックして、必要であれば自身が管理しているデータに変更を加え、変更の必要が無ければ、受け取った store のデータをそのまま返す
// Reducer が一発目に呼ばれる時、自身が管理する store の値（ここでは oldListOfClaims）は存在せず undefined として受け取ってしまうため、デフォルト値をセットして処理しやすくする
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    // push を使って追加することも可能だが、既存の配列に変更を加えるよりも、新しい配列を生成して返すイミュータブルなやり方の方が良い
    // 配列に限らず、オブジェクトなど他の場合も同様
    // 例えば、... この例の最後に紹介される
    // oldListOfClaims.push(action.payload)  // これはミュータブルなのでNG
    return [...oldListOfClaims, action.payload]
  }

  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }else if(action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name)
  }

  return listOfPolicies;
}

// combineReducers() を使って Reducers をまとめる
// ここで指定したキーが、stateオブジェクトのプロパティになる
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// createStore() を使って、storeを生成する
// store は まとめておいた Reducer と、Reducer が生成する state の参照を保持している
// store が持つ dispatch() は、action object を受け取ってそれをコピーして store が保持している全 reducer に state の情報とともに渡し、reducer 関数を実行する
const store = createStore(ourDepartments);

// dispatch を行なう以下の各行が Redux Cycle を回しており、その結果 state を更新している
// Redux Cycle: ActionCreator -> Action -> dispatch -> Reducers -> state
// state の値は dispatch に Action を渡すことで変更する以外の方法で変更することはしない
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 20));
store.dispatch(deletePolicy('Jim'));

// store.getState() は Reducer によって生成・更新される中央データの一覧(state オブジェクト)を返す
console.log(store.getState());
/**
 * store.getState() の結果（state オブジェクトのdump）
 *
 * {
 *     accounting:  50
 *     claimHistory: [
 *         {name: 'Alex', amountOfMoneyToCollect: 120},
 *         {name: 'Jim', amountOfMoneyToCollect: 20},
 *     ],
 *     policies: ['Alex', 'Bob]
 * }
 */

function App() {
  return (
    <div>Hello world</div>
  );
}

export default App;
