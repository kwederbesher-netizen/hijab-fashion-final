import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'  // ✅ علق
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Hijab Fashion Mall',
  projectId: '3k0vx7ep',
  dataset: 'production-final',
  plugins: [
    structureTool(),
    // visionTool(),  // ✅ علق
  ],
  schema: {
    types: schemaTypes,
  },
})