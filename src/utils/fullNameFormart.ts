const fullName = (name: string): any => {

  const preps = [' de ', ' da ', ' das ', ' do ', ' dos ', ' e '];
  
  if (name) {
    const formatedName = name.toLocaleLowerCase().trimLeft().trimRight();
    const splitedName = name.split(' '); 
    
    if (preps.some(prep => formatedName.includes(prep))) {
      return `${splitedName[0]} ${splitedName[splitedName.length - 1]}`;
    } else {
      return `${splitedName[0]} ${splitedName[1]}`;
    }
  }
}

export default fullName;