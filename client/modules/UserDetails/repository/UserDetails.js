export class UserDetails {
  static getUserDetails() {
    const now = Date.now();
    return Promise.resolve({
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
  }
}
