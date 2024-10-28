import Chance from "chance";
const chance = Chance();

export const fakeUserData = () => {
  return {
    firstName: chance.first(),
    lastName: chance.last(),
  };
};
