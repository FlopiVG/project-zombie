export class UserDetails {
  static getUserDetails() {
    const now = Date.now();

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: "Flopi",
          stats: {
            fuerza: 8,
            inteligencia: 8,
            percepcion: 9,
            destreza: 8,
            constitucion: 9,
            suerte: 10
          },
          actions: {
            exploring: {
              start: now,
              finish: now + 5000
            }
          }
        });
      }, 2000);
    });
  }

  static startAction(action) {
    const now = Date.now();

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          [action]: {
            start: now,
            finish: now + 10000
          }
        });
      }, 2000);
    });
  }

  static cancelAction(action) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          [action]: { start: 0, finish: 0 }
        });
      }, 2000);
    });
  }
}
