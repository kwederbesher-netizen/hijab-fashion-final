import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'hijab-fashion-mall26',

  projectId: '3k0vx7ep',
  dataset: 'production-final',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})