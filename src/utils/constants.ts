export const todoListDefault = [
    {id: 1, subtitle: 'Read Typescript documentation', important: false, done: false},
    {id: 2, subtitle: 'Buy cat food', important: false, done: false},
    {id: 3, subtitle: 'Make a ToDo List', important: true, done: false},
    {id: 4, subtitle: 'Play new game from Paradox', important: false, done: false},
]

export const buttonFilterArray = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
]


export interface TodoItemInterface  {
    id: number,
    subtitle: string,
    important: boolean,
    done: boolean,

};
