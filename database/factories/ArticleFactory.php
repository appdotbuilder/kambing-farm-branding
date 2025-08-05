<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence();
        $categories = ['tips', 'perawatan', 'pakan', 'kesehatan', 'breeding', 'teknologi'];
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => $this->faker->paragraph(),
            'content' => $this->faker->paragraphs(5, true),
            'category' => $this->faker->randomElement($categories),
            'status' => 'published',
            'published_at' => $this->faker->dateTimeBetween('-6 months', 'now'),
            'user_id' => User::factory(),
        ];
    }
}