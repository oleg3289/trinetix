export interface FilterLink {
    name: string;
    type: string;
}

export const filterLinks: FilterLink[] = [
    {name: 'All', type: 'all'},
    {name: 'Mobile Apps', type: 'mob'},
    {name: 'Web Services', type: 'web'},
    {name: 'Augmented Reality', type: 'aug'},
    {name: 'UX/UI Design', type: 'des'},
    {name: 'Development', type: 'dev'},
]