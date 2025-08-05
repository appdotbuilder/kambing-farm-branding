<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GalleryItem>
 */
class GalleryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['kandang', 'kambing', 'peralatan', 'aktivitas', 'produk'];
        
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->sentence(),
            'image' => 'gallery/sample-' . $this->faker->numberBetween(1, 10) . '.jpg',
            'category' => $this->faker->randomElement($categories),
            'sort_order' => $this->faker->numberBetween(1, 100),
            'status' => 'active',
        ];
    }
}