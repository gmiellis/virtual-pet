const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('has an initial hunger value of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('throws an error if the pet is not alive', () => {

        const pet = new Pet('Fido');
        pet.age = 30;

        expect(pet.growUp).toThrow('Your pet is dead - so dead - deader than a dead thing on dead day :(');
    });
});

describe('hunger', () => {

    it('increments hunger by 5 when growUp actioned', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
});

describe('fitness', () => {

    it('decreases the fitness by 3 when growUp actioned', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {

    it('increases fitness by 4', () => {

        const pet = new Pet('Fido');
        pet.fitness = 4
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by to a max of 10', () => {

        const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {

        const pet = new Pet('Fido');
        pet.age = 30;

        expect(pet.walk).toThrow('Your pet is dead - so dead - deader than a dead thing on dead day :(');
    });
});

describe('feed', () => {

    it('decreases hunger by 3', () => {

        const pet = new Pet('Fido');
        pet.growUp();
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });

    it('throws an error if the pet is not alive', () => {

        const pet = new Pet('Fido');
        pet.age = 30;

        expect(pet.feed).toThrow('Your pet is dead - so dead - deader than a dead thing on dead day :(');
    });
});

describe('checkUp', () => {

    it('alerts if fitness < 3', () => {

        const pet = new Pet('Fido');
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I need a walk');
    });

    it('alerts if hunger > 5', () => {

        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.checkUp();
       expect(pet.checkUp()).toEqual('I am hungry'); 
    });

    it('alerts if fitness < 3 & hunger > 5', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        pet.hunger = 6;        
        pet.checkUp();

        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
    
    it('alerts if fitness > 3 & hunger < 5', () => {

        const pet = new Pet('Fido');
        pet.fitness = 6;
        pet.hunger = 4;
        pet.checkUp();

        expect(pet.checkUp()).toEqual('I feel great!');
    });

    it('throws an error if the pet is not alive', () => {

        const pet = new Pet('Fido');
        pet.age = 30;

        expect(pet.checkUp).toThrow('Your pet is dead - so dead - deader than a dead thing on dead day :(');
    });
});

describe('isAlive', () => {

    it('alerts pet dead if age > 30', () => {
        
        const pet = new Pet('Fido');
        pet.age = 31;
        pet.isAlive;

        expect(pet.isAlive).toBe(false);
    });

    it('alerts pet dead if fitness <= 0', () => {

        const pet = new Pet('Fido');
        pet.age = 25;
        pet.fitness = -1;
        pet.isAlive;

        expect(pet.isAlive).toBe(false);
    });

    it('alerts pet dead if hunger >= 10', () => {

        const pet = new Pet('Fido');
        pet.age = 25;
        pet.hunger = 12;
        pet.isAlive;

        expect(pet.isAlive).toBe(false);
    });

    it('alerts pet alive if all ok', () => {

        const pet = new Pet('Fido');
        pet.age = 25;
        pet.hunger = 8;
        pet.fitness = 5;
        pet.isAlive;

        expect(pet.isAlive).toBe(true);
    });

});