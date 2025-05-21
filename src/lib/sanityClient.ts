import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'yu83al1c',       // ← Este es tu Project ID real
  dataset: 'production',
  apiVersion: '2023-01-01',    // Puede ser cualquier fecha ISO válida
  useCdn: true,
});
