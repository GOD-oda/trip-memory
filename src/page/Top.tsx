import React from 'react';

import { firebaseApp } from '../firebase/firebaseApp';
import { getDatabase, ref, onValue } from 'firebase/database';

const Top = () => {
  const database = getDatabase(firebaseApp);
  const michinoekisRef = ref(database, '/michinoekis');

  // TODO: 取得仕切る前にレンダリングされる
  const michinoekis: any[] = [];
  onValue(michinoekisRef, (snapshot) => {
    snapshot.forEach((v) => {
      console.log(JSON.parse(v.val()));
      michinoekis.push(JSON.parse(v.val()));
    });
  })

  console.log(michinoekis);

  return (
    <div>
      <h2>道の駅</h2>
      {michinoekis.map((michinoeki) => (
        <div key={michinoeki.id}>
          {michinoeki.name}
        </div>
      ))}
    </div>
  );
}

export default Top;