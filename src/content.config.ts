// ==========================================
// CONTENT COLLECTIONS CONFIGURATION
// ==========================================
// This file defines the structure and validation for your content.
// To add new types of content (like restaurants, hotels, etc.), 
// create new collections below following the same pattern.

import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// ==========================================
// WALKS COLLECTION
// ==========================================
// Configure walking route content structure
// Files location: src/content/walks/*.md
// To customize: Add or remove fields in the schema below
const walks = defineCollection({
	loader: glob({ base: './src/content/walks', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		// REQUIRED FIELDS
		title: z.string(),                    // Walk name
		description: z.string(),              // Short description for cards
		city: z.string(),                     // Must match city ID (folder name)
		duration: z.string(),                 // e.g., "2 hours", "Half day"
		distance: z.string(),                 // e.g., "5 km", "3 miles"
		difficulty: z.enum(['easy', 'moderate', 'challenging']),
		startPoint: z.string(),               // Where the walk begins
		endPoint: z.string(),                 // Where the walk ends
		highlights: z.array(z.string()),      // Array of key attractions
		
		// OPTIONAL FIELDS
		mapImage: z.string().optional(),      // Path to route map image
		coverImage: z.string().optional(),    // Hero image for the walk
		updatedDate: z.coerce.date().optional(), // Last update date
		
		// TO ADD MORE FIELDS:
		// price: z.number().optional(),        // If walks have costs
		// tags: z.array(z.string()).optional(), // Categories like "historic", "nature"
		// gpxFile: z.string().optional(),      // GPS track file
	}),
});

// ==========================================
// CITIES COLLECTION
// ==========================================
// Configure city information structure
// Files location: src/content/cities/*.md
// To customize: Add or remove fields in the schema below
const cities = defineCollection({
	loader: glob({ base: './src/content/cities', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		// REQUIRED FIELDS
		name: z.string(),                     // City name for display
		country: z.string(),                  // Country name
		description: z.string(),              // City description
		
		// OPTIONAL FIELDS
		image: z.string().optional(),         // Hero image for city page
		totalWalks: z.number().optional(),    // Number of available walks
		
		// TO ADD MORE FIELDS:
		// coordinates: z.object({              // For map centering
		//   lat: z.number(),
		//   lng: z.number(),
		// }).optional(),
		// timezone: z.string().optional(),     // Local timezone
		// currency: z.string().optional(),     // Local currency
		// language: z.string().optional(),     // Primary language
	}),
});

// ==========================================
// EXPORT COLLECTIONS
// ==========================================
// To add new content types, create new collections above 
// and add them to the export below
export const collections = { 
	walks, 
	cities,
	// Add new collections here:
	// restaurants,
	// hotels,
	// events,
};
