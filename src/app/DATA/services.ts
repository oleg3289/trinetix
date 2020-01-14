export interface Service {
    type: string;
    img: string;
    title: string;
    text: string;
}

export const SERVICES: Service[] = [
    {
        type: 'mob',
        img: `/assets/elems/elem1.png`,
        title: `Mobile Apps`,
        text: `We are a nimble team of designers, 
        developers, and strategists who are 
        passionate about helping our clients 
        achieve their goals and grow their brands.`
    },
    {
        type: 'web',
        img: `/assets/elems/elem2.png`,
        title: `Web Services`,
        text: `We are a nimble team of designers, 
        developers, and strategists who are 
        passionate about helping our clients 
        achieve their goals and grow their brands.`
    },
    {
        type: 'aug',
        img: `/assets/elems/elem3.png`,
        title: `Augmented Reality`,
        text: `We are a nimble team of designers, 
        developers, and strategists who are 
        passionate about helping our clients 
        achieve their goals and grow their brands.`
    },
    {
        type: 'des',
        img: `/assets/elems/elem4.png`,
        title: `UX/UI Design`,
        text: `We are a nimble team of designers, 
        developers, and strategists who are 
        passionate about helping our clients 
        achieve their goals and grow their brands.`
    },
    {
        type: 'dev',
        img: `/assets/elems/elem5.png`,
        title: `Development`,
        text: `We are a nimble team of designers, 
        developers, and strategists who are 
        passionate about helping our clients 
        achieve their goals and grow their brands.`
    }
]