// ** Types Imports
import type { INavigation } from '~~/types/core.types'

export default [
    {
        title: 'Home',
        name: 'index',
        to: '/'
    },
    {
        title: 'Category',
        name: 'category',
        to: 'danh-muc-moi'
    },
    {
        title: 'About',
        name: 'about',
        to: 'gioi-thieu'
    },
    {
        title: 'Contact',
        name: 'contact',
        to: 'lien-he'
    }
] as INavigation[]
