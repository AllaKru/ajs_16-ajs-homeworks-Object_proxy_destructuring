
export default function destructor(obj) {
  // const arr = [];   вариант № 1
  // const { special } = obj;
  // console.log({ special });
  // console.log(special);
  // special.forEach((element) => {
  //   const {
  //     id, name, icon, description = 'Описание недоступно',
  //   } = element;
  //   arr.push({
  //     id, name, icon, description,
  //   });
  //   console.log(arr);
  // });
  // return arr;


  const { special } = obj; // вариант № 2
  const arr = special.map(({
    id, name, icon, description = 'Описание недоступно',
  }) => ({
    id, name, icon, description,
  }));
  return arr;
}
