import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'myPortfolioDev',

  projectId: 'c0i91ixf',
  dataset: 'schema',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
