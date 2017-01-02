import PersonalLayout from '../../layouts/PersonalLayout'
import GalleryRoute from '../Gallery'
import InterestsRoute from '../Interests'
import BlogRoute from '../Blog'

export const createRoutes = (store) => ({
  path: 'personal',
  component: PersonalLayout,
  childRoutes: [
    GalleryRoute,
    InterestsRoute,
    BlogRoute
  ]
})

export default createRoutes
