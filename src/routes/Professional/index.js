import ProfessionalLayout from '../../layouts/ProfessionalLayout'
import ResumeRoute from '../Resume'
import ContactRoute from '../Contact'

export const createRoutes = (store) => ({
  path: 'professional',
  component: ProfessionalLayout,
  childRoutes: [
    ResumeRoute(store),
    ContactRoute(store)
  ]
})

export default createRoutes
