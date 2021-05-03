import db from '../services/SQLlite';

db.transaction((tx) => {
  tx.executeSql(
    'CREATE IF NO EXISTS palletSimples ( codigo INTEGER, nome TEXT, tom INTEGER, palletsA INTEGER, caixasA INTEGER, palletsC INTEGER, caixasC INT'
  );
});

export const InsertInto = ({
  codigo,
  nome,
  tom,
  palletsA,
  caixasA,
  palletsC,
  caixasC,
}) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'insert into palletSimples (codigo, nome, tom, palletsA, caixasA, palletsC, caixasC ) values (?, ?, ?, ?, ?, ?, ?)',
        [codigo, nome, tom, palletsA, caixasA, palletsC, caixasC],
        tx.executeSql('select * from palletSimples', [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        )
      );
    });
  });
};
