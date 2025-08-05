<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FarmInfo>
 */
class FarmInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => 'Peternakan Kambing Berkah Jaya',
            'description' => 'Peternakan kambing modern yang berfokus pada kualitas dan kesehatan ternak dengan standar internasional.',
            'history' => 'Didirikan pada tahun 2010, Peternakan Kambing Berkah Jaya telah berkembang menjadi salah satu peternakan terdepan di Indonesia dengan populasi lebih dari 500 ekor kambing berbagai jenis.',
            'location' => 'Jl. Raya Peternakan No. 123, Bogor, Jawa Barat',
            'phone' => '+62 21 8765 4321',
            'email' => 'info@peternakanberkahjaya.com',
            'vision' => 'Menjadi peternakan kambing terbaik di Indonesia yang menghasilkan produk berkualitas tinggi dan berkelanjutan.',
            'mission' => 'Mengembangkan peternakan kambing modern dengan teknologi terdepan, menjaga kesehatan ternak, dan memberikan produk terbaik kepada konsumen.',
        ];
    }
}