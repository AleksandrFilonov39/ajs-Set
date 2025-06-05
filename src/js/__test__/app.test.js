import Team from '../app'

test('create new Set', () => {
    const team = new Team();
    expect(team).toBeInstanceOf(Team)
})


test('add hero success', () => {
    const hero = { name: 'Маг' };
    const team = new Team();
    team.add(hero);
    expect(1).toBe(team.members.size)
})

test('add hero error', () => {
    const hero = { name: 'Маг' };
    const team = new Team();
    team.add(hero);
    expect(() => team.add(hero)).toThrow('такой объект уже существует в команде');
})


test('add all heroes', () => {
    const hero = [{ name: 'Маг' }, { name: 'Лучник' }, { name: 'Варвар' }];
    const team = new Team();
    team.addAll(...hero);
    expect(3).toBe(team.members.size);
})

test('check is Array', () => {
    const hero = [{ name: 'Маг' }, { name: 'Лучник' }, { name: 'Варвар' }];
    const team = new Team();
    team.addAll(...hero)
    expect(team.toArray()).toBeInstanceOf(Array);
})


